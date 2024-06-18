// rest-api/auth/user/route.js

import connect from "@/utils/dbConnect";
import jwt from 'jsonwebtoken';
import jwtConfig from "@/utils/jwtConfig";
import { NextResponse } from "next/server";
import { createAccessToken, createRefreshToken, isTokenExpired, verifyExpiredToken, verifyRefreshToken, verifyToken } from "../../token/tokenHandler";
import TeamMemberModel from "../../models/memberModel";


export const dynamic = 'error'; // Add this line
await connect();

export async function GET(request){

        // Parse tokens from the request cookies
        const accessToken = request.cookies.get('accessToken');
        const refreshToken = request.cookies.get('refreshToken');
            // token obtaineed from cookie is in format
            // {"name":"accessToken","value":"fhgkjlkjljkl"}
        console.log("received accesstoken from cookies:",accessToken);
        console.log("received refreshToken from cookies:",refreshToken);
        if (!accessToken) {
          console.log('no access token received');
          return NextResponse.json({status:false, message: 'No token provided' },{status:200});
        }
  
        // Verify the access token ...here validity and expiration both checked
        try {
          // Decode the token without verifying it
          const decoded = jwt.decode(accessToken.value);
          
          // If the token couldn't be decoded, it's invalid
          if (!decoded) {
            console.error("Invalid token:", error.message);
            return NextResponse.json({status:false, message: 'Failed to authenticate token.Invalid token' },{status:200});
          }
          //if token is valid...then check for expiry
          const isAccessTokenExpired = isTokenExpired(accessToken.value);
          console.log("isTokenExpired:", isAccessTokenExpired);
          //if access token expired,check for refresh token expiry
          if(isAccessTokenExpired){
            console.log("accesstoken expired");
            //check for refreshtoken
            const refreshTokenVerificationResult = await verifyRefreshToken ({ access_token:accessToken.value, refresh_token: refreshToken.value});
            
            console.log("refreshTokenVerificationResult:",refreshTokenVerificationResult)
            if(!refreshTokenVerificationResult.isValid){
              console.log("refresh token invalid or expired")
              return NextResponse.json({status:false, message: refreshTokenVerificationResult.message },{status:200});
            }
            console.log("refresh token valid")
            // if refresh token is valid and not expired then create a new refresh token and access token and send to cookie 
            const user_id = refreshTokenVerificationResult.user_id;
              //==================validate user===========
            const user = await validateUser(user_id);
            console.log(" user validation if access token expired and refresh token is valid:",user);
            if(user.isvalid){
              const response = NextResponse.json({ status: true,message:'valid user',body:user.authorizeduserData },{status:200});
              /*=========generate json webtoken and refresh token========== */
              const newAccessToken = createAccessToken({id:user.authorizeduserData.member_id});
              const newRefreshToken = await createRefreshToken({ user_id: user.authorizeduserData.member_id });
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
            } 
          }
          //if access token not expired
          const payload = jwt.verify(accessToken.value, jwtConfig.secret, { ignoreExpiration: true });
          console.log("payload:",payload);
                  
          /**============================================== */      
                  // payload is in this format
                  //  "payload": {
                  //     "id": "666886734550f113767b96e3",
                  //     "iat": 1718192331,
                  //     "exp": 1718195931
                  // }
          /**==================================================== */  

          // Find the user based on the decoded token's user ID
          const user = await validateUser(payload.id);
          console.log("user on basis of payload:",user);
          console.log("id of user on basis of payload:",user.authorizeduserData.member_id)
          if(user.isvalid){
            return NextResponse.json({ status: true,message:'valid user',body:user.authorizeduserData },{status:200});
          }   
        } catch (error) {
          console.error("Invalid or expired token:", error.message);
          return NextResponse.json({status:false, message: 'Failed to authenticate token.Either Invalid or expired token' },{status:200});
        }       

}
/**===============user validation function================ */
const validateUser= async(user_id)=>{
  // Find the user based on the decoded token's user ID
  const user = await TeamMemberModel.findById(user_id);

  if (!user) {
    return NextResponse.json({status:false, message: 'not a valid user' },{status:200});
  }
  // Respond with the user's data
  const authorizeduserData ={
    member_id : user._id,
    member_name : user.member_name,
    member_email : user.member_email,
    contact:user.contact,
    role:user.role,
    profile_image:user.profile_image

  }
  return {isvalid:true,message:'user is valid',authorizeduserData:authorizeduserData}
}