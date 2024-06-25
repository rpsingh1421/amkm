import mongoose from "mongoose";
import { NextResponse } from "next/server";
import TeamMemberModel from "../../models/memberModel";
import connect from "@/utils/dbConnect";
import ContactDirectory from "../../models/contactModel";


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
    if (!isValidObjectId(_id)) {
        return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
    }

    let response;
    let teamMember;
    let updatedTeamMember;
    try {
        teamMember = await TeamMemberModel.findById(_id);
        
        if (!teamMember) {
            return NextResponse.json({status:false, message: `user not found with id:${_id}` }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ status:false,message: "Error finding user" }, { status: 500 });
    }

    switch (action) {
        case 'fetch':
            delete teamMember.password;
            response = { message: 'user data fetched successfully', body:teamMember, status:true };
            break;
        case 'modify-status':
        // Logic for 'modify-status' action
        teamMember.status = !teamMember.status;
        try {
            updatedTeamMember= await teamMember.save();
            delete updatedTeamMember.password
            response = {body:updatedTeamMember, message: 'status changed successfully',status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in changing status", status: false }, { status: 500 });
        }
        // response = { action: 'modify-status',  message: 'Status modified successfully', body:teamMember };
        break;
        case 'trash':
        // Logic for 'trash' action
        teamMember.trash = true;
        try {
            updatedTeamMember= await teamMember.save();
            response = { message: 'Moved to trash successfully', status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in deleting user", status: false }, { status: 500 });
        }
       
        break;
        case 'restore':
        // Logic for 'trash' action
        teamMember.trash = false;
        try {
            updatedTeamMember= await teamMember.save();
            response = { message: 'restored successfully', status:true };
        } catch (error) {
            return NextResponse.json({ message: "Error in restoring", status: false }, { status: 500 });
        }
       
        break;
        case 'delete':
        // Logic for 'delete' action
        try {
            await TeamMemberModel.findByIdAndDelete(_id);
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
    const receivedData =await request.json();
    // Check if the id is a valid ObjectId
    if (!isValidObjectId(_id)) {
        return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
    }
    try {
        const { member_email, contact, ...otherData } = receivedData;
    
        let teamMember = await TeamMemberModel.findById(_id);
    
        if (!teamMember) {
            return NextResponse.json({status:false, message: `user not found with id:${_id}` }, { status: 404 });
        }
    
        // Check if email or contact is changed
        let emailChanged = teamMember.member_email !== member_email;
        let contactChanged = teamMember.contact !== contact;
    
        // Check for existing email and contact in the ContactDirectory
        if (emailChanged) {
            const existingEmail = await ContactDirectory.findOne({ email: member_email });
            if (existingEmail) {
                return NextResponse.json({status:false,message:`provided email:${member_email} already registered`},{status:400})
            }
        }
    
        if (contactChanged) {
            const existingContact = await ContactDirectory.findOne({ contact: contact });
            if (existingContact) {
                return NextResponse.json({status:false,message:`provided contact number:${member_email} already registered`},{status:400})
            }
        }

        // Exclude aadhar_number and pancard_number from update
        delete otherData.aadhar_number;
        delete otherData.pancard_number;
        delete otherData.aadhar_image;
        delete otherData.pancard_image;
        // Update team member data
        teamMember.member_email = member_email;
        teamMember.contact = contact;
        Object.assign(teamMember, otherData);
        const updatedTeamMember = await teamMember.save();
        delete updatedTeamMember.password;
        // Add new contact/email to the ContactDirectory if they are changed
        if (emailChanged) {
            await ContactDirectory.create({ email: member_email, user: teamMember._id });
        }
    
        if (contactChanged) {
            await ContactDirectory.create({ contact: contact, user: teamMember._id });
        }
    
        return NextResponse.json({status:true,body:updatedTeamMember,message:"team member data updated successfully"},{status:200})
    } catch (error) {
        console.error('Error updating team member:', error);
        return NextResponse.json({status:false, message: 'Error updating team member' }, { status: 500 });
    }
}