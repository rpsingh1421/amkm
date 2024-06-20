import connect from "@/utils/dbConnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import VideoGalleryModel from "../../models/videoGalleryModel";

await connect();
// Validate ObjectId
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

export async function GET(request,{params}){
    const _id = params.video_id;
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    if (!isValidObjectId(_id)) {
        return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
    }
    if (action==='modify-status') {
        try {
            const video= await VideoGalleryModel.findById(_id);
            video.status = !video.status;
            await video.save();
            return NextResponse.json({message:`status change is successful`,status:true},{status:200})
    
        } catch (error) {
            console.error(error)
            return NextResponse.json({status:false,message:`status change is failed`,error:error},{status:500})
        }
    } else {
        try {
            const videoData= await VideoGalleryModel.findById(_id);
            return NextResponse.json({body:videoData,message:`fetching video data for id ${_id} is successful`,status:true},{status:200})
    
        } catch (error) {
            console.error(error)
            return NextResponse.json({status:false,message:`fetching video data for id ${_id} is failed`,error:error},{status:500})
        }
    }
    
}

export async function PUT(request,{params}){
    const _id = params.video_id;
    console.log("video id to edit:",_id)
    // return NextResponse.json({_id});
    try {
        const receivedData = await request.json();
        if (!isValidObjectId(_id)) {
            return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
        }
       
        const updatedVideoData= await VideoGalleryModel.findByIdAndUpdate(_id,receivedData, { new: true });
        return NextResponse.json({body:updatedVideoData,message:`Editing video data for id ${_id} is successful`,status:true},{status:200})

    } catch (error) {
        console.error(error)
        return NextResponse.json({status:false,message:`Editing video data for id ${_id} is failed`,error:error},{status:500})
    }
}

export async function DELETE(request,{params}){
    const _id = params.video_id;
    console.log("video id to edit:",_id)
    // return NextResponse.json({_id});
    try {
        
        if (!isValidObjectId(_id)) {
            return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
        }
        await VideoGalleryModel.findByIdAndDelete(_id);
        return NextResponse.json({message:`video data for id ${_id} is deleted`,status:true},{status:200})

    } catch (error) {
        console.error(error)
        return NextResponse.json({status:false,message:`video data for id ${_id} is not deleted`,error:error},{status:500})
    }
}