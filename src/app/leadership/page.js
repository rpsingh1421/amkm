import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import Image from 'next/image'

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const page = () => {
  return (
    <MainLayout>
      <Box className="relative">
        <Image width={1000} height={100} alt='page_banner' className='w-full' src={`${storePath}/leadership_story_bg.jpg`}/>
        <Box className='absolute top-[35%] left-0 right-0 text-center'>
            <Typography component={'h2'} className='text-5xl md:text-9xl font-bold'>LEADERSHIP</Typography>
            <Typography component={'h2'} className='text-2xl sm:text-4xl font-bold'>AMKM - &quot;AAO MILKAR KAREN MADAD&quot; (ORG.) </Typography>
        </Box>
      </Box>
      <Box>
        <Image width={1000} height={100} className='w-full' src={`${storePath}/team/amkm_team1.jpg`} alt='amkm_team'/>
        <Image width={1000} height={100} className='w-full' src={`${storePath}/team/amkm_team2.jpg`} alt='amkm_team'/>
        <Image width={1000} height={100} className='w-full' src={`${storePath}/team/amkm_team3.jpg`} alt='amkm_team'/>
      </Box>
    </MainLayout>
  )
}

export default page
export const metadata = {
  title: "TEAM",
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.Learn more about our NGO leadership, founding members, patrons, governing board, and many others acting as a supporting pillar to this initiative.`,
};
