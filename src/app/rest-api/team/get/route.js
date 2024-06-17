export async function GET(request){
    return NextResponse.json({body:request,message:"team list fetched successfully",status:true},{status:200});
}