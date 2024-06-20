// src/middleware.js

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import jwtConfig from './utils/jwtConfig';

const secret = process.env.JWT_SECRET;

export async function middleware(req) {
    const url = req.nextUrl.clone();
    const accessToken = req.cookies.get('accessToken');
    const refreshToken = req.cookies.get('refreshToken');

    // If the user is trying to access the login page while already logged in
    if (url.pathname.startsWith('/account/login') && accessToken) {
        console.log("user is already logged in....redirected to admin panel/ dashboard")
        return NextResponse.redirect(new URL('/admin-panel/dashboard', req.url));
    }

    // Protecting admin panel routes
    if (url.pathname.startsWith('/admin-panel')) {
        if (!accessToken) {
            console.log("access token is not present....redirected to account/login")
            return NextResponse.redirect(new URL('/account/login', req.url));
        }

        try {
            // Verify access token
            // Decode the token without verifying it
            const decoded = jwt.decode(accessToken.value,jwtConfig.secret);
            // If the token couldn't be decoded, it's invalid
            if (!decoded) {
                console.log("access token is not present but not valid....redirected to account/login")
                return NextResponse.redirect(new URL('/account/login', req.url));
            }

            const exp = decoded.exp * 1000;
            // If token is about to expire in the next minute, refresh it
            if (exp - Date.now() < 60 * 1000) {
                // Add your token refresh logic here
                // console.log("access token is near to expiry..need a new token");
                // try{
                //     await axios.post('/api/refresh-token', { token: refreshToken });
                // }catch(error){
                //     return NextResponse.redirect(new URL('/account/login', req.url));
                // }
                
            }

            return NextResponse.next();
        } catch (error) {
            // console.error("Error processing token:", error);
            return NextResponse.redirect(new URL('/account/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin-panel/:path*', '/account/login'],
};
