"use client"
import { Box, Paper, Tab, Tabs } from '@mui/material';
import React, { createContext, useState } from 'react'
import Banner from './Banner';
import AboutSection from './About';
import JoinUs from './JoinUs';
import GallerySection from './GallerySection';
import CoreTeam from './core-team/CoreTeam';

const PageDataContext = createContext();
const Home = () => {
  const initialContent = {
    section:'',
    content:'',
    quote1:'',
    quote2:'',
    image1:'',
    image2:''
  }  
  const [pageData,setPageData] = useState(initialContent);
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
      <PageDataContext.Provider value={{pageData,setPageData,initialContent}}>
        
          {value=='one' && <Banner/>}
          {value=='two' && <AboutSection/>}
          {value=='three' && <GallerySection/>}
          {value=='four' && <CoreTeam/>}
          {value=='five' && <JoinUs/>} 
      </PageDataContext.Provider>
      
    </Box>
  )
}

export default Home
export {PageDataContext}