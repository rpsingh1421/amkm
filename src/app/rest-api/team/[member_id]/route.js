import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const _id = params.member_id;
    return NextResponse.json({body:{id:_id,action:action},message:"team member related data processed successfully",status:true},{status:200});
}