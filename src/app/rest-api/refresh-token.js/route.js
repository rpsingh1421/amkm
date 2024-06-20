import { NextResponse } from "next/server";
import { createAccessToken, createRefreshToken } from "../token/tokenHandler";
import  jwt  from "jsonwebtoken";
import jwtConfig from "@/utils/jwtConfig";

export async function GET(request){
    // Parse tokens from the request cookies
    const accessToken = request.cookies.get('accessToken');
    const refreshToken = request.cookies.get('refreshToken');
    const response = NextResponse.json({ status: true,message:'valid user'},{status:200});
    
    /*=========generate json webtoken and refresh token========== */
    try {
        const payload = jwt.verify(accessToken.value,jwtConfig.secret);
    const newAccessToken = createAccessToken({id:payload.id});
    const newRefreshToken = await createRefreshToken({ user_id: payload.id });
    // Set cookies
    response.cookies.set('accessToken', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600, // 1 hour
        path: '/',
    });

    response.cookies.set('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400, // 24 hours
        path: '/',
    });
    return response;
    } catch (error) {
        return NextResponse.json({status:false,error:error,message:'refresh token generation failed'},{status:500})
    }
    
}