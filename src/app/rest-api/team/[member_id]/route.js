import mongoose from "mongoose";
import { NextResponse } from "next/server";
import TeamMemberModel from "../../models/memberModel";
import connect from "@/utils/dbConnect";


await connect();

// Validate ObjectId
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
  };

export async function GET(request,{params}){
    // const { searchParams } = new URL(request.url);// or below both works
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const _id = params.member_id;
    // Check if the id is a valid ObjectId
    if (!isValidObjectId(id)) {
        return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
    }

    let response;
    let teamMember;
    let updatedTeamMember;
    try {
        teamMember = await TeamMemberModel.findById(id);
        if (!teamMember) {
        return NextResponse.json({status:false, message: `user not found with id:${_id}` }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ status:false,message: "Error finding user" }, { status: 500 });
    }

    switch (action) {
        case 'fetch':
            response = { message: 'user data fetched successfully', body:teamMember, status:true };
            break;
        case 'modify-status':
        // Logic for 'modify-status' action
        teamMember.status = !teamMember.status;
        try {
            updatedTeamMember= await teamMember.save();
            response = { message: 'status changed successfully', body:teamMember, status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in changing status", status: false }, { status: 500 });
        }
        response = { action: 'modify-status',  message: 'Status modified successfully', body:teamMember };
        break;
        case 'trash':
        // Logic for 'trash' action
        teamMember.trash = true;
        try {
            updatedTeamMember= await teamMember.save();
            response = { message: 'Moved to trash successfully', body:teamMember, status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in deleting user", status: false }, { status: 500 });
        }
       
        break;
        case 'restore':
        // Logic for 'trash' action
        teamMember.trash = false;
        try {
            updatedTeamMember= await teamMember.save();
            response = { message: 'restored successfully', body:teamMember,status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in restoring", status: false }, { status: 500 });
        }
       
        break;
        case 'delete':
        // Logic for 'delete' action
        try {
            await TeamMemberModel.findByIdAndDelete(id);
            response = { action: 'delete', message: 'Deleted successfully' };
        } catch (error) {
            return NextResponse.json({ message: "Error deleting media category", status: false }, { status: 500 });
        }
        break;
        default:
        // Default case for unknown actions
        return NextResponse.json({ status: false, message: `Unknown action: ${action}` }, { status: 400 });
    }
    return NextResponse.json(response,{status:200});
}


/**========================Editing team member=============== */

export async function PUT(request,{params}){

    const _id = params.member_id;
    const receivedData = request.json();

    return NextResponse.json({status:true,body:{id:_id,receivedData:receivedData},message:"editing team member"},{status:200})
}