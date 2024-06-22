import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import VisitorModel from "../models/visitorModel";

await connect();
export async function GET(request){
    try {
        const visitorList= await VisitorModel.find().sort({['createdAt']:'desc'});
        return NextResponse.json({status:true,message:'visitors list fetched successfully',body:visitorList},{status:200});
    } catch (error) {
        return NextResponse.json({status:false,message:'something goes wrong...try again later',error:error},{status:500})
    }
}
export async function POST(request){
    try {
        const receivedData = await request.json();
        const savedData= await VisitorModel.create(receivedData);
        return NextResponse.json({status:true,message:'Thanks for contacting us',body:savedData},{status:200});
    } catch (error) {
        return NextResponse.json({status:false,message:'something goes wrong...try again later',error:error},{status:500})
    }
}

