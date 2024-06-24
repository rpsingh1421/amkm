import { Box, Dialog, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProcessingDialog = () => {
  return (
    <Dialog open className="rounded-3xl" PaperProps={{
        style: {
            borderRadius:'3%',
        //   backgroundColor: 'transparent',
        //   boxShadow: 'none',
        },
      }}>
        <Box className="p-[5%] text-center overflow-hidden">
            <Typography className="font-bold text-xl my-[2%] text-[#1877F2]">Please wait....</Typography>
            <Image
                width={100}
                height={100}
                src='/processing-message2_1.gif'
                alt='processing-message.gif'
                className='w-[100%] h-[50%]'
                
            />
            <Typography className="font-bold text-xl my-[2%] text-[#1877F2]">Your request is being processed....</Typography>
            <Typography className="font-bold text-xl my-[2%] text-[#1877F2]">Please do not press Back or Page Refresh....</Typography>
        </Box>
    </Dialog>
  )
}

export default ProcessingDialog