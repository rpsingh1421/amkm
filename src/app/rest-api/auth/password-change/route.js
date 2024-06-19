import connect from "@/utils/dbConnect";
import TeamMemberModel from "../../models/memberModel";
import { NextResponse } from "next/server";
import OtpModel from "../../models/otpModel";
import { generateOTP, isOtpExpired } from "@/utils/otpHandler";
import bcrypt from "bcrypt";
import { sendMail } from "@/utils/send-mail";

await connect();
/*=================validate email/phone and generate otp============== */
export async function GET(request){
    const searchParams= request.nextUrl.searchParams;
    const email = searchParams.get('email');
    const contact = searchParams.get('contact');
    
    let user;
    if (email) {
        user = await TeamMemberModel.findOne({member_email:email,status:true,trash:false});
    }
    if (contact) {
        user = await TeamMemberModel.findOne({contact:contact,status:true,trash:false});
    }
    if(!user){
        return NextResponse.json({status:false,message:`user not exist for provided ${email||contact}`},{status:400})
    }
    console.log("user:",user)
    const otp = await generateOTP();
    //delete previous otp related to this user, 
    await OtpModel.deleteOne({user:user._id,type:'resetPassword'});
    await OtpModel.create({otp:otp,type:'resetPassword',user:user._id});
    /**============email related============== */
    const htmlContent = generateEmailHTML(otp);
    const textContent = generateEmailText(otp);
    const ismailSent = await sendMail({
        recipient:email,
        subject:'reset password otp',
        text: textContent,
        html: htmlContent,
    })
    if(!ismailSent){
        return NextResponse.json({status:false,message:"internal server error---try later"},{status:500});
    }
    /**==================================== */
    return NextResponse.json({status:true,user_id:user._id,message:`user found for provided ${email||contact}`},{status:200})
}

/*=================validate otp============== */
export async function POST(request){
    const receivedData = await request.json();
    const {otp,user_id} = receivedData;
    console.log("receivedData:",receivedData)
    if(!otp){
        return NextResponse.json({status:false,message:'empty not allowed'},{status:401});
    }

    const otpDetail = await OtpModel.findOne({otp:otp,user:user_id,type:'resetPassword'});
    if (!otpDetail) {
        return NextResponse.json({status:false,message:'invalid otp'},{status:401});
    }

    const otpExpired = await isOtpExpired(otpDetail.createdAt,5);
    if (otpExpired) {
        return NextResponse.json({status:false,message:'expired otp...try again'},{status:401});
    }

    return NextResponse.json({status:true,message:'otp is valid'},{status:200});
}

/*===============change password=============== */

export async function PUT(request){
    const {password,user_id} = await request.json();
    console.log("recevied password:",password);
    console.log("recevied user_id:",user_id);
    try{
        if(password && user_id){
            const user = await TeamMemberModel.findOne({_id:user_id});
            console.log("user:",user)
            if(!user){
                return NextResponse.json({status:false,message:'invalid user'},{status:401});
            }
            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt);
            user.password = hashPassword;
            await user.save();
            return NextResponse.json({status:true,message:'password changed successfully'},{status:200})
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        return NextResponse.json.json({ status:false,message: "Internal Server Error" },{status:500});
    }
}


const generateEmailHTML = (otp) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Password Reset Request</h2>
    <p>We received a request to reset your password. Use the OTP below to reset it:</p>
    <h3>${otp}</h3>
    <p>If you did not request a password reset, please ignore this email.</p>
    <p>Best regards,</p>
    <p>AMKM-"AAO MILKAR KAREIN MADAD"</p>
  </div>
`;

const generateEmailText = (otp) => `
  Password Reset Request

  We received a request to reset your password. Use the OTP below to reset it:

  OTP: ${otp}

  If you did not request a password reset, please ignore this email.

  Best regards,
  Your Company
`;