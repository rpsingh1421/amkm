import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connect from "@/utils/dbConnect";
import VisitorModel from "../../models/visitorModel";

await connect();

// Validate ObjectId
const isValidObjectId = (id) => {
    const isValid =  mongoose.Types.ObjectId.isValid(id);
    return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
};

export async function GET(request,{params}){
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const _id = params.id;
    isValidObjectId(_id);
    try {
        let visitor;
        let response;
        visitor = await VisitorModel.findById(_id);
        if(!visitor){
            return NextResponse.json({status:false,message:'visitor data not any more exist',error:error},{status:400})
        }
        switch (action) {
            case 'fetch':
                response = NextResponse.json({status:true,message:'visitor data fetched successfully',body:visitor},{status:200});
                break;
            case 'read-status':
                visitor.read = !visitor.read;
                visitor.save();
                response = NextResponse.json({status:true,message:'visitor reading status changed'},{status:200});
                break;
            case 'view-status':
                visitor.view = !visitor.view;
                visitor.save();
                response = NextResponse.json({status:true,message:'visitor visibility status changed'},{status:200});
                break;
            case 'trash':
                await VisitorModel.findByIdAndUpdate(_id,{trash:true});
                response = NextResponse.json({status:true,message:'visitor send to trash ..can be restored'},{status:200});
                break;
            case 'restore':
                await VisitorModel.findByIdAndUpdate(_id,{trash:false});
                response = NextResponse.json({status:true,message:'visitor restored'},{status:200});
                break;
            case 'trash':
                await VisitorModel.findByIdAndDelete(_id);
                response = NextResponse.json({status:true,message:'visitor deleted permanently ..can not be restored'},{status:200});
                break;
            default:
                response = NextResponse.json({status:false,message:'in-valid request'},{status:500})
                break;
        }
        return response;
    } catch (error) {
        return NextResponse.json({status:false,message:'something went wrong...try again later',error:error},{status:500})
    }
    
}