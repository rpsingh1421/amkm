import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import ImageGalleryModel from "../../models/imageGalleryModel";

await connect();
export async function GET(request){
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');
  // try {
  //   const imageGalleryList = await ImageGalleryModel.find({trash:false});
  //   const rowCount = imageGalleryList.length;
  //   return NextResponse.json({status:true,message:'all valid image list fetched',body:rowCount},{status:200})
  // } catch (error) {
  //   return NextResponse.json({status:false,message:'image list can,t be fetched',body:error.message},{status:200})
  // }
  try {
    const rowCount = await ImageGalleryModel.countDocuments({ trash: false ,status:status});
    return NextResponse.json({ status: true, message: 'Total row count fetched', body: rowCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: false, message: 'Error fetching row count', body: error.message }, { status: 500 });
  }
}