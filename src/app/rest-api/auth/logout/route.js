// src/app/rest-api/auth/logout/rote.js
import connect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import RefreshTokenModel from "../../token/refreshTokenModel";


// Error: Route /rest-api/auth/logout/ with `dynamic = "error"` couldn't be rendered statically because it accessed `request.cookies`.
// The error you're encountering is due to the fact that during the build step, Next.js attempts to prerender all pages and routes, including dynamic API routes. Since your API route accesses request.cookies, it cannot be prerendered statically.

// To resolve this, you need to inform Next.js that this route should be treated as a dynamic route and should not be prerendered during the build step.


// export const dynamic = 'error'; // Add this line
export const dynamic = "force-dynamic";
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