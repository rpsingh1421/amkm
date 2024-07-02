import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import VisitorModel from "../models/visitorModel";
import ContactDirectory from "../models/contactModel";
import { sendMail } from "@/utils/send-mail";

await connect();
export async function GET(request){
    const searchParams= request.nextUrl.searchParams;
    const fetch = searchParams.get('fetch');
    console.log("fetch type:",fetch);
    let filter;
    if (fetch=='un-read') {
        filter={read:false}
    }
    try {
        const visitorList= await VisitorModel.find(filter).sort({['createdAt']:'desc'});
        return NextResponse.json({status:true,message:'visitors list fetched successfully',body:visitorList},{status:200});
    } catch (error) {
        return NextResponse.json({status:false,message:'something goes wrong...try again later',error:error},{status:500})
    }
}
export async function POST(request){
    try {
        const receivedData = await request.json();
        const savedData= await VisitorModel.create(receivedData);
        const {email,contact} = receivedData;
        const isEmailRegistered = await ContactDirectory.findOne({email:email});
        const isContactRegistered = await ContactDirectory.findOne({contact:contact});

        if(!isEmailRegistered && !isContactRegistered){
            await ContactDirectory.create({email:email,contact:contact})
        }
        if(!isEmailRegistered){
            await ContactDirectory.create({email:email})
        }
        if(!isContactRegistered){
            await ContactDirectory.create({contact:contact})
        }
        return NextResponse.json({status:true,message:'Thanks for contacting us',body:savedData},{status:200});
    } catch (error) {
        return NextResponse.json({status:false,message:'something goes wrong...try again later',error:error},{status:500})
    }
}

export async function PUT(request){
    const receivedData = await request.json();
    const {recipient,subject,message} = receivedData;
    
    const htmlContent = generateEmailHTML(message);
    const ismailSent = await sendMail({
        recipient:recipient,
        subject:subject,
        // text: textContent,
        html: htmlContent,
    })
    if(!ismailSent){
        return NextResponse.json({status:false,message:"Failed to send email"},{status:500});
    }
    return NextResponse.json({message:"Email sent successfully"},{status:200});
}

const generateEmailHTML = (message) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Reply From AMKM-Aao Milkar Karein Madad (org.)</h2>
    <p>We received a query from you:</p>
    <p>${message}</p>
    <p>AMKM-"AAO MILKAR KAREIN MADAD"</p>
  </div>
`;
