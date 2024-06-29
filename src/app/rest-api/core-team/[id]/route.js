import connect from "@/utils/dbConnect";
import { NextResponse, userAgent } from "next/server";
import CoreTeamModel from "../../models/coreTeamModel";

await connect();
// Validate ObjectId
const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};
export async function GET(request,{params}){
    const _id =params.id;
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    if (!isValidObjectId(_id)) {
        return NextResponse.json({message:'invalid id'},{status:500})
    }
    if(action){
        let response;
        try {
            switch (key) {
                case 'fetch':
                    const teamMember = await CoreTeamModel.findById(_id).populate({
                        path:'user',
                        select: 'member_name profile_image -_id'
                    });
                    response = NextResponse.json({body:teamMember,message:'core team member data fetched successfully'},{status:200})
                    break;
                case 'modify-status':
                    const member = await CoreTeamModel.findById(_id);
                    member.status =!member.status;
                    member.save();

                    response = NextResponse.json({message:'status changed successfully'},{status:200})
                    break;
                case 'delete':
                    await CoreTeamModel.findByIdAndDelete(_id);
                    response = NextResponse.json({message:'deleted successfully'},{status:200})
                    break;
                default:
                    break;
            }
            return response;
        } catch (error) {
            return NextResponse.json({message:'internal error',error:error},{status:400})
        }
    }else{
        return NextResponse.json({message:'undefined action'},{status:500})
    }
}

export async function PUT(request,{params}){
    const _id =params.id;
    const receivedData = await request.json();
    if (!isValidObjectId(_id)) {
        return NextResponse.json({message:'invalid id'},{status:500})
    }
    try {
        await CoreTeamModel.findByIdAndUpdate(_id,receivedData);
        return NextResponse.json({message:'core team member data updated',error:error},{status:200})
    } catch (error) {
        return NextResponse.json({message:'updation failed',error:error},{status:400})
    }
}