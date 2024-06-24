"use client";

import { Box, Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingImageSkeleton from "./LoadingImageSkeleton";
import ViewImage from "../components/Dialogs/ViewImageDialog";
import { Camera, Preview, ViewAgenda } from "@mui/icons-material";

const storePath = process.env.NEXT_PUBLIC_STORE;

const AllImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalImages, setTotalImages] = useState(6);
  const [imageRowModel, setImageRowModel] = useState({
    block: 0,
    items: 6,
  });
  const [imageList, setImageList] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [openImageDialog, setOpenImageDialog] = useState(false);

  const fetchAllActiveImageCount = async () => {
    try {
      const response = await axios.get('/rest-api/photo-gallery/pagination?status=true');
      setTotalImages(response.data.body);
      console.log("total active images", response);
    } catch (error) {
      console.error("Error fetching total images:", error);
    }
  };

  const fetchImages = async () => {
    const { block, items } = imageRowModel;
    try {
      const imageListResponse = await axios.get(`/rest-api/photo-gallery/pagination/${block}/${items}?status=true`);
      console.log("all images fetch:", imageListResponse);
      setImageList(prev => [...prev, ...imageListResponse.data.body]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

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

  const photoClickHandler = (imagePath) => {
    setImagePath(imagePath);
    setOpenImageDialog(true);
  };

  return (
    <Box>
      <Box>
        <Box className='flex gap-[2%] flex-wrap'>
          {isLoading && <LoadingImageSkeleton />}
          {imageList.map((image, index) => (
            <Box className='relative rounded-xl bg-red w-[32%] h-[40vh] mb-[3%]' key={index}>
              <Image 
                src={`${storePath}/${image.filePath}`} 
                alt={image.fileName} 
                width={100} 
                height={100} 
                className="w-full h-full rounded-xl " 
                
              />
              <Box className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-xl '
               
              >
                <Preview className='text-white cursor-pointer hover:text-5xl' onClick={() => photoClickHandler(image.filePath)}/>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className='my-[5%] flex gap-[5%]'>
          <Button 
            onClick={showMore} 
            disabled={Math.ceil(totalImages / imageRowModel.items) === (imageRowModel.block + 1)} 
            variant='contained' 
            size="medium" 
            color="success"
          >
            Show More
          </Button>
        </Box>
      </Box>
      <ViewImage imagePath={imagePath} openImageDialog={openImageDialog} setOpenImageDialog={setOpenImageDialog} />
    </Box>
  );
};

export default AllImage;
