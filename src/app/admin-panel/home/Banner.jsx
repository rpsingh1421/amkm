import { FolderOpen } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    const bannerInitialData = {
        video:'',
        title1:'',
        title2:'',
        message:''
    } 
  return (
    <Box component={'form'} className='w-3/4 m-auto'>
        <Box className="flex gap-[3%] mb-[2%]">
            <Typography className='w-[25%] font-bold'>Select Video </Typography>
            <TextField
                fullWidth
                size='small'
                // name='video'
                placeholder='selected video'
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
        <Box className="flex gap-[3%] mb-[2%]">
            <Typography className='w-[25%] font-bold'>Title1</Typography>
            <TextField
                fullWidth
                size='small'
                name='title1'
                placeholder='Enter Title Here'
                // value={}
                // onChange={}
            />
        </Box>
        <Box className="flex gap-[3%] mb-[2%]">
            <Typography className='w-[25%] font-bold'>Title2</Typography>
            <TextField
                fullWidth
                size='small'
                name='title2'
                placeholder='Enter Title Here'
                // value={}
                // onChange={}
            />
        </Box>
        <Box className="flex gap-[3%] mb-[2%]">
            <Typography className='w-[25%] font-bold'>Message</Typography>
            <TextField
                fullWidth
                size='small'
                name='message'
                placeholder='Enter Message Here'
                // value={}
                // onChange={}
                multiline
                rows={3}
            />
        </Box>
        <Box className="flex justify-end">
            <Button variant='contained' size='small' className=''>upload</Button>
        </Box>
    </Box>
  )
}

export default Banner
