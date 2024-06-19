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
            memberList= await TeamMemberModel.find();
            return NextResponse.json({status:true,message:'all team member list fetched successfully'});
            break;
        case 'active':// status active
        memberList= await TeamMemberModel.find({status:true});
        return NextResponse.json({status:true,message:'all active team member list fetched successfully'});
            break;
        case 'valid': // trash false ..status doesn't matter
        memberList= await TeamMemberModel.find({trash:false});
        return NextResponse.json({status:true,message:'all valid team member list fetched successfully'});            
            break;
        case 'trash':
            memberList= await TeamMemberModel.find({trash:true});
            return NextResponse.json({status:true,message:'all trashed team member list fetched successfully'});            
            break;
        default:
            // Default case for unknown actions
            return NextResponse.json({status:false,message: `Unknown action type: ${type}` }, { status: 400 });
    }
    // return NextResponse.json(response,{status:200});
}