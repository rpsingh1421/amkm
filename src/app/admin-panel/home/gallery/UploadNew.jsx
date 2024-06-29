"use client"

import { CloudUpload, FileUpload } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GalleryContext } from "../GallerySection";

const UploadNew = () => {
  const {fetchGalleryImage,selectedImage,setSelectedImage,newSelectedImage,setNewSelectedImage} = useContext(GalleryContext);
  const [selectedFile,setSelectedFile] = useState();
  const [previewImage,setPreviewImage] = useState();
  const { register, handleSubmit, formState: { errors, dirtyFields,isDirty  }, clearErrors, reset, watch } = useForm({
    // Set the initial values from pageData:
    defaultValues: selectedFile //defaultValues with a synchronous object:
  });
  
  const onSelectFile=(e)=>{
    const files = e.target.files;
    if (files[0]) {
      setSelectedFile(files[0]);
      const preview = URL.createObjectURL(files[0]) // Create an object URL for each file
      setPreviewImage(preview);
    }
  }
  const uploadPhoto =async ()=>{
    try {
      const formData = new FormData();
      formData.append('uploadedFile',selectedFile);
      const fileUploadResponse = await axios.post('https://store.amkmofficial.com/upload-file.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("file upload response:",fileUploadResponse)
      if (fileUploadResponse.data.status) {
        const filepath = fileUploadResponse.data.body.file_path;
        const response= await axios.put(`/rest-api/home-page/${selectedImage._id}`,{image1:filepath});
        console.log("change image response:",response);
        fetchGalleryImage();
        setSelectedImage(undefined);
        setSelectedFile();
        setPreviewImage();
      }
    } catch (error) {
      console.error('failed to change image:',error)
    }
  }
  return (
    <Box component={'form'} onSubmit={handleSubmit(uploadPhoto)} className='flex gap-[5%] items-center p-[3%]'>
      <Box className='rounded-xl w-[50%]'>
        {previewImage && <Image 
          src={previewImage}
          width={1000}
          height={100}
          alt="selected_image"
          className="w-full h-auto"
        />}
      </Box>
      <label htmlFor='image1'>
        <TextField
            // fullWidth
            type="file"
            name="image1"
            id="image1"
            className="sr-only"
            onChange={onSelectFile}
            // value={watch('image1')}
            inputProps={{
            // accept: "image/png, image/jpeg,, image/jpg",
            // multiple: true  // Enable multiple file selection,
                ...register('image1', {
                    validate: {
                        fileSelected: (value) => value && value.length > 0 || 'Please select an image',
                        fileType: (value) => {
                            if (value && value[0]) {
                                const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
                                return acceptedTypes.includes(value[0].type) || 'File type not supported. Please upload a PNG, JPEG, or JPG image.';
                            }
                            return 'Please select an image';
                        }
                    }
                })
            }}
            
        />
        <Box className="p-[3%] flex flex-col items-center justify-center space-y-3 border border-dashed border-borderGray cursor-pointer">
          
          <Typography className='text-center'>
            <span className="text-primary">Click to upload</span> or drag and drop
          </Typography>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <CloudUpload/>
          </span>
          <Typography className="mt-1.5">JPEG, PNG, JPG </Typography>
        </Box>
      </label>
      <Button variant="contained" disabled={!selectedFile} type="submit">upload</Button>
    </Box>
  )
}

export default UploadNew