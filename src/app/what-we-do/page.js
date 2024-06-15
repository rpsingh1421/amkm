import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import Image from 'next/image'

const page = () => {
  return (
    <MainLayout>

      <Box className="">
        <Image width={100} height={100} src='/what-we-do/wwd1.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd2.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd3.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd4.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd5.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd6.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd7.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd8.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd9.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd10.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd11.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd12.jpg' alt='what_we_do_images' className='w-full'/>
        <Image width={100} height={100} src='/what-we-do/wwd13.jpg' alt='what_we_do_images' className='w-full'/>
      </Box>
    </MainLayout>
  )
}

export default page

export const metadata = {
  title: "what we do",
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.`,
};