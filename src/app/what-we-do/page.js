import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import Image from 'next/image'

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const page = () => {
  return (
    <MainLayout>

      <Box className="">
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd1.jpg`}
            alt="Our Activities Image 1"
            className="rounded w-full"
            
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd2.jpg`}
            alt="Our Activities Image 2"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd3.jpg`}
            alt="Our Activities Image 3"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd4.jpg`}
            alt="Our Activities Image 4"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd5.jpg`}
            alt="Our Activities Image 5"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd6.jpg`}
            alt="Our Activities Image 6"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd7.jpg`}
            alt="Our Activities Image 7"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd8.jpg`}
            alt="Our Activities Image 8"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd9.jpg`}
            alt="Our Activities Image 9"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd10.jpg`}
            alt="Our Activities Image 10"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd11.jpg`}
            alt="Our Activities Image 11"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd12.jpg`}
            alt="Our Activities Image 12"
            className="rounded w-full"
          />
          <Image
            width={2000}
            height={200}
            src={`${storePath}/what-we-do/wwd13.jpg`}
            alt="Our Activities Image 13"
            className="rounded w-full"
          />
        </Box>
    </MainLayout>
  )
}

export default page

export const metadata = {
  title: "what we do",
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.`,
};