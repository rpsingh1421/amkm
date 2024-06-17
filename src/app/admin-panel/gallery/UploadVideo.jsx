"use client"

import { Add, Category } from '@mui/icons-material'
import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const UploadVideo = () => {
  const initialData = {
    Category:'',
    images:[],
  }
  return (
    <Box component={'form'} className='w-3/4 m-auto'>
      <Box className="flex gap-[3%] mb-[2%]">
        <Typography className='w-[25%] font-bold'>Category</Typography>
        <FormControl fullWidth>
          <InputLabel id="categoryLabel">Select Category</InputLabel>
          <Select
              // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
              labelId="categoryLabel"
              id="category"
              size='small'
              name='category'
              // value={userData.state}
              label="Select State"
              // onChange={inputChangeHandler}
              // displayEmpty
              type='search' 
              // inputProps={register('state', {
              //     required: 'Please select state',
              //   })}
              // error={errors.state && true}
              // helperText={errors.state?.message}
          >
              <MenuItem value="activity">activity</MenuItem>
              <MenuItem value="media">media</MenuItem>
          </Select>
        </FormControl>
        <IconButton><Add color='success' fontSize='medium'/></IconButton>
      </Box>
        <Box className="flex gap-[3%] mb-[2%]">
            <Typography className='w-[25%] font-bold'>Select Videos </Typography>
            <TextField
                fullWidth
                size='small'
                // name='video'
                placeholder='selected images'
                // value={''}
                disabled
            />
            
            <Box>
                <TextField
                    // fullWidth
                    type="file"
                    name="cover"
                    id="cover"
                    className="sr-only"
                />
                <span>
                    {/* <FolderOpen color='inherit' className='text-black bg-yellow-500'/> */}
                    <Image src='/open-folder-icon.jpg' alt='folder_icon' width={30} height={30} className='cursor-pointer'/>
                </span>
            </Box>
        </Box>
        <Box className="flex justify-end">
            <Button variant='contained' size='small' className=''>upload</Button>
        </Box>
    </Box>
  )
}

export default UploadVideo
