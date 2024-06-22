"use client"

import {  Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi'
import DynamicImageGalleryTable from '../component/tables/DynamicImageGalleryTable'



const UploadPdf = () => {
  return (
    <>
    <Paper className='w-[90%] m-auto mt-[1%] rounded-xl'>
       <DynamicImageGalleryTable/>
    </Paper>
    </>
  )
}

export default UploadPdf
