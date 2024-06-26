"use client";

import CopyRight from '@/app/components/copyright/CopyRight'
import Footer from '@/app/components/footer/Footer'
import NavBar from '@/app/components/navbar/NavBar'
import TopBar from '@/app/components/topbar/TopBar'
import { Box, Button, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const PaymentSuccessContent =  () => {
  const searchParams = useSearchParams();
  return (
    <>
      
      <Box className="m-auto w-[75%] text-center my-[5%]">
        <Typography className="font-bold text-5xl my-[5%] border-b-4 border-[#fc6539]">Your Donation Was Successful</Typography>
        <Typography className='mb-[5%]'>Thank you so much for your generous contribution! In the last 4 decades, it&apos;s people like you who have helped us ensure happier childhoods for over 3 million underprivileged children in India; and for that, we are truly grateful.</Typography>
        <Paper className="rounded-2xl p-[5%] w-3/4 m-auto ">
            <Box className="text-left flex border-2">
              <Typography className='border-r-2 w-1/4 p-[1%]'>Donor Name </Typography>
              <Typography>{searchParams.get("donor")}</Typography>
            </Box>
            <Box className="text-left flex border-l-2 border-b-2 border-r-2">
              <Typography className='border-r-2 w-1/4 p-[1%]'>Transaction ID </Typography>
              <Typography>{searchParams.get("transactionId")}</Typography>
            </Box>
            <Box className="text-left flex border-l-2 border-b-2 border-r-2">
              <Typography className='border-r-2 w-1/4 p-[1%]'>Refrence ID </Typography>
              <Typography>{searchParams.get("providerReferenceId")}</Typography>
            </Box>
            <Box className="text-left flex border-l-2 border-b-2 border-r-2">
              <Typography  className='border-r-2 w-1/4 p-[1%]'>Donation Amount</Typography>
              <Typography>{Number(searchParams.get("amount"))/100}</Typography>
            </Box>
        </Paper>
        <Box className="my-[5%]">
          <Typography className='text-sm'>An email with a receipt for your donation will be sent to
           you. For any further assistance, please write to us at amkmorg@gmail.com. In the meantime, would you like to read stories of children whose futures are powered by your support?</Typography>
        </Box>
        <Box>
          <Button variant='contained'>Go to Home Page</Button>
        </Box>
      </Box>
      <Box className="bg-cover h-[100vh] flex items-end" style={{backgroundImage: `url(${storePath}/project-work/p66_image.jpg)`,width: '100%'}}>
          <Box className=" w-[100%] bg-cover h-20 flex items-center" style={{backgroundImage: `url(${storePath}/volunteers/bg-page-title.webp)`,width: '100%'}}>
            <Typography className='w-fit m-auto text-6xl text-white'>Stories & Updates</Typography>  
          </Box> 
      </Box>
      <Box className="w-fit m-auto text-center my-[5%]">
        <Typography className='block text-[#fc6539] mb-3 text-9xl font-serif'>“</Typography>
        <Typography className='font-bold text-2xl'>If we all do something, <br/>then together there is no problem <br/>that we cannot solve!</Typography>
        <Image width={100} height={100} src={`${storePath}/signature_founder.png`} alt='signature_of_founder_amkm' className='w-fit m-auto h-[100px]'/>
        <Typography className="text-bold text-base my-[2%]">Anurag Singh</Typography>
        <Typography className='font-bold text-base text-[#fc6539]'>Founder, AAO MILKE KAREIN MADAD</Typography>
      </Box>
      <Box className="bg-cover h-[100vh]" style={{backgroundImage: `url(${storePath}/project-work/p57_image.jpg)`,width: '100%'}}> </Box>
     
    </>
  )
}



const paymentSuccessfulPage = () => {
  return (
    <Box>
      <TopBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentSuccessContent />
      </Suspense>
      <Footer/>
      <CopyRight/>
    </Box>
  )
}

export default paymentSuccessfulPage