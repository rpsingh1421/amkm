"use client"

import { Add, Category } from '@mui/icons-material'
import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddCategoryDialog from '../component/Dialogs/AddCategoryDialog'
import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { useAuth } from '@/context/AuthContext'
import { Controller, useForm } from 'react-hook-form'
import VideoGalleryTable from '../component/tables/VideoGalleryTable'

const api = defaultNodeApi(); // Get the Axios instance used for normal json data
const UploadVideo = () => {
  const {authenticatedUser} = useAuth();
  const{register,handleSubmit,control,formState:{errors},clearErrors,reset,setValue}= useForm();
  /** if same component is used for edit */
  /**===================================== */
  const [editing, setEditing] = useState(false);
  /**===================================== */
  const initialMediaFileData = {
    fileName:'',
    filePath:'',
    categoryName:'',//team,member,work/project/activity
    uploadedBy: authenticatedUser && authenticatedUser.member_id
  }
  const [mediaFileData,setMediaFileData] = useState(initialMediaFileData);
  /**============this dialog will be used for add new category */
  const [openAddCategoryDialog,setOpenAddCategoryDialog] = useState(false);
  
  /**======== contains video category list which are active */
  const[fetchedCategoryList,setFetchedCategoryList] = useState([]);
  /**============function for fetching category list */
  const fetchVideoCategories = async()=>{
    try {
      
      const response = await api.get('/rest-api/media-category?fetch=active&type=video');
      // console.log("category list:",response.data)
      if (response.data.status) {
        setFetchedCategoryList(response.data.body);
      }
    } catch (error) {
      console.error('Error fetching media categories:', error);
    }
  }

  const inputChangeHandler =(e)=>{
    setResponseDetails({status:'',message:''})
    setMediaFileData(pre=>({...pre,[e.target.name]:e.target.value}));
  }

  const [responseDetails,setResponseDetails] = useState({
    status:'',
    message:''
  })


    /**=======event handler when upload button is clicked */
  const submitHandler = async () => {
    try {
      if (editing) {
        const response  = await api.put(`/rest-api/video-gallery/${mediaFileData._id}`, mediaFileData);
        setEditing(false);
        fetchVideoGalleryList();
        setMediaFileData(initialMediaFileData);
        setResponseDetails({status:true,message:response.data.message});
        
      }else{
        const response  = await api.post('/rest-api/video-gallery', mediaFileData);
        setMediaFileData(initialMediaFileData);
        setResponseDetails({status:true,message:'video data uploaded successfully'});
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseDetails({status:false,message:'video data upload failed'});
    }
  };

  const [videoGalleryList,setVideoGalleryList] = useState([]);
  
  const fetchVideoGalleryList = async()=>{
    const response = await api.get('/rest-api/video-gallery');
    if (response.data.status) {
      setVideoGalleryList(response.data.body);
    }
  }
  useEffect(()=>{
    fetchVideoCategories();
  },[]);
  
  const onClickEdit =async(video_id)=>{
    setResponseDetails({status:'',message:''})
    try {
      console.log("video id to edit:",video_id)
      const response= await api.get(`/rest-api/video-gallery/${video_id}`);
      const {fileName,filePath,categoryName,_id} = response.data.body;
      setMediaFileData(pre=>({...pre,fileName,filePath,categoryName,_id}));
      setEditing(true);
    } catch (error) {
      console.error('Error in fetching video data:', error);
    }
  }
  useEffect(() => {
    if (editing) {
      // Set the form values when editing
      Object.keys(mediaFileData).map((key) => {
        setValue(key, mediaFileData[key]);
      });
    }
  }, [editing, mediaFileData, setValue]);
  return (
    <>
    <Paper className='w-[90%] m-auto mt-[1%] py-[5%] rounded-xl'>
    <Box component={'form'} onSubmit={handleSubmit(submitHandler)} className='w-3/4 m-auto'>
      <Box className='mb-[3%] border'>
        <Box className='border-b'><Typography  className='px-[2%] font-bold border-r w-fit bg-gray-400'>Important Instruction:</Typography></Box>
        <Typography className='text-sm'><span className='font-bold text-green-500'>valid</span> : &quot;https://www.youtube.com/<span className='font-bold text-green-500'>embed</span>/zF8Z7R1DLF4?si=RY_bf4ZncvQrpZjS&quot;</Typography>
        <Typography className='text-sm'><span className='font-bold text-red-500'>inValid</span>: &quot;https://www.youtube.com/,<span className='font-bold text-red-500'>watch</span>?v=zF8Z7R1DLF4&t=1s&ab_channel=AaoMilkarKarenMadad&quot;</Typography>
      </Box>
      
      <Typography className={`${responseDetails.status?'text-green-500':'text-red-500'}`}>{responseDetails.message}</Typography>
      
      <Box className="flex gap-[3%] mb-[2%]">
        <Typography className='w-[30%] font-bold'>Category</Typography>
        <FormControl fullWidth>
          <InputLabel id="categoryLabel">Select Category</InputLabel>
          <Select
              // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
              labelId="categoryLabel"
              id="category"
              label="Select Category"
              size='small'
              name='categoryName'
              value={mediaFileData.categoryName}
              onChange={inputChangeHandler}
              type='search' 
              inputProps={register('categoryName', {
                  required: 'Please select category',
                })}
              error={errors.categoryName}
              // helperText={errors.state?.message}
          >
            {fetchedCategoryList.map((category,index)=>{
              return (
                <MenuItem value={category.category_name} key={index}>{category.category_name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <IconButton onClick={()=>setOpenAddCategoryDialog(true)}><Add color='success' fontSize='medium'/></IconButton>
      </Box>
      <Box className="flex gap-[3%] mb-[2%]">
        <Typography className='w-[30%] font-bold'>Video Link</Typography>
        <TextField
          fullWidth
          size='small'
          label="paste youtube video link"
          name="filePath"
          value={mediaFileData.filePath}
          onChange={inputChangeHandler}
          inputProps={
            register(
              'filePath',{
                required:"empty field not allowed"
              }
            )
          }
          error={errors.filePath && errors.filePath}
          helperText={errors.filePath && errors.filePath?.message}
        />
        {/* <Controller
          name="filePath"
          control={control}
          // defaultValue={mediaFileData.filePath}
          rules={{ required: "Empty field not allowed" }}
          render={({ field }) => (
            <TextField
              fullWidth
              size="small"
              label="Paste YouTube Video Link"
              name="filePath"
              value={mediaFileData.filePath}
              onChange={inputChangeHandler}
              error={!!errors.filePath}
              helperText={errors.filePath?.message}
            />
          )}
        /> */}
      </Box>
      <Box className="flex gap-[3%] mb-[2%]">
        <Typography className='w-[30%] font-bold'>Video Description</Typography>
        {/* <Controller
          name="fileName"
          control={control}
          // defaultValue={mediaFileData.fileName}
          rules={{ required: "Empty field not allowed" }}
          render={({ field }) => (
            <TextField
              fullWidth
              size='small'
              label="video description"
              placeholder='two or three words'
              name="fileName"
              value={mediaFileData.fileName}
              onChange={inputChangeHandler}
              error={errors.fileName && errors.fileName}
              helperText={errors.fileName && errors.fileName?.message}
            />
          )}
        /> */}
        <TextField
          fullWidth
          size='small'
          label="video description"
          placeholder='two or three words'
          name="fileName"
          value={mediaFileData.fileName}
          onChange={inputChangeHandler}
          inputProps={
            register(
              'fileName',{
                required:"empty field not allowed"
              }
            )
          }
          error={errors.fileName && errors.fileName}
          helperText={errors.fileName && errors.fileName?.message}
        />
      </Box>
      <Box className="flex justify-end">
          {editing ?<Button type='submit' variant='contained' size='small'>Edit</Button>
          :<Button type='submit' variant='contained' size='small'>upload</Button>
          }
      </Box>
    </Box>
    
    <AddCategoryDialog 
      openAddCategoryDialog={openAddCategoryDialog} 
      setOpenAddCategoryDialog={setOpenAddCategoryDialog} 
      fetchMediaCategories={fetchVideoCategories} mediaType ={'video'} 
    />
    </Paper>
    <Paper className='w-[90%] m-auto mt-[1%] rounded-xl'>
      <VideoGalleryTable onClickEdit={onClickEdit} videoGalleryList={videoGalleryList} fetchVideoGalleryList={fetchVideoGalleryList} />
    </Paper>
    </>
  )
}

export default UploadVideo
