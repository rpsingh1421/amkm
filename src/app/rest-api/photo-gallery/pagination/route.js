import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import ImageGalleryModel from "../../models/imageGalleryModel";

await connect();
export async function GET(request){
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const filter= { trash: false ,status:status};
  if(category){
    filter.categoryName=category
  }
  // try {
  //   const imageGalleryList = await ImageGalleryModel.find({trash:false});
  //   const rowCount = imageGalleryList.length;
  //   return NextResponse.json({status:true,message:'all valid image list fetched',body:rowCount},{status:200})
  // } catch (error) {
  //   return NextResponse.json({status:false,message:'image list can,t be fetched',body:error.message},{status:200})
  // }
  try {
    const rowCount = await ImageGalleryModel.countDocuments(filter);
    return NextResponse.json({ status: true, message: 'Total row count fetched', body: rowCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: false, message: 'Error fetching row count', body: error.message }, { status: 500 });
  }
}