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
    if (isValidObjectId(_id)) {
        try {
            await HomePageModel.findByIdAndUpdate(_id,receivedData);
            return NextResponse.json({message:'image changed successfully'},{status:200})
        } catch (error) {
            return NextResponse.json({message:'failed to change image'},{status:400})
        }
    } else {
        return NextResponse.json({message:'invalid id'},{status:500})
    }
}