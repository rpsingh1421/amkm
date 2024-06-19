import path from 'path';
import { writeFile, mkdir } from "fs/promises";

const uploadFile = async(destinationPath,file,fileName)=>{
    const buffer = Buffer.from(await file.arrayBuffer());
        // Process file uploads
    const uploadDir = path.join(process.cwd(), destinationPath);
    await mkdir(uploadDir, { recursive: true }); // Ensure the directory exists
        // console.log(filename);
    const filePath = path.join(uploadDir, fileName);
    try {
        // Save the file to the directory
        const arrayBuffer = await file.arrayBuffer();
        await writeFile(filePath, Buffer.from(arrayBuffer));
        const result = { Message: "Success", result:true ,fileName:fileName};
        // console.log (result);
        return result
    } catch (error) {
        const result = { Message: "Error occured ", error: error , result:false }
        // console.log (result);
        return result;
    }
}

export default uploadFile;