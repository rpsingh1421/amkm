import { NextResponse } from "next/server";
import TeamMemberModel from "../../models/memberModel";
import connect from "@/utils/dbConnect";

await connect();

export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type'); // this will define what type of list we want to fetch
console.log("search prarams",type)
    let response ;
    let memberList;
    switch (type) {
        case 'all':
            memberList= await TeamMemberModel.find().select("-password");
            response = NextResponse.json({status:true,body:memberList,message:'all team member list fetched successfully'});
            break;
        case 'active':// status active
            memberList= await TeamMemberModel.find({status:true}).select("-password");
        response =NextResponse.json({status:true,message:'all active team member list fetched successfully'});
            break;
        case 'valid': // trash false ..status doesn't matter
            memberList= await TeamMemberModel.find({trash:false}).select("-password");
        response = NextResponse.json({status:true,message:'all valid team member list fetched successfully'});            
            break;
        case 'trash':
            memberList= await TeamMemberModel.find({trash:true}).select("-password");
            response = NextResponse.json({status:true,message:'all trashed team member list fetched successfully'});            
            break;
        case 'in-active':// status active
            memberList= await TeamMemberModel.find({status:false,trash:false}).select("-password");
            response = NextResponse.json({status:true,body:memberList,message:'all pending member request list fetched successfully'});
            break;
        default:
            // Default case for unknown actions
            return NextResponse.json({status:false,message: `Unknown action type: ${type}` }, { status: 400 });
    }
    return response;
    // return NextResponse.json(response,{status:200});
}