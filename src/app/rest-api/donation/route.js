// app/rest-api/donation/route.js

import connect from "@/utils/dbConnect";
import OnlineTransactionModel from "../models/onlineTransactionModel";
import { NextResponse } from "next/server";

await connect();

export async function GET(){
    const donationList= await OnlineTransactionModel.find().sort({['createdAt']:'desc'}).limit(5).populate('donor');
    return NextResponse.json({body:donationList,message:"donatio list fetched successfully with donor information"},{status:200})
}