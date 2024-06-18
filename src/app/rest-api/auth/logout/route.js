// src/app/rest-api/auth/logout/rote.js
import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import RefreshTokenModel from "../../token/refreshTokenModel";

await connect();

export async function GET(request){
    const accessToken = request.cookies.get('accessToken');
    const refreshToken = request.cookies.get('refreshToken');
    if (refreshToken) {
        // Delete refresh token from the database
        await RefreshTokenModel.findOneAndDelete({ token: refreshToken.value });
    }

   // Clear cookies on the server side
   const response = NextResponse.json({status:true, message: 'Logged out successfully' },{status:200});
   response.cookies.set('accessToken', '', { maxAge: 0, path: '/' });
   response.cookies.set('refreshToken', '', { maxAge: 0, path: '/' });

   return response;
}