import { NextResponse } from "next/server";
import MediaCategoryModel from "../../models/categoryModel";
import mongoose from "mongoose";
import connect from "@/utils/dbConnect";

export const dynamic = 'error'; // Add this line
await connect();
// Validate ObjectId
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
  };

export async function GET(request, { params }){
    const url = new URL(request.url);
    const searchParams = url.searchParams; // Get the URL search parameters
    const action = searchParams.get('action'); // Replace with your query parameter key
    const id = searchParams.get('id'); // Replace with your query parameter key
    // const idInt = parseInt(id, 10); // Convert id to an integer
    
      // Check if the id is a valid ObjectId
    if (!isValidObjectId(id)) {
        return NextResponse.json({status:false, message: "Invalid id format" }, { status: 200 });
    }

    let response;
    let mediaCategory;
    try {
        mediaCategory = await MediaCategoryModel.findById(id);
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:false, message: error }, { status: 200 });
    }

    if (!mediaCategory) {
        return NextResponse.json({ status:false, message: "Media category not found" }, { status: 200 });
    }
    switch (action) {
        case 'modify-status':
            // Logic for 'modify-status' action
            mediaCategory.status = !mediaCategory.status;
            const updatedMediaCategory = await mediaCategory.save();
            response = { status: true, body: updatedMediaCategory, message: 'status changed successfully' };
            break;
        case 'trash':
            mediaCategory.trash = !mediaCategory.trash;
            const trashedMediaCategory = await mediaCategory.save();
            response = { status: true, body: trashedMediaCategory, message: 'send to trash successfully' };
            break;
        case 'delete':
            // Logic for 'update' action 
            const result = await MediaCategoryModel.findByIdAndDelete(id);
            response = { status: true, message: 'deleted successfully' };
            break;
        default:
            // Default case for unknown actions
            return NextResponse.json({status:false, message: `Unknown action: ${action}` }, { status: 200 });
    }

    return NextResponse.json(response,{status:200});
}

export async function PUT(request,{params}){
    const url = new URL(request.url);
    const searchParams = url.searchParams; // Get the URL search parameters
    const action = searchParams.get('action'); // Replace with your query parameter key
    const id = searchParams.get('id'); // Replace with your query parameter key
    const receivedJsonData = await request.json();
    const update = receivedJsonData;
    // Check if the id is a valid ObjectId
    if (!isValidObjectId(id)) {
        return NextResponse.json({status:false, message: "Invalid id format" }, { status: 200 });
    }
    if (action=='edit') {
        try {
            const editedMediaCategory = await MediaCategoryModel.findOneAndUpdate({_id:id}, update, { new: true });
            return NextResponse.json({ action: 'edit', body: editedMediaCategory, id:id,message: 'updated successfully' });
        } catch (error) {
            return NextResponse.json({ action: 'edit', message: 'updation failed' });   
        }
    } else {
        return NextResponse.json({status:false, message: `Unknown action: ${action}` }, { status: 200 });
    }
    
}
/**===============study material */

// Breakdown of parseInt(length, 10)
// length Parameter:

// When parameters are passed in the URL, they are always treated as strings. For example, if the URL is http://localhost:3000/rest-api/media-categories/someMessage/123, the length parameter will be the string "123".
// parseInt Function:

// parseInt is a built-in JavaScript function that parses a string argument and returns an integer of the specified radix (base).
// Arguments of parseInt:

// The first argument (length): This is the string that you want to convert to an integer.
// The second argument (10): This specifies the radix (base) to be used for parsing the string. 10 means decimal (base 10), which is the standard numerical system used in everyday life.
// Why Use parseInt with Base 10?
// Using parseInt with a radix of 10 ensures that the string is interpreted as a decimal number. This is important because if the radix is not specified, parseInt can interpret the string in various bases depending on the prefix:

// Strings starting with 0x are interpreted as hexadecimal (base 16).
// Strings starting with 0 (without x) can be interpreted as octal (base 8) in some JavaScript environments, though this is less common in modern JavaScript.