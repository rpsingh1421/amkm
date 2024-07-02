import { NextResponse } from "next/server";
import HomePageModel from "../models/homePageModel";
import connect from "@/utils/dbConnect";
/**file upload related */
// import { writeFile } from 'fs/promises';
// import { join } from 'path';

await connect();
export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const section = searchParams.get('section');
    console.log('section:',section)
    try {
        let fetchedData;
        if(section=='gallery'){
            fetchedData = await HomePageModel.find({section:section}).limit(5);
        }
        if(section!='gallery'){
            fetchedData = await HomePageModel.findOne({section:section});
        }
        
        return NextResponse.json({body:fetchedData,message:'sucessfully fetched desired output'},{status:200})
    } catch (error) {
        return NextResponse.json({error:error,message:'Something went wrong'},{status:500})
    }
}
export async function POST(request){
    const receivedData = await request.json();
    console.log("received data:",receivedData);
    try {
        const savedData = await HomePageModel.create(receivedData);
        return NextResponse.json({body:savedData,message:`sucessfully saved ${receivedData.section} section Data`},{status:200})
    } catch (error) {
        return NextResponse.json({error:error,message:'Something went wrong'},{status:500})
    }
}

export async function PUT(request){

    const receivedData= await request.json();
    try {
        const savedData = await HomePageModel.findOneAndUpdate({section:receivedData.section},receivedData);
        return NextResponse.json({body:savedData,message:`sucessfully updated ${receivedData.section} section Data`},{status:200})
    } catch (error) {
        return NextResponse.json({error:error,message:'Something went wrong'},{status:500})
    }
    // const formData = await request.formData();
    // const formDataObject = Object.fromEntries(data);//convert formdata as object
    // console.log("Received form data:",formDataObject);

    // // Handle single file if present and name of file in formdata is known
    // const file = formData.get('image1');
    // if (file && file instanceof File) {
    //   const bytes = await file.arrayBuffer();
    //   const buffer = Buffer.from(bytes);

    //   // Save the file
    //   const path = join(process.cwd(), 'public', 'uploads', file.name);
    //   await writeFile(path, buffer);
    //   console.log('Received file:', file.name);
    // }

    
}