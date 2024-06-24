import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingImageSkeleton from './LoadingImageSkeleton';
import NoRowsLayout from '../components/Layout/NowRowsLayout';

const VideoGallery = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [videoList,setVideoList] = useState([]);

    const fetchVideoList = async()=>{
        try {
            const response= await axios.get('/rest-api/video-gallery?limit=20');
            setVideoList(response.data.body);
            setIsLoading(false);
            console.log("video list;",response)
        } catch (error) {
            setVideoList([]);
            setIsLoading(false);
        }
        
    }
    useEffect(()=>{
        fetchVideoList();
    },[])
  return (
    <>
    <Box className="text-center">
        <Typography className='text-4xl font-bold'>&mdash; <span className='text-[#fc6539]'>Video Gallery</span>&mdash; </Typography>
        <Box className="flex flex-wrap gap-[2%] my-[2%]">
            {isLoading && <LoadingImageSkeleton />}
            {!isLoading && videoList.length ==0 &&  
                <Box className='w-full flex items-center justify-center'>
                    <NoRowsLayout />
                </Box>
            }
                   { videoList.map((video, index) => (
                    <Box className='w-1/4 mb-[2%]'>
                        <iframe 
                            className='w-[90%]'
                            src={video.filePath} 
                            title="YouTube video player" 
                        >    
                        </iframe>
                    </Box>
                    ))
                }
        </Box>
    </Box>
    </>
  )
}

export default VideoGallery
