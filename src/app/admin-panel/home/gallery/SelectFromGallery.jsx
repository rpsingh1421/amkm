"use client"

import LoadingImageSkeleton from "@/app/gallery/LoadingImageSkeleton";
import { Box, Button } from "@mui/material";
import { GridCheckCircleIcon } from "@mui/x-data-grid";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react"
import { GalleryContext } from "../GallerySection";
const storePath = process.env.NEXT_PUBLIC_STORE;
const SelectFromGallery = () => {
    const {fetchGalleryImage,selectedImage,setSelectedImage,newSelectedImage,setNewSelectedImage} = useContext(GalleryContext);
    const [isLoading, setIsLoading] = useState(true);
    
    /*========pagination related=========*/
    const [totalImages, setTotalImages] = useState(8);
    const [imageRowModel, setImageRowModel] = useState({
      page: 0,
      items: 8,
    });
    const [imageList, setImageList] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const fetchImageCount = async () => {
        try {
          const response = await axios.get('/rest-api/photo-gallery/pagination?type=all');
          setTotalImages(response.data.body);
          console.log("total images in gallery", response);
        } catch (error) {
          console.error("Error fetching total images:", error);
        }
    };
    const fetchImages = async () => {
        const { page, items } = imageRowModel;
        try {
            const imageListResponse = await axios.get(`/rest-api/photo-gallery/pagination/${page}/${items}?status=true`);
            console.log("all images fetch:", imageListResponse);
            setImageList(prev => [...prev, ...imageListResponse.data.body]);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };
    useEffect(()=>{
        fetchImageCount();
        fetchImages();
    },[])

    useEffect(() => {
      if (imageRowModel.page !== 0 || imageRowModel.items !== 8) {
        fetchImages();
      }
    }, [imageRowModel]); // Run fetchImages when imageRowModel changes, but not on initial load
  
    const showMore = () => {
      setImageRowModel((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    };
  
    const selectImageForChange=(image)=>{
      if(newSelectedImage == image){
        setNewSelectedImage();
      }else{
        setNewSelectedImage(image);
      }
    }

    const changeImageHandler =async()=>{
      // console.log("hello")
      console.log("selected image is :",selectedImage);
      console.log("new selected image is :",newSelectedImage);
      try {
        const response= await axios.put(`/rest-api/home-page/${selectedImage._id}`,{image1:newSelectedImage});
        console.log("change image response:",response);
        fetchGalleryImage();
        setNewSelectedImage();
        setSelectedImage(undefined);
      } catch (error) {
        console.error('failed to change image:',error)
      }
    }
  return (
    <Box>
      <Box className='flex gap-[1%] flex-wrap my-[1%] h-[52vh] pl-2 overflow-auto'>
          {isLoading && <LoadingImageSkeleton />}
          {imageList.map((image, index) => (
            <Box className='relative rounded-xl w-[24%] h-[25vh] bg-borderGray cursor-pointer'  key={index}
                onClick={()=>selectImageForChange(image.filePath)}
            >
              <Image 
                src={`${storePath}/${image.filePath}`} 
                alt={image.fileName} 
                width={1000} 
                height={100} 
                className="w-full h-full rounded-xl " 
                
              />
              {newSelectedImage === image.filePath && (
                <Box className='absolute top-2 right-2'>
                  <GridCheckCircleIcon className='text-blue-500' fontSize="large" />
                </Box>
              )}
              <Box className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-xl '
               
               >
                 {/* <Preview className='text-white cursor-pointer hover:text-5xl' onClick={() => photoClickHandler(image.filePath)}/> */}
               </Box>
            </Box>
            
          ))}
        </Box>
        <Box className='my-[1%] flex justify-end mr-[5%] gap-[5%]'>
        <Button 
            // onClick={showMore} 
            disabled={!newSelectedImage} 
            variant='contained' 
            size="medium" 
            color="success"
            onClick={()=>changeImageHandler()}
          >
            change
          </Button>

          <Button 
            onClick={showMore} 
            disabled={Math.ceil(totalImages / imageRowModel.items) === (imageRowModel.page + 1)} 
            variant='contained' 
            size="medium" 
            color="primary"
          >
            Show More
          </Button>
        </Box>
               
    </Box>
  )
}

export default SelectFromGallery