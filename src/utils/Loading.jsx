import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <Box className="w-full h-screen">
        <Image width={100} height={100} src='/loading.webp' alt='loading_gif_image' className='w-fit m-auto'/>
    </Box>
  )
}

export default Loading