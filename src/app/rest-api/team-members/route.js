import bcrypt from "bcrypt";
import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import TeamMemberModel from "../models/memberModel";
import path from 'path';
import { writeFile, mkdir } from "fs/promises";
import uploadFile from "@/utils/fileUpload";
import ContactDirectory from "../models/contactModel";

/*==============Connecting to database============== */
await connect();

export async function POST(request,content){
    
    // const receivedformData = await request.formData();
    // const userData = JSON.parse(receivedformData.get('userData'));
    const userData = await request.json();
    const registeredUser = await ContactDirectory.find({
        $or: [
                {
                    email:userData.member_email
                },
                {
                   contact: userData.contact
                }
             ]
    });
    if(registeredUser.length>0){
        return NextResponse.json({message:'email or phone is already registered with us',status:false})
    }else{
        // for (const key of receivedformData.keys()) {
        //     if (key !== 'userData') {
        //       const file = receivedformData.get(key);
        //       // const fileName = file.name;
        //       const fileName = Date.now() + file.name.replaceAll(" ", "_");
      
        //       // Process file uploads
        //       const uploadResult = await uploadFile('public/team',file,fileName);
              
        //       // Store the file path in userData
        //       userData[key] = '/team/'+fileName;
        //     }
        //   }
      
          // hash password
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(userData.password,salt);
          userData.password = hashPassword;
          // return NextResponse.json({userData:userData});
          try {
              const savedteamMember = await TeamMemberModel.create(userData);
              /*=======save contact details in contactdirectory starts=========== */
              const contactData = {};
              contactData.email = savedteamMember.member_email;
              contactData.contact = savedteamMember.contact;
              contactData.user = savedteamMember._id;
              await ContactDirectory.create(contactData);
              /*=======save contact details in contactdirectory ends=========== */
              return NextResponse.json({message:"you are succesfully registerd as team member",status:true,body:savedteamMember},{status:200})
          } catch (error) {
              console.error(error);
              return NextResponse.json({error:error},{status:200})
          }
    }    
}

export async function GET(request, content) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const status = searchParams.get('status');
    const trash = searchParams.get('trash');
    const isDeleted = searchParams.get('isDeleted');
    try {
        const fetchedMemberList = await TeamMemberModel.find();
        if(id){
            const member = fetchedMemberList.find(item => item._id == id);
            if (member) {
                return NextResponse.json({message:'member data fetched successfully',status:true,body:member},{status:200})
              } else {
                return NextResponse.json({message:'member not found',status:false,body:error},{status:200})
              }
        }else if (trash) {
            
        } else {
            return NextResponse.json({message:'member list fetched successfully',status:true,body:fetchedMemberList},{status:200})
        }
        return NextResponse.json({body:fetchedMemberList},{status:200})
    } catch (error) {
        return NextResponse.json({message:'something gone wrong',status:false,body:error},{status:200})
    }
}

/*============================================================= */
