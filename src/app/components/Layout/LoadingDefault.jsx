import { Box, Dialog, DialogContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const storePath = process.env.NEXT_PUBLIC_STORE;
const LoadingDefault = () => {
  return (
    
        <Box className='text-center'>
            <Box className=' w-[25%] m-auto'>
                <Image
                    src={`/loading-waiting.gif`}
                    alt='loading gif'
                    width={1000}
                    height={100}
                    className='w-[50%]]'
                    priority
                />
            </Box>
            <Typography className='font-bold text-xl'>Please Wait .....</Typography>
        </Box>
  )
}

export default LoadingDefault
