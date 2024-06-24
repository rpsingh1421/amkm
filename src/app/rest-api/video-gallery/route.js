import { NextResponse } from "next/server";
import VideoGalleryModel from "../models/videoGalleryModel";
import connect from "@/utils/dbConnect";

await connect();
export async function POST(request){
    try {
        const receivedData = await request.json();
        const savedVideoData = await VideoGalleryModel.create(receivedData);
        return NextResponse.json({status:true,message:'upload video data successfull',body:savedVideoData},{status:200})
    } catch (error) {
        return NextResponse.json({status:false,message:'failed to upload video data',error:error},{status:500})
    }
}

export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    let limit = searchParams.get('limit');

    try {
        const videoDataList = await VideoGalleryModel.find().sort({['createdAt']:'desc'}).limit(limit);
        return NextResponse.json({status:true,message:'all video data list Fetched successfully' ,body:videoDataList},{status:200})
    } catch (error) {
        return NextResponse.json({status:false,message:'all video data list Fetching failed',error:error},{status:500})
    }
}