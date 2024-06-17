import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import TeamMemberModel from "../models/memberModel";
import ContactDirectory from "../models/contactModel";
import bcrypt from "bcrypt";

await connect();
export async function GET(){
    const teamList= await TeamMemberModel.find();
    return NextResponse.json({body:teamList,message:"team list fetched successfully",status:true},{status:200});
}
export async function POST (request){
    const receivedData = await request.json();
    const registeredUser = await ContactDirectory.find({
        $or: [
            {
                email:receivedData.member_email
            },
            {
               contact: receivedData.contact
            }
        ]
    });
    if(registeredUser.length>0){
        return NextResponse.json({message:'email or phone is already registered with us',status:false})
    }
    else{
        try {
            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(receivedData.password,salt);
            receivedData.password = hashPassword;
            const savedteamMember = await TeamMemberModel.create(receivedData);
            /*=======save contact details in contactdirectory starts=========== */
            const contactData = {};
            contactData.email = savedteamMember.member_email;
            contactData.contact = savedteamMember.contact;
            contactData.user = savedteamMember._id;
            await ContactDirectory.create(contactData);
            /*=======save contact details in contactdirectory ends=========== */
            return NextResponse.json({message:"you are succesfully registerd as team member",status:true,body:savedteamMember},{status:200})
        } catch (error) {
            console.error(error);
            return NextResponse.json({error:error},{status:200})
        }
    }

//   return NextResponse.json({cody:receivedData,message:"post data received successfully",status:true},{status:200})
}