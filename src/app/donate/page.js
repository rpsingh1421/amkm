import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import PaymentForm from './PaymentForm'
import MainLayout from '../components/Layout/MainLayout'

const Donate = () => {
  return (
    <MainLayout>
      <Box className="bg-cover bg-[url('/project-work/p58_image.jpg')] ">
        <Box className="sm:flex w-[90%] py-[3%] m-auto gap-5">
          <Box className="sm:w-1/2">
            <Paper className="text-center mb-[3%] p-[3%] bg-gray-300 opacity-75 rounded-2xl">
              <Typography className='text-xl font-bold'>We work towards creating quality and equitable opportunities for children
                and communities to learn and grow with a view to long term sustainable change.
              </Typography>
              
            </Paper>
            <Paper className='rounded-2xl opacity-75 p-[2%]'>
              <Box className="text-center"><Typography className='font-bold text-3xl p-[2%]'>ACCOUNT DETAILS</Typography></Box>
              <Box>
                <Typography className="font-semibold text-base">NAME OF A/C- “AAO MILKAR KAREN MADAD”</Typography>
                <Typography className="font-semibold text-base">NAME OF BANK- BANK OF INDIA</Typography>
                <Typography className="font-semibold text-base">NAME OF BRANCH- SAKET, NEW DELHI,110017</Typography>
                <Typography className="font-semibold text-base">A/C NO.- 604510110014445</Typography>
                <Typography className="font-semibold text-base">IFSC CODE- BKID0006045</Typography>
                <Typography className="font-semibold text-base">BRANCH CODE- 006045</Typography>
                <Typography className="font-semibold text-base">MICRO- 110013047</Typography>
                <Typography className="font-semibold text-base">SWIFT CODE- BKIDINBB</Typography>
              </Box>
            </Paper>
          </Box>
          <PaymentForm/>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Donate
export const metadata = {
  title: "Charity Donation Online in India | Donate Money Online",
  description: "Bring some smile on their faces. Donate to transform a child's life. Your donation will help the underprivileged child to build his or her future. Help them educate with AMKM. Click the link to be a part of the charity.",
}