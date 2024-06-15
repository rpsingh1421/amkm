import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Eduction = () => {
  return (
    <Paper>
      <Box className="text-center">
        <Typography className='font-bold text-5xl'>EDUCATION</Typography>
        <Typography className="text-sm font-semibold text-[#9e9f9f]">AMKM – Sponsor Child&apos;s Education</Typography>
      </Box>
      {/* =================================== */}
      <Box className="flex gap-[3%] p-[3%]">
        <Box className="w-1/2">
            <Typography>NEEDY STUDENT&apos;S EDUCATION</Typography>
            <Typography></Typography>
        </Box>
        {/* <Box className="w-1/2">
            <Image width={100} height={100} src='' alt=''/>
        </Box>         */}
      </Box>
      {/* ================================= */}
      {/* <Box className="flex gap-[3%] p-[3%]">
        <Box className="w-1/2">
            <Typography>COMPUTER LAB</Typography>
            <Typography></Typography>
        </Box>
        <Box className="w-1/2">
            <Image width={100} height={100} src='' alt=''/>
        </Box>        
      </Box> */}
      {/* ================================= */}
      {/* <Box className="flex gap-[3%] p-[3%]">
        <Box className="w-1/2">
            <Typography>SPORTS ACADEMY</Typography>
            <Typography></Typography>
        </Box>
        <Box className="w-1/2">
            <Image width={100} height={100} src='' alt=''/>
        </Box>        
      </Box> */}
      {/* ================================= */}
      {/* <Box className="flex gap-[3%] p-[3%]">
        <Box className="w-1/2">
            <Typography>NON FORMAL EDUCATION</Typography>
            <Typography></Typography>
        </Box>
        <Box className="w-1/2">
            <Image width={100} height={100} src='' alt=''/>
        </Box>        
      </Box> */}
      {/* ================================= */}
    </Paper>
  )
}

export default Eduction
