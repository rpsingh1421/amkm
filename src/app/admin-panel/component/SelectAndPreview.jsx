import { Delete, DeleteForever } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'

const SelectAndPreview = (props) => {
  const {previews, setPreviews} = props;

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);;
    const newPreviews = files.map(file => ({
      file,
      preview: URL.createObjectURL(file) // Create an object URL for each file
    }));
      /**The map method returns a new array (newPreviews), where each element is an object containing:
    The original file object.
    A preview URL created by URL.createObjectURL. */
    setPreviews(prev => [...prev, ...newPreviews]); // Append new previews to the state
  };

  const handleRemoveImage = (preview) => {
    setPreviews(previews.filter(p => p.preview !== preview));
    URL.revokeObjectURL(preview); // Free memory
  };
  
  return (
    <>
    <Box className="flex gap-[3%] mb-[2%]">
          <Typography className='w-[25%] font-bold'>Select Images </Typography>
          <TextField
              fullWidth
              size='small'
              // name='video'
              placeholder='selected images'
              // value={''}
              disabled
          />
          
          <Box>
            <label className='flex'>
              <TextField
                  // fullWidth
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                  inputProps={{
                    accept: "image/png, image/gif, image/jpeg",
                    multiple: true  // Enable multiple file selection
                  }}
                  onChange={handleFileChange}
              />
              <span >
                  {/* <FolderOpen color='inherit' className='text-black bg-yellow-500'/> */}
                  <Image src='/open-folder-icon.jpg' width={30} height={30} className='cursor-pointer' alt='select_folder_img'/>
              </span>
            </label>
          </Box>
      </Box>
      <Box className="flex flex-wrap gap-[1%]">
          {previews.map(({ preview }, index) => (
              <Box key={index} className="relative inline-block">
                  <Image width={100} height={100} className="block" src={preview} alt={`preview ${index}`}/>
                  <IconButton sx={{position:'absolute',top:'0',right:'0',color:'#ffffff', p:'0',background:'red'}} onClick={() => handleRemoveImage(preview)}><DeleteForever color=''/></IconButton>
                  {/* <Button className='absolute top-0 right-0' onClick={() => handleRemoveImage(preview)}><Delete/></Button> */}
              </Box>
          ))}
      </Box>
    </>

  )
}

export default SelectAndPreview