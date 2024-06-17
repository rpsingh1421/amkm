"use client"
import { Box, Paper, Tab, Tabs } from '@mui/material';
import React, { createContext, useState } from 'react'
import UploadImage from './UploadImage';
import UploadVideo from './UploadVideo';
import UploadPdf from './UploadPdf';
import ImageGalleryTable from '../component/tables/ImageGalleryTable';


const GalleryContext = createContext();
const Gallery = () => {
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
          <Tab value="one" label="upload image" />
          <Tab value="two" label="upload video" />
          <Tab value="three" label="upload pdf" />
        </Tabs>
      </Paper>
      <Paper className='w-[90%] m-auto mt-[1%] py-[5%] rounded-xl'>
        {value=='one' && <UploadImage/>}
        {value=='two' && <UploadVideo/>}
        {value=='three' && <UploadPdf/>}
      </Paper>
      <Paper className='w-[90%] m-auto mt-[1%] rounded-xl'>
        {value=='one' && <ImageGalleryTable/>}
        {/* {value=='two' && <UploadVideo/>}
        {value=='three' && <UploadPdf/>} */}
      </Paper>
    </Box>
  )
}

export default Gallery
