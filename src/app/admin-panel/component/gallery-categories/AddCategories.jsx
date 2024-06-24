"use client"
import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { useAuth } from '@/context/AuthContext'
import { Box, Button, Dialog, DialogContent, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CategoryContext } from '../../gallery/AddCategoryDialog'


const api = defaultNodeApi();

const AddCategories = () => {
  const {authenticatedUser} = useAuth();
  const {responseResult,setResponseResult,fetchValidCategoryList} = useContext(CategoryContext);
  const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
  const initialCategoryData = {
    category_name:'',
    category_type:'',
    created_by:authenticatedUser!=null && authenticatedUser.member_id
  }
  const [categoryData,setCategoryData] = useState(initialCategoryData);
  
  const inputChangeHandler = (e)=>{
    setResponseResult({status:"",message:''})
    setCategoryData(pre=>({...pre,[e.target.name]:e.target.value}));
  }
  const submitHandler =async()=>{
    const response = await api.post('/rest-api/media-category',categoryData);
    console.log('category addition response:',response);
    if (response.data.status) {
      setCategoryData(initialCategoryData);
      setResponseResult(pre=>({...pre,status:response.data.status,message:response.data.message}))
      fetchValidCategoryList();
    }
  }
  return (
    <Box component={'form'} onSubmit={handleSubmit(submitHandler)}>
      <Box className="my-[1%] flex gap-[2%]">
        <TextField
          size='small'
          id='category_name'
          name='category_name'
          label = 'enter category name'
          value={categoryData.category_name}
          onChange={inputChangeHandler}
          inputProps={register('category_name', {
            required: 'Please enter category name',
          })}
        error={errors.category_name}
        />
        <FormControl className='w-1/2'>
          <InputLabel id="category_type">Select Media Type</InputLabel>
          <Select
            // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
            labelId="category_type"
            id="category_type"
            size='small'
            name='category_type'
            value={categoryData.category_type}
            label="Select Media Type"
            onChange={inputChangeHandler}
            // displayEmpty
            type='search' 
            inputProps={register('category_type', {
                required: 'Please select media type',
              })}
            error={errors.category_type}
            // helperText={errors.state?.message}
          >
            <MenuItem value='video'>video</MenuItem>
            <MenuItem value='image'>image</MenuItem>
            </Select>
        </FormControl> 
      </Box>
      <Box className='flex gap-[2%] justify-center my-[2%]'>
        <Button size='small' variant='contained' color='error' onClick={()=>setCategoryData(initialCategoryData)} >cancel</Button>
        <Button size='small' variant='contained' color='success' type='submit'>Add</Button>
      </Box>
    </Box>
  )
}

export default AddCategories