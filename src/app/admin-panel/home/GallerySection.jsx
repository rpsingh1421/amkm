"use client"

import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Paper, Tab, Tabs } from "@mui/material"
import { createContext, useEffect, useState } from "react"
import UploadNew from "./gallery/UploadNew";
import SelectFromGallery from "./gallery/SelectFromGallery";
import axios from "axios";
import Image from "next/image";
import { Close } from "@mui/icons-material";
import ChangeImage from "./gallery/ChangeImage";


const storePath = process.env.NEXT_PUBLIC_STORE;
const GalleryContext = createContext();
const GallerySection = () => {
    const[changeImageDialog,setChangeImageDialog] = useState(false);
    const [selectedImage,setSelectedImage] = useState(undefined);
    const[galleryList,setGalleryList] = useState([]);
    const fetchGalleryImage = async () =>{
        try {
            const response = await axios.get('/rest-api/home-page?section=gallery');
            console.log("gallery data:",response)
            if(response.data.body){
                setGalleryList(response.data.body);
            }
        } catch (error) {
            console.log("fetching error:",error)
        }
    }
    useEffect(()=>{
        fetchGalleryImage();
    },[]);

    const[newSelectedImage,setNewSelectedImage] = useState();
    const onCloseDialog =()=>{
        setNewSelectedImage(undefined);
        setSelectedImage(undefined);
    }
  return (
    <Paper className='w-[90%] m-auto mt-[1%] rounded-xl'>
        <Box className='flex gap-[1%] p-[1%] my-[1%]'>
            { galleryList.map((item,index)=>{
                return (
                    <Box className='text-center w-[19.5%]' key={index}>
                        <Box className=' h-[30vh] bg-borderGray border border-borderGray'>
                            <Image src={`${storePath}/${item.image1}`} width={1000} height={100} alt={`galleryImage_${index+1}`} className="w-full h-full"/>
                        </Box>
                        <Button onClick={()=>setSelectedImage(item)} variant="contained" size='small' className='my-[5%]'>change</Button>
                    </Box>
                )
            })}
        </Box>
        {selectedImage && 
            <Dialog open sx={{
                "& .MuiDialog-container": {
                    
                "& .MuiPaper-root": {
                    width: "90%",
                    margin:'auto',
                    height:'80vh',
                    overflow:'hidden'

                      // Set your width here
                },
                },
            }} fullScreen>
                <DialogActions className="p-0">
                    <IconButton onClick={()=>onCloseDialog()} size="small" className="text-white bg-red hover:bg-bgRed rounded-none p-[0.5%]"><Close/></IconButton>
                </DialogActions>
                <DialogContent className="h-[70vh] overflow-hidden">
                    <GalleryContext.Provider value={{fetchGalleryImage,selectedImage,setSelectedImage,newSelectedImage,setNewSelectedImage}}>
                        <ChangeImage/>
                    </GalleryContext.Provider>
                </DialogContent>
            </Dialog>
        }

    </Paper>
  )
}

export default GallerySection

export {GalleryContext}