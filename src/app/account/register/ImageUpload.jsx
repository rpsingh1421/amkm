import { Box, Button, TextField,Typography } from "@mui/material"
// import styles from './studentregisteration.module.scss'
import { useForm } from 'react-hook-form'
import { createContext, useContext, useState } from 'react'
import PreviewImage from "./PreviewImage";
import { StepperContext } from "./RegisterPage";
import SubmitButton from "./SubmitButton";
// import { StepperContext, UploadedFileContext } from './Register'
// import SubmitButton from './SubmitButton'
// import Image from "next/image"
// import { Maximize } from "@mui/icons-material"

const storePath = process.env.NEXT_PUBLIC_STORE_URL;


const ImageUpload = () => {
    const {activeStep,handleBack,handleNext,uploadedFiles,setUploadedFiles}=useContext(StepperContext);
    // const {selectedProfilePhoto,setSelectedProfilePhoto,selectedProfilePhotoPath,setSelectedProfilePhotoPath,
    //   selectedAadharPhoto,setSelectedAadharPhoto,selectedAadharPhotoPath,setSelectedAadharPhotoPath,
    //   selectedEnglishSignPhoto,setSelectedEnglishSignPhoto,selectedEnglishSignPhotoPath,setSelectedEnglishSignPhotoPath,
    //   selectedHindiSignPhoto,setSelectedHindiSignPhoto,selectedHindiSignPhotoPath,setSelectedHindiSignPhotoPath} = useContext(UploadedFileContext);
    const{register,handleSubmit,formState:{errors},clearErrors,reset}= useForm();
 

    /**========action on select a file======== */
    const onSelectPhoto=(e)=>{
      const fieldName = e.target.name;
      // if file is selected and we click to select again that but we cancel after open select file dialog this will hit with no file so we should clear file for that fieldname
      if (e.target.files[0]) {
        const file = e.target.files[0];
        const preview = URL.createObjectURL(file) // Create an object URL for each file
        const fileData = {fieldName:fieldName,file:file,preview}; //creating a data object containg all three information related to uploaded file
        //to replace entry of again selecting file for same field
        const existingFile = uploadedFiles.find(item=>item.fieldName==fieldName);
        if (existingFile) {
          setUploadedFiles(uploadedFiles.filter(item=>item.fieldName!=fieldName));
        }
        setUploadedFiles(prev => [...prev,fileData]);// Append new previews to the state
      }
      else{
        setUploadedFiles(uploadedFiles.filter(item=>item.fieldName!=fieldName));
      }
    }
    /**=======custom validation using form hook for a file */
    // const fileSizeValidation=(value)=>{
    //   // console.log(value);
    //   return value[0].size>100000&&value[0].size<300000 || 'file size should be of min 100kB and Maximize 300KB';
    // }
  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
        <Box className="flex gap-[2%] items-center my-[2%]">
          <PreviewImage uploadedFiles={uploadedFiles} fieldName={"profile_image"} defaultImage ={'/profile_demo.png'}/>
          <label className="w-1/3" htmlFor="profile-upload">
            <TextField
              id="profile-upload"
              name="profile_image"
              style={{ display: 'none' }}
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={onSelectPhoto}
              inputProps={{
                ...register('profile_image',{
                  required:'profile photo not selected',
                  // validate:fileSizeValidation,
                })
              }}
            />
            <Button
              // className={styles.choose_button}
              variant="contained"
              component="span" >
              Choose profile Image
            </Button>
          </label>
          <Typography className='text-red-600 w-1/3'>{errors.profile_image && errors.profile_image?.message }</Typography>
        </Box>
        <Box className="flex gap-[2%] items-center my-[2%]">
          <PreviewImage uploadedFiles={uploadedFiles} fieldName={"aadhar_image"} defaultImage ={`/aadhar_front_back_demo.png`}/>
          
          <label className="w-1/3" htmlFor="aadhar-upload">
            <TextField
              id="aadhar-upload"
              name="aadhar_image"
              style={{ display: 'none' }}
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={onSelectPhoto}
              inputProps={{
                ...register('aadhar_image',{
                  required:'aadhar not selected',
                  // validate:fileSizeValidation
                })
              }}
            />
            <Button
              // className={styles.choose_button}
              variant="contained"
              component="span" >
              Choose Aadhar Image
            </Button>
          </label>
          <Typography className='text-red-600 w-1/3'>{errors.aadhar_image && errors.aadhar_image?.message }</Typography>
          {/* <Typography className='text-red-600 w-1/3'>{errors.aadhar_upload ? errors.aadhar_upload?.message :selectedAadharPhoto && selectedAadharPhoto.name}</Typography> */}
        </Box>
        <Box className="flex gap-[2%] items-center my-[2%]">
        <PreviewImage uploadedFiles={uploadedFiles} fieldName={"pancard_image"} defaultImage ={`/pan-card_demo.jpg`}/>
      
          <label className="w-1/3" htmlFor="pancard_image">
            <TextField
              id="pancard_image"
              name="pancard_image"
              style={{ display: 'none' }}
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={onSelectPhoto}
              inputProps={{
                ...register('pancard_image',{
                  required:'pancard_image not selected',
                  // validate:fileSizeValidation
                })
              }}
            />
            <Button
              // className={styles.choose_button}
              variant="contained"
              component="span" >
              Choose Pan card
            </Button>
          </label>
          <Typography className='text-red-600 w-1/3'>{errors.pancard_image && errors.pancard_image?.message }</Typography>
          {/* <Typography className='text-red-600 w-1/3'>{errors.eng_sign ? errors.eng_sign?.message :selectedEnglishSignPhoto&&selectedEnglishSignPhoto.name}</Typography> */}
        </Box>
        
        <SubmitButton/>
    </Box>
  )
}

export default ImageUpload
