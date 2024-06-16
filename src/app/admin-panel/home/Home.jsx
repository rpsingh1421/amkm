"use client"
import { Box, Paper, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import Banner from './Banner';
import AboutSection from './About';
import JoinUs from './JoinUs';

const Home = () => {
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
        >
          <Tab value="one" label="Banner" />
          <Tab value="two" label="About US" />
          <Tab value="three" label="Image Gallery" />
          <Tab value="four" label="Team" />
          <Tab value="five" label="Join Us" />
        </Tabs>
      </Paper>
      <Paper className='w-[90%] m-auto mt-[1%] py-[5%] rounded-xl'>
        {value=='one' && <Banner/>}
        {value=='two' && <AboutSection/>}
        {/* {value=='three' && <ProjectGallery/>} */}
        {/* {value=='four' && <VideoGallery/>} */}
        {value=='five' && <JoinUs/>} 
      </Paper>
      
    </Box>
  )
}

export default Home
