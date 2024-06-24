import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopBar = () => {
  return (
    <Box className="sm:h-24 sm:flex bg-white rad">
        <Box className ="sm:w-1/2 flex items-center ml-5 ">
            <Box className="w-[100px]">
              <Link href='/'><Image width={100} height={100} src="/aaomilkar.jpeg" alt="amkm_logo" className="w-20 h-auto rounded-full" priority/></Link>
            </Box>
            <Link href='/'><Typography component={'h1'} className="font-serif font-bold ml-2 text-red text-3xl" >AAO MILKAR KAREN MADAD</Typography></Link>
        </Box>
        <Box className="sm:w-1/2 py-[2%] sm:py-0 h-1/2 bg-stone-700 sm:h-24 bordericon flex items-center sm:rounded-bl-full">
          <Box className="flex items-center justify-between px-[5%]">
              <Box className="lg:flex items-center gap-1 w-[40%] hidden">
                <Link href='https://www.facebook.com/amkmofficial/' target='block' className='relative w-[fit]' ><Image width={"100"} height={"100"} src="/social_media/facebook.png" alt="facebook"/></Link>
                <Link href='https://www.instagram.com/amkmofficial/' target='block' className='relative w-[fit]' ><Image width={"100"} height={"100"} src="/social_media/instagram.png" alt="instagram"/></Link>
                <Link href='https://www.twitter.com/amkmofficial/' target='block' className='relative w-[fit]' ><Image width={"100"} height={"100"} src="/social_media/twitter.png" alt="twitter"/></Link>
                <Typography className="text-white text-1xl font-bold ">amkmofficial/</Typography>
              </Box>
              <Box className="lg:w-[59%] flex justify-center items-center gap-1">
                <Image width={"100"} height={"100"} src="/social_media/whatsapp.png" className='w-[10%]' alt="facebook"/>
                <Image width={"100"} height={"100"} src="/social_media/call.png" className='w-[10%]' alt="facebook"/>
                <Typography className="ml-1 text-white font-bold text-sm">+91-8535030208,9045848261</Typography>
              </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default TopBar
