import { NextResponse } from "next/server";

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    return NextResponse.json({body:id,message:"team list fetched successfully",status:true},{status:200});
}