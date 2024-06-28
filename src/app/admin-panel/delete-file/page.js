"use client"
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'

const page = () => {
 
    const filepath = '/files/public_html/store/gallery/Success-Transparent.png';
    const deleteFile =async()=>{
        const formData = new FormData();
        formData.append('filepath',filepath);
        const response= await axios.post('https://store.amkmofficial.com/delete-file.php',formData);
        console.log('file deletion response:',response);
    }
  return (
    <Button variant='contained' onClick={()=>deleteFile()}>delete</Button>
  )
}

export default page