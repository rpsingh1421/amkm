import { Box, Typography } from '@mui/material'
import React from 'react'

const VideoGallery = () => {
  return (
    <>
    <Box className="text-center">
        <Typography className='text-4xl font-bold'>&mdash; <span className='text-[#fc6539]'>Video Gallery</span>&mdash; </Typography>
        <Box className="flex flex-wrap p-[2%]">
            <Box className='w-1/4'>
                <iframe 
                    className='w-[90%]'
                    src="https://www.youtube.com/embed/zF8Z7R1DLF4?si=Gs3S9ZzO4ffEg6vf" 
                    title="YouTube video player" 
                >    
                </iframe>
            </Box>
            <Box className='w-1/4'>
                <iframe 
                    className='w-[90%]'
                    src="https://www.youtube.com/embed/zF8Z7R1DLF4?si=Gs3S9ZzO4ffEg6vf" 
                    title="YouTube video player" 
                >    
                </iframe>
            </Box>
            <Box className='w-1/4'>
                <iframe 
                    className='w-[90%]'
                    src="https://www.youtube.com/embed/zF8Z7R1DLF4?si=Gs3S9ZzO4ffEg6vf" 
                    title="YouTube video player" 
                >    
                </iframe>
            </Box>
            <Box className='w-1/4'>
                <iframe 
                    className='w-[90%]'
                    src="https://www.youtube.com/embed/zF8Z7R1DLF4?si=Gs3S9ZzO4ffEg6vf" 
                    title="YouTube video player" 
                >    
                </iframe>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default VideoGallery
