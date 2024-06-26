import { Box } from '@mui/material'
import React from 'react'

const Video = () => {
  const storePath = process.env.NEXT_PUBLIC_STORE_URL;
  return (
    <Box>
      <video 
        // controls
        preload="none" 
        autoPlay 
        muted 
        loop 
        style={{width:'100%'}}
      >
        <source src={`${storePath}/Imagine_ Zara Socho To Sahi (1).mp4`} type="video/mp4" />
        {/* <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </Box>
  )
}

export default Video
