"use client"
import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import ViewImage from '../components/ViewImage'

const NewsImage = () => {
    const [rowCount,setRowCount] = useState(1);
    
    const [openImageDialog,setOpenImageDialog] = useState(false);
    const [imagePath,setImagePath] =useState('');
    const viewImage = (path)=>{
        setImagePath(path);
        setOpenImageDialog(true);
    }
  return (
    <>
    <Box className="text-center">
    <Typography className='text-4xl font-bold'>&mdash; <span className='text-[#fc6539]'>NewsPaper And Media Gallery</span>&mdash; </Typography>
        {/* <Typography className='text-4xl font-bold'></Typography> */}
    </Box>
        
    <Box className="flex flex-wrap gap-5 p-5 py-[3%]">
        {/* {
            images.map((image,index)=>{
                return(
                    index<rowCount*6 && 
                        <Card className='w-[15%] cursor-pointer' key={index} onClick={()=>viewImage('/newsimg/'+image.name)}>
                            <img src={'/newsimg/'+image.name} alt={`Image ${index + 1}`}className="w-full h-full object-cover"/>
                        </Card>
                )
            })
        } */}
    </Box>
    <Box className='flex justify-between px-5'>
    {/* {rowCount*6 <= imagelist.length&&
        <Typography className='cursor-pointer float-right w-[fit-content] rounded-lg border-2 p-2 mr-2 bg-green-600 text-white' onClick={()=>setRowCount(rowCount+1)} >show more....</Typography>
    }
    { rowCount>1&&
        <Typography className='cursor-pointer float-left w-[fit-content] rounded-lg border-2 p-2 mr-2 bg-green-600 text-white' onClick={()=>setRowCount(1)} >show less....</Typography>
    } */}
    
    </Box>
    <ViewImage imagePath={imagePath} openImageDialog={openImageDialog} setOpenImageDialog={setOpenImageDialog}/>
    </>
  )
}

export default NewsImage
