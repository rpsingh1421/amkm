"use client"
import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'

const ProjectGallery = () => {
    const [rowCount,setRowCount] = useState(1);
    // const imagelist = [...images];
  return (
    <>
    <Box className="text-center">
        <Typography className='text-4xl font-bold'>&mdash; <span className='text-[#fc6539]'>Project Gallery</span>&mdash; </Typography>
    </Box>
    <Box className="flex flex-wrap gap-5 p-5">
        {/* {
            images.map((image,index)=>{
                return(
                    index<rowCount*6 && 
                        <Card className='w-[15%]'>
                            <img src={'/newsimg/'+image.name} alt={`Image ${index + 1}`}className="w-full h-full object-cover transform transition duration-300 hover:scale-110"/>
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
    </>
  )
}

export default ProjectGallery
