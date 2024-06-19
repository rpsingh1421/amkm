import connect  from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import MediaCategoryModel from "../models/categoryModel";

/*==============Connecting to database============== */
await connect();

/*==============saving media categories starts============== */
export async function POST(request,content){
    
    const receivedJsonData = await request.json();
    try {
        const savedCategory = await MediaCategoryModel.create(receivedJsonData);
        return NextResponse.json({message:"category added successfully",status:true,body:savedCategory},{status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error:error},{status:200})
    }
}
/*==============saving media categories ends============== */

/*==============fetching all media categories starts============== */
export async function GET(request, {params}) {
    
    const url = new URL(request.url);
    const searchParams = url.searchParams; // Get the URL search parameters
    const fetch = searchParams.get('fetch'); // Replace with your query parameter key
    const type = searchParams.get('type'); // Replace with your query parameter key//VIDEO//IMAGE
    let response;
    let categoryList;
    switch (fetch) {
        case 'all':
            categoryList = await MediaCategoryModel.find().populate('created_by').exec();;
            response = {status:true,body:categoryList,message:'all category list fetched successfully'}
            break;
        case 'active':
            categoryList = await MediaCategoryModel.find({status:true,trash:false,category_type:type});
            response = {status:true,body:categoryList,message:`active ${type} category list fetched successfully`}
            break;
        case 'valid':
            categoryList = await MediaCategoryModel.find({trash:false,category_type:type});
            response = {status:true,body:categoryList,message:`valid ${type} category list fetched successfully`}
            break;
        case 'trash':
            categoryList = await MediaCategoryModel.find({trash:true});
            response = {status:true,body:categoryList,message:'trashed category list fetched successfully'}
            break;
        default:
            // Default case for unknown actions
            return NextResponse.json({status:false, message: `Unknown action: ${action}` }, { status: 200 });
            break;
    }
    return NextResponse.json(response,{status:200});
    // try {
    //     const fetchedCategoryList = await MediaCategoryModel.find().populate('created_by').exec();
    //     return NextResponse.json({message:"category list fetched successfully",status:true,body:fetchedCategoryList},{status:200})
    // } catch (error) {
    //     console.error(error);
    //     return NextResponse.json({message:"category list fetching failed",status:false,body:error},{status:200})
    // }
}

