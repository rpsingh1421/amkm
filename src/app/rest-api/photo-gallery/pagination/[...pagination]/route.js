import ImageGalleryModel from "@/app/rest-api/models/imageGalleryModel";
import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

await connect();
export async function GET(request,{params}){
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const fetch = searchParams.get('fetch');
    // const search = searchParams.get('search');
    const sortField = searchParams.get('sortField') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const category = searchParams.get('category');
    
    const pagination = params.pagination;
    const pageNo = pagination[0]; // Current page number
    const pageSize = pagination[1]; // Current page size
    let query={trash: false};
    if(fetch=='all'){
      query={};
    }
    if(status){
      query={ trash: false ,status:status};
    }
    if(category){
      query.categoryName=category
    }
    console.log("query:",query)
    // if (search) {
    //   query.$or = [
    //     { categoryName: new RegExp(search, 'i') },
    //     { fileName: new RegExp(search, 'i') },
    //     { uploadedBy: new RegExp(search, 'i') },
    //   ];
    // }

    const sortOptions = { [sortField]: sortOrder };
    const skip = parseInt(pageNo) * parseInt(pageSize); //number of documents to be skipped
    
    const rows = await ImageGalleryModel.find(query)
                .sort(sortOptions) // Use dynamic field with square brackets
                .skip(skip) // Skip the calculated number of documents
                .limit(parseInt(pageSize)); // Limit the results to the specified page size
    return NextResponse.json({body:rows},{status:200})
}