"use client"

import { Box, Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingImageSkeleton from "./LoadingImageSkeleton";

// const storePath = process.env.NEXT_PUBLIC_STORE;
const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const AllImage = () => {
  const [isLoading,setIsLoading] = useState(true);
  // State to store the total image count from the server
  const [totalImages,setTotalImages] = useState(6);
    
  // // State to store the row count used by the DataGrid
  // const [blockCountState, setRowCountState] = useState(totalImages);
  const [imageRowModel,setImageRowModel] = useState({
    block:0,
    items:6,
  })
  const fetchAllActiveImageCount = async()=>{
    try {
      const response = await axios.get('/rest-api/photo-gallery/pagination?status=true');
      setTotalImages(response.data.body);
      console.log("total active images",response);
    } catch (error) {
      
    }
  }
  const [imageList,setImageList] = useState([]);
  const fetchImages=async()=>{
    const pageNo = imageRowModel.block;
    const pageSize = parseInt(imageRowModel.items);
    try {
      const imageListResponse =await axios.get(`/rest-api/photo-gallery/pagination/${pageNo}/${pageSize}?status=true`);
      console.log("all images fetch :",imageListResponse);
      // setImageList(imageListResponse.data.body);
      setImageList(pre=> [...pre,...imageListResponse.data.body])
      setIsLoading(false);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchAllActiveImageCount();
    fetchImages();
  }, []); // Only run once on mount
  useEffect(() => {
    if (imageRowModel.block !== 0 || imageRowModel.items !== 6) {
      fetchImages();
    }
  }, [imageRowModel]); // Run fetchImages when imageRowModel changes, but not on initial load


  const showMore = () => {
    setImageRowModel((prev) => ({
      ...prev,
      block: prev.block + 1,
    }));
  };

  const showLess = () => {
    setImageRowModel((prev) => ({
      ...prev,
      block: Math.max(0, prev.block - 1),
    }));
  }
  return (
    <Box>
      <Box>
        
        <Box className='flex gap-[2%] flex-wrap'>
          {isLoading && <LoadingImageSkeleton/>}
          {imageList.map((image,index)=>{
            return(
              <Box className='rounded-xl bg-red w-[32%] h-[40vh] mb-[3%]' key={index}>
                <Image src={`${storePath}/${image.filePath}`} alt={image.fileName} width={100} height={100} className="w-full h-full rounded-xl"/>
              </Box>
            )
          })}
          
        </Box>
         
        <Box className='my-[5%] flex gap-[5%]'>
          <Button onClick={showLess} disabled={imageRowModel.block === 0} variant='contained' size="medium" color="warning">Show Less</Button>
          <Button onClick={showMore} disabled={Math.ceil(totalImages / imageRowModel.items)===(parseInt(imageRowModel.block)+1)} variant='contained' size="medium" color="success">Show More</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AllImage
