"use client"

import { Box, Card, Paper, Tab, Tabs, Typography } from '@mui/material'
import NewsImage from './NewsImage'
import { useState } from 'react';
import ProjectGallery from './ProjectGallery';
import AllImage from './AllImage';
import VideoGallery from './VideoGallery';

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const GalleryBody = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Box>
      <Paper className="w-[90%] m-auto">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab value="one" label="All" />
          <Tab value="two" label="NewsPaper And Media" />
          <Tab value="three" label="Project Work" />
          <Tab value="four" label="Videos" />
        </Tabs>
      </Paper>
      <Box className='w-[90%] m-auto py-[5%]'>
        {value=='one' && <AllImage/>}
        {value=='two' && <NewsImage/>}
        {value=='three' && <ProjectGallery/>}
        {value=='four' && <VideoGallery/>}
      </Box>
      
    </Box>
  )
}

export default GalleryBody
