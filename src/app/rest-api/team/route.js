import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import TeamMemberModel from "../models/memberModel";

await connect();
export async function GET(){
    const teamList= await TeamMemberModel.find();
    return NextResponse.json({body:teamList,message:"team list fetched successfully",status:true},{status:200});
}
export async function POST (request){
  const receivedData = await request.json();
  return NextResponse.json({cody:receivedData,message:"post data received successfully",status:true},{status:200})
}