import { Box, Dialog, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LoginProcessingDialog = () => {
  return (
    <Dialog open 
        sx={{
            "& .MuiDialog-container": {
            "& .MuiPaper-root": {
                width: "30%",
                  // Set your width here
            },
            },
        }}
      >
        <Box className="text-center m-[3%]">
            <Typography className='font-semibold my-[2%] text-xl'>Singning In...</Typography>
            <Box className='w-1/3 m-auto'>
                <Image width={100} height={100} src='/loading-waiting.gif' alt='processing_image' className=''/>
            </Box>
            <Typography className='font-semibold my-[2%]'>Please wait...while we are verifying you</Typography>
        </Box>
    </Dialog>
  )
}

export default LoginProcessingDialog