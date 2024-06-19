import { NextResponse } from "next/server";
import ImageGalleryModel from "../models/imageGalleryModel";
import connect from "@/utils/dbConnect";

await connect();
export async function GET(){
  try {
    const imageGalleryList = await ImageGalleryModel.find({trash:false});
    return NextResponse.json({status:true,message:'all valid image list fetched',body:imageGalleryList},{status:200})
  } catch (error) {
    return NextResponse.json({status:false,message:'image list can,t be fetched',body:error.message},{status:200})
  }
}
export async function POST(request){
  try {
    const receivedData = await request.json();
    const savedFilesData = await ImageGalleryModel.insertMany(receivedData);
    console.log("received data",receivedData);
    return NextResponse.json({status:true,message:'images saved successfully',body:savedFilesData},{status:200});
  } catch (error) {
    return NextResponse.json({status:false,error:error,message:'image not uploaded'},{status:400});
  }
  
}