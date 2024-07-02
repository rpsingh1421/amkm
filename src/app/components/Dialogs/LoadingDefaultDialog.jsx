import { Box, Dialog, DialogContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const LoadingDefaultDialog = () => {
  return (
    <Dialog open>
      <DialogContent>
        <Box className='text-center'>
            <Box className='flex justify-center items-center'>
                <Image
                    src={`/loading-waiting.gif`}
                    alt='loading gif'
                    width={1000}
                    height={100}
                    className='w-full'
                    priority
                />
            </Box>
            <Typography className='font-bold text-xl'>Please Wait .....</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default LoadingDefaultDialog
