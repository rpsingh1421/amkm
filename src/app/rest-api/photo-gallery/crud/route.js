import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connect from "@/utils/dbConnect";
import ImageGalleryModel from "../../models/imageGalleryModel";

// Error occurred prerendering page "/rest-api/image-gallery/crud". Read more: https://nextjs.org/docs/messages/prerender-error

// Error: Route /rest-api/image-gallery/crud/ with `dynamic = "error"` couldn't be rendered statically because it accessed `request.url`.
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
    let imageData;
    try {
        imageData = await ImageGalleryModel.findById(id);
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:false, message: error }, { status: 200 });
    }

    if (!imageData) {
        return NextResponse.json({ status:false, message: "image data not found" }, { status: 200 });
    }
    switch (action) {
        case 'modify-status':
            // Logic for 'modify-status' action
            imageData.status = !imageData.status;
            const updatedimageData = await imageData.save();
            response = { status: true, body: updatedimageData, message: 'status changed successfully' };
            break;
        case 'trash':
            imageData.trash = !imageData.trash;
            const trashedimageData = await imageData.save();
            response = { status: true, body: trashedimageData, message: 'send to trash successfully' };
            break;
        case 'delete':
            // Logic for 'update' action 
            const result = await ImageGalleryModel.findByIdAndDelete(id);
            response = { status: true, message: 'deleted successfully' };
            break;
        default:
            // Default case for unknown actions
            return NextResponse.json({status:false, message: `Unknown action: ${action}` }, { status: 200 });
    }

    return NextResponse.json(response,{status:200});
}

// export async function PUT(request,{params}){
//     const url = new URL(request.url);
//     const searchParams = url.searchParams; // Get the URL search parameters
//     const action = searchParams.get('action'); // Replace with your query parameter key
//     const id = searchParams.get('id'); // Replace with your query parameter key
//     const receivedJsonData = await request.json();
//     const update = receivedJsonData;
//     // Check if the id is a valid ObjectId
//     if (!isValidObjectId(id)) {
//         return NextResponse.json({status:false, message: "Invalid id format" }, { status: 200 });
//     }
//     if (action=='edit') {
//         try {
//             const editedimageData = await ImageGalleryModel.findOneAndUpdate({_id:id}, update, { new: true });
//             return NextResponse.json({ action: 'edit', body: editedimageData, id:id,message: 'updated successfully' });
//         } catch (error) {
//             return NextResponse.json({ action: 'edit', message: 'updation failed' });   
//         }
//     } else {
//         return NextResponse.json({status:false, message: `Unknown action: ${action}` }, { status: 200 });
//     }
    
// }
