import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import HomePageModel from "../../models/homePageModel";
import mongoose from "mongoose";

await connect();
// Validate ObjectId
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};
export async function PUT(request,{params}){
    const _id = params.id;
    const receivedData = await request.json();
    console.log('received data to update:',receivedData)
    if (isValidObjectId(_id)) {
        try {
            const updatedData= await HomePageModel.findByIdAndUpdate(_id,receivedData);
            return NextResponse.json({message:`${updatedData.section} data updated successfully`},{status:200})
        } catch (error) {
            return NextResponse.json({message:`failed to update ${updatedData.section} data`},{status:400})
        }
    } else {
        return NextResponse.json({message:'invalid id'},{status:500})
    }
}