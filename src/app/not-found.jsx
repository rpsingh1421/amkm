// src/app/not-found.jsx

import Link from 'next/link'
import { headers } from 'next/headers'
import { Box, Typography } from '@mui/material'
 
export default async function NotFound() {
 
  return (
    <Box className="py-[40px] bg-[#fff] font-serif">
        <Box className="">
            <Box className="w-1/2 m-auto">	
                <Box className="col-sm-12 ">
                    <Box className="col-sm-10 col-sm-offset-1  text-center">
                        <Box className="bg-[url('/page_404.gif')] bg-center h-[400px]">
                            <Typography className="text-center text-6xl font-extrabold">404</Typography>
                        </Box>
                        <Box className="mt-[-50px]">
                            <Typography className="text-5xl font-bold"> Look like you&apos;re lost</Typography>
                            <Typography className='text-xl my-[1%]'>the page you are looking for not avaible!</Typography>
                            <Link href="/" className="inline-block text-[#fff] py-[10px] px-[20px] bg-[#39ac31] my-[20px]">Go to Home</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}