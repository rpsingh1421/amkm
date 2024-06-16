


import uploadFile from '@/utils/fileUpload';
import { NextResponse } from 'next/server';
import ImageGalleryModel from '../models/imageGalleryModel';
import connect from '@/utils/dbConnect';

// export const config = {
//   api: {
//     bodyParser: false, // Disabling default body parser to handle multipart data
//   }
// };
await connect();
export async function POST(request) {
  try {
    const formData = await request.formData();

    // Handle JSON data
    let mediaFileData = JSON.parse(formData.get('mediaFileData'));

    // Handle files
    const uploadedFiles = formData.getAll('uploadedFiles');
    console.log("uploadedFiles.length:",uploadedFiles.length)
    uploadedFiles.map(async(file) => {
    
        const fileName = Date.now() + file.name.replaceAll(" ", "_");
      
        // Process file uploads
        const uploadResult = await uploadFile('public/image-gallery',file,fileName);
        const filePath = '/image-gallery/'+fileName;
        mediaFileData.fileName = fileName;
        mediaFileData.filePath = filePath;
        
        try {
            const savedFilesData = await ImageGalleryModel.create(mediaFileData);
        } catch (error) {
            return NextResponse.json({ status: false, message:"error in saving into database"},{status:200});
        }
      
    });

    // Now you can process the mediaFileData and filesArray as needed

    return NextResponse.json({ status: true, message:"successfully image uploaded and saved to database" },{status:200});
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({status:false, error: 'Error processing form data' }, { status: 200 });
  }
}

export async function GET(){
  try {
    const imageGalleryList = await ImageGalleryModel.find({trash:false});
    return NextResponse.json({status:true,message:'all valid image list fetched',body:imageGalleryList},{status:200})
  } catch (error) {
    return NextResponse.json({status:false,message:'image list can,t be fetched',body:error.message},{status:200})
  }
}