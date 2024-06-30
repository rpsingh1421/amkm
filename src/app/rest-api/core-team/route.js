import connect from "@/utils/dbConnect";
import CoreTeamModel from "../models/coreTeamModel";
import { NextResponse } from "next/server";

await connect();
export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    let query;
    if(type){
        query={status:true}
    }
    try {
        const teamList= await CoreTeamModel.find(query)
        .populate({
            path: 'user',
            select: 'member_name profile_image _id'
            // select: 'member_name profile_image -_id' // Include only name,and image, exclude _id
          });
        return NextResponse.json({body:teamList ,message:'core team list fetched successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'error in fetching core team list'},{status:500})
    }
}

export async function POST(request){
    const receivedData=await request.json();

    try {
        const savedCoreMember= await CoreTeamModel.create(receivedData);
        return NextResponse.json({body:savedCoreMember ,message:'core team member added successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'error in adding core team member'},{status:500})
    }
}