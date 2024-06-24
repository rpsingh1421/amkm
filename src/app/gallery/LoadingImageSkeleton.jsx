import { Box, Skeleton } from '@mui/material'
import React from 'react'

const LoadingImageSkeleton = () => {
  return (
    <Box className='flex gap-[2%]'>
      <Skeleton variant="rectangular" className='w-full h-[200px]' width={350} height={200}/>
      <Skeleton variant="rectangular" className='w-full h-[200px]'  width={350} height={200}/>
      <Skeleton variant="rectangular" className='w-full h-[200px]'  width={350} height={200}/>
    </Box>
  )
}

export default LoadingImageSkeleton