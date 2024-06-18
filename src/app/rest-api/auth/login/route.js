import connect from "@/utils/dbConnect";
import TeamMemberModel from "../../models/memberModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../../token/tokenHandler";

await connect()

export async function POST (request,response){
    const receivedloginData = await request.json();
    console.log('received loginData',receivedloginData)
    // const {email,phone,password} = await request.json();
    /*=========Authenticate user=================== */
    const user = await TeamMemberModel.findOne({$or:[{member_email:receivedloginData.email},{contact:receivedloginData.phone}]});

    if(user==null){
        return NextResponse.json({status:false, message:'provided credentials are not registered with us'},{status:200})
    }else{
        /*====check user status active or not========= */
        if (!user.status) {
            return NextResponse.json({status:false, message:'your account is inactive'},{status:200})
        }
        /*======password matching====== */
        const passwordVerification = await bcrypt.compare(receivedloginData.password, user.password);
        if (!passwordVerification) {
            return NextResponse.json({status:false, message:'wrong password entered'},{status:200})
        }
        /*=========generate json webtoken and refresh token========== */
        const accessToken = createAccessToken({id:user._id});
        const refreshToken = await createRefreshToken({ user_id: user._id });
        /*======user data to be send in response for further use */
        const authorizeduserData ={
            member_id : user._id,
            member_name : user.member_name,
            member_email : user.member_email,
            contact:user.contact,
            role:user.role,
            profile_image:user.profile_image

        }
        // Set cookies
        const response = NextResponse.json({ status:true,message:'user authenticated succefully',body:authorizeduserData });

        response.cookies.set('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600, // 1 hour
            path: '/',
        });

        response.cookies.set('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 86400, // 24 hours
            path: '/',
        });
        return response;
    }
    
}