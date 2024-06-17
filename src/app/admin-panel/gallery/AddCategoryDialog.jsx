"use client"
import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi'
import { useAuth } from '@/context/AuthContext'
import { Cancel } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { createContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AddCategories from '../component/gallery-categories/AddCategories'
import CategoryTable from '../component/gallery-categories/CategoryTable'

const api = defaultNodeApi();
const CategoryContext = createContext()

const AddCategoryDialog = (props) => { 
  const {openAddCategoryDialog,setOpenAddCategoryDialog,fetchImageCategories,mediaType} = props; 
  const [responseResult,setResponseResult] = useState({
    status:"",
    message:'',
  })
  const[fetchedCategoryList,setFetchedCategoryList] = useState([]);
  const fetchCategoryList =async()=>{
    const response= await api.get(`/rest-api/media-categories?fetch=valid&type=${mediaType}`);
    if (response.data.status) {
      setFetchedCategoryList(response.data.body);
    }
  }
  const handleCloseDialog = ()=>{
    fetchImageCategories();
    setOpenAddCategoryDialog(false);
  }
  return (
    <Dialog open={openAddCategoryDialog} > 
      <Box className="flex space-between bg-slate-600 items-center px-[3%]">
        <Typography className=' flex-1 text-white'>Add Media Category</Typography>
        <IconButton size='small' onClick={handleCloseDialog}><Cancel color='error'/></IconButton>
      </Box>
        <DialogContent>
          <CategoryContext.Provider value={{fetchedCategoryList,setFetchedCategoryList,fetchCategoryList,responseResult,setResponseResult}}>
            <AddCategories/>
            <Typography className={`${responseResult.status?'text-green-600':'text-red-600'} text-center`}>{responseResult.message}</Typography>
            <CategoryTable/>
          </CategoryContext.Provider>
          
        </DialogContent>
    </Dialog>
  )
}

export default AddCategoryDialog
export {CategoryContext}