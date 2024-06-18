"use client"
import { Box, Paper, Typography } from '@mui/material'
import Link from 'next/link'

const RegistrationResult = ({registrationResponse}) => {
  return (
    <Paper className="w-full m-auto p-[2%]">
      <Typography className="font-semibold text-center">You are successfully registered with us</Typography>
      <Box className="border-2 my-[2%]">
        <Box className="flex gap-[2%] border-b-2">
          <Typography className="font-bold text-base w-1/3 border-r-2 p-[2%]">Registered email:</Typography>
          <Typography className="font-semibold text-sm w-2/3 p-[2%]">{registrationResponse && registrationResponse.email}</Typography>
        </Box>
        <Box className="flex gap-[2%] border-b-2">
          <Typography className="font-bold text-base w-1/3 border-r-2 p-[2%]">Registered Phone:</Typography>
          <Typography className="font-semibold text-sm w-2/3 p-[2%]">{registrationResponse && registrationResponse.phoneNumber}</Typography>
        </Box>
        <Box className="flex gap-[2%]">
          <Typography className="font-bold text-base w-1/3 border-r-2 p-[2%]">Password:</Typography>
          <Typography className="font-semibold text-sm w-2/3 p-[2%]">{registrationResponse && registrationResponse.password}</Typography>
        </Box>
      </Box>
      <Typography className="font-semibold text-center">use these credentials to login.....<span><Link underline='none' href='/admin-panel/login' target="_blank" className='text-[#0866ff]'>click here</Link></span></Typography>
        
    </Paper>
  )
}

export default RegistrationResult
