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