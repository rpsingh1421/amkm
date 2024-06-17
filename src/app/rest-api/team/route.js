import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

await connect();
export async function GET(){
    return NextResponse.json({message:"hello from api",status:true});
}