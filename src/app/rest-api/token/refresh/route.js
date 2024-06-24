// app/api/protected/refresh/route.js
import { NextResponse } from "next/server";
import  jwt, { sign, verify }  from "jsonwebtoken";
import jwtConfig from "@/utils/jwtConfig";

export async function GET(request){
    // Parse tokens from the request cookies
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;
    console.log('access token received:',accessToken);
    console.log('refresh token received:',refreshToken);
    let decodedRefreshToken;
    try {
        decodedRefreshToken= verify(refreshToken,jwtConfig.refresh_secret);  
        console.log("valid refresh token");  
    } catch (error) {
        return NextResponse.json({message:'refresh token invalid'},{status:400})
    }
    if (accessToken) {
        console.log("if access token present")
        try {
            const decodedAccessToken= verify(accessToken.value,jwtConfig.secret);
            return NextResponse.json({ status: true, message: "token validation successfull",newAccessToken:accessToken});
        } catch (error) {
            return NextResponse.json({status:400})
        }
        
    }else{
        const newAccessToken = sign({ id: decodedRefreshToken.user_id}, jwtConfig.secret,{expiresIn: jwtConfig.jwtExpiration });
        console.log("new access token generated:",newAccessToken)
        return NextResponse.json({ status: true, message: "token validation successfull",newAccessToken:newAccessToken});
    }
    
    
}
