import { Box, Typography } from '@mui/material'
import React from 'react'
import MailForm from '../contact/MailForm'
import MainLayout from '../components/Layout/MainLayout'
import Image from 'next/image'
import GIveUsHand from '../components/banner/GiveUsHand'

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const volunteerPage = () => {
  return (
    <MainLayout>
    
      <Box className="relative h-fit">
      <Image width={2000} height={100} alt='amkm_page_banner' src={`${storePath}/amkm_page_banner.png`} className='w-full'/>
        <Typography component={'h2'} className='text-center font-bold font-sans text-3xl sm:text-5xl text-white absolute left-0 right-0 m-auto top-[10%] sm:top-1/2'>Become Volunteer</Typography>
      </Box>
      <Box className="sm:w-[85%] m-auto py-5 px-[5%] sm:px-0">
        <Box className="sm:w-3/4 m-auto">
            <Typography component={'h2'} className='font-bold text-2xl'>&mdash; <span className='text-[#fc6539]'>Join with us</span></Typography>
            <Typography className='font-bold text-5xl italic my-4'>If You Interest! You Can Join With Us <span className='text-stroke'>As A Volunteer.</span></Typography>
            <Typography className='mb-5'>We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</Typography>
        </Box>
       
        <Box className="sm:w-1/2 m-auto">
            <MailForm/>
        </Box>
      </Box>
      <GIveUsHand/>
    </MainLayout>
  )
}

export default volunteerPage
export const metadata = {
    title: "Become Volunteer",
    description: "Join with AMKMK as volunteer that will helps and motivate our team to impart education to poor children as well as work on issues of women as well.",
 }

