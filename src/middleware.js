// src/middleware.js

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import jwtConfig from './utils/jwtConfig';
import axios from 'axios';

const secret = process.env.JWT_SECRET;
const API_BASE_URL=process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
export async function middleware(req) {
    const url = req.nextUrl.clone();
    const accessToken = req.cookies.get('accessToken');
    const refreshToken = req.cookies.get('refreshToken');
    console.log('access token received in middilware:',accessToken);
    console.log('refresh token received in middilware:',refreshToken);
    // If the user is trying to access the login page while already logged in
    if (url.pathname.startsWith('/account/login') && accessToken) {
        console.log("user is already logged in....redirected to admin panel/ dashboard")
        return NextResponse.redirect(new URL('/admin-panel/dashboard', req.url));
    }

    // Protecting admin panel routes
    if (url.pathname.startsWith('/admin-panel')) {
        if(!refreshToken){
            return NextResponse.redirect(new URL('/account/login', req.url));
          }
          // If there's no refresh/access token, redirect to login
        if(!accessToken && !refreshToken){
        return NextResponse.redirect(new URL('/account/login', req.url));
        }
          
        //if refresh token there
        //call refresh model api
        try {
            // const response =  axios.get(`${API_BASE_URL}/rest-api/token/refresh`);
            const response = await axios.get(`${API_BASE_URL}/rest-api/token/refresh`, {
                headers: {
                   
                    Cookie: `accessToken=${accessToken.value}; refreshToken=${refreshToken.value}`
                }
            });
            // const { newAccessToken } = response.data;
            
            const res = NextResponse.next();
            
            res.cookies.set('accessToken', response.data.newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600, // 1 hour
                path: '/',
            });
            return res;
    } catch (error) {
            // return NextResponse.redirect(new URL('/account/login', req.url));
            console.log("refresh token error:",error)
        }
    }   
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin-panel/:path*', '/account/login'],
};
