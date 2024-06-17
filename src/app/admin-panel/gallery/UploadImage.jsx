"use client"

import { Add, Category } from '@mui/icons-material'
import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddCategoryDialog from './AddCategoryDialog'
import axios from 'axios'
import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi'
import SelectAndPreview from '../component/SelectAndPreview'
import { useAuth } from '@/context/AuthContext'
import { useForm } from 'react-hook-form'
import multipartNodeApi from '@/app/rest-api/api/node-api/multiPartApi'

const multipartApi = multipartNodeApi();//this api is used to send file using axios
const api = defaultNodeApi(); // Get the Axios instance used for normal json data
const UploadImage = () => {
  const {authenticatedUser} = useAuth();
  const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
  /** if same component is used for edit */
  /**===================================== */
  const [editing, setEditing] = useState(false);
  /**===================================== */
  const initialMediaFileData = {
    fileName:'',
    filePath:'',
    categoryName:'',//team,member,work/project/activity
    uploadedBy: authenticatedUser!=null && authenticatedUser.member_id
  }
  const [mediaFileData, setMediaFileData] = useState(initialMediaFileData);
  /**=========previews will contain uploaded files information [{file:'',previewUrl:''}] */
  const [previews, setPreviews] = useState([]);

  /**============this dialog will be used for add new category */
  const [openAddCategoryDialog,setOpenAddCategoryDialog] = useState(false);
  
  /**======== contains image category list which are active */
  const[fetchedCategoryList,setFetchedCategoryList] = useState([]);
  /**============function for fetching category list */
  const fetchImageCategories = async()=>{
    try {
      
      const response = await api.get('/rest-api/media-categories?fetch=active&type=image');
      console.log("category list:",response.data)
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
    const formData = new FormData();

    formData.append('mediaFileData',JSON.stringify(mediaFileData));
    // need to append each file individually to the FormData object:
    previews.forEach(item => {
      formData.append('uploadedFiles', item.file);
    });
    
    try {
      if (editing) {
          // await api.put(`/api/media-categories/${editingItem.id}`, formData);
          // setEditingItem(null);
          console.log("this section will be used in editing mode")
      } else {
        const response  = await multipartApi.post('/rest-api/image-gallery', formData);
        console.log("media upload response :",response);
        if (response.data.status) {

          setMediaFileData(initialMediaFileData);
          setPreviews([]);
          setResponseDetails({status:true,message:'image uploaded successfully'})
        }else{
          setResponseDetails({status:false,message:'image upload failed....try again'})
        }
      }
      
      // fetchItems();
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };
  useEffect(()=>{
    fetchImageCategories();
  },[]);
  
  return (
    <>
    <Box component={'form'} onSubmit={handleSubmit(submitHandler)} className='w-3/4 m-auto'>
      <Typography className={`${responseDetails.status?'text-green-500':'text-red-500'}`}>{responseDetails.message}</Typography>
      <Box className="flex gap-[3%] mb-[2%]">
        <Typography className='w-[25%] font-bold'>Category</Typography>
        <FormControl fullWidth>
          <InputLabel id="categoryLabel">Select Category</InputLabel>
          <Select
              // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
              labelId="categoryLabel"
              id="category"
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
      <SelectAndPreview previews={previews} setPreviews={setPreviews}/>
      <Box className="flex justify-end">
          <Button type='submit' variant='contained' size='small' className='' disabled={previews.length<1}>upload</Button>
      </Box>
    </Box>
    
    <AddCategoryDialog openAddCategoryDialog={openAddCategoryDialog} setOpenAddCategoryDialog={setOpenAddCategoryDialog} fetchImageCategories={fetchImageCategories} mediaType ={'image'} />
    </>
  )
}

export default UploadImage
