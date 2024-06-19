// src/middleware.js

// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import axios from 'axios';
// import jwtConfig from './utils/jwtConfig';

// const secret = process.env.JWT_SECRET;

// export async function middleware(req) {
//     const url = req.nextUrl.clone();
//     const accessToken = req.cookies.get('accessToken');
//     const refreshToken = req.cookies.get('refreshToken');

//     // If the user is trying to access the login page while already logged in
//     if (url.pathname.startsWith('/account/login') && accessToken) {
//         return NextResponse.redirect(new URL('/admin-panel/dashboard', req.url));
//     }

//     // Protecting admin panel routes
//     if (url.pathname.startsWith('/admin-panel')) {
//         if (!accessToken || !refreshToken) {
//             // return NextResponse.redirect(new URL('/login', req.url));
//             console.log("on checking admin-panel route....either access token or refresh token not present")
//         }

//         try {
//             // Verify access token
//             console.log("received access token is:",accessToken)
//             console.log("received refresh token is:",refreshToken)
//             // Decode the token without verifying it
//             const decoded = jwt.decode(accessToken.value);
//             // If the token couldn't be decoded, it's invalid
//             if (!decoded) {
//                 console.error("Invalid token:", error.message);
//                 return NextResponse.redirect(new URL('/account/login', req.url));
//             }
//             // const decoded = jwt.verify(accessToken.value, jwtConfig.secret,);
//             const exp = decoded.exp * 1000; // Expiration time in milliseconds

//             // If token is about to expire in the next minute, refresh it
//             if (exp - Date.now() < 60 * 1000) {
//                 console.log("access token is near to expiry")
//             // //     const response = await axios.post('/api/refresh-token', { token: refreshToken });
//             // //     const { newAccessToken, newRefreshToken } = response.data;

//             // //     // Set new tokens in cookies
//             // //     const res = NextResponse.next();
//             // //     res.cookies.set('accessToken', newAccessToken, { httpOnly: true, secure: true });
//             // //     res.cookies.set('refreshToken', newRefreshToken, { httpOnly: true, secure: true });
//             // //     return res;
//             }

//             // Token is valid and not expiring soon
//             console.log("access token is not going to expire soon")
//             return NextResponse.next();
//         } catch (error) {
//             return NextResponse.redirect(new URL('/account/login', req.url));
//             console.log("error in processing:",error)
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/admin-panel/:path*', '/account/login'],
// };
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export async function middleware(req) {
    const url = req.nextUrl.clone();
    const accessToken = req.cookies.get('accessToken');
    const refreshToken = req.cookies.get('refreshToken');

    if (url.pathname.startsWith('/account/login') && accessToken) {
        console.log("user is already logged in....redirected to admin panel/ dashboard")
        return NextResponse.redirect(new URL('/admin-panel/dashboard', req.url));
    }

    if (url.pathname.startsWith('/admin-panel')) {
        if (!accessToken) {
            console.log("access token is not present....redirected to account/login")
            return NextResponse.redirect(new URL('/account/login', req.url));
        }

        try {
            const decoded = jwt.decode(accessToken.value);
            if (!decoded) {
                console.log("access token is not present but not valid....redirected to account/login")
                return NextResponse.redirect(new URL('/account/login', req.url));
            }

            const exp = decoded.exp * 1000;

            if (exp - Date.now() < 60 * 1000) {
                // Add your token refresh logic here
                console.log("access token is near to expiry..need a new token")
            }

            return NextResponse.next();
        } catch (error) {
            console.error("Error processing token:", error);
            return NextResponse.redirect(new URL('/account/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin-panel/:path*', '/account/login'],
};
