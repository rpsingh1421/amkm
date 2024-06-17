import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import TeamMemberModel from "../models/memberModel";
import ContactDirectory from "../models/contactModel";

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
                email:userData.member_email
            },
            {
               contact: userData.contact
            }
        ]
    });
    if(registeredUser.length>0){
        return NextResponse.json({message:'email or phone is already registered with us',status:false})
    }
    // else{

    // }

  return NextResponse.json({cody:receivedData,message:"post data received successfully",status:true},{status:200})
}