import { CloudUpload } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const SelectImage = () => {
  return (
    <Box className="p-[3%] flex flex-col items-center justify-center space-y-3 border border-dashed border-borderGray cursor-pointer">
        <Box className='text-center'>
            <Typography component={'span'} className="text-primary">Click to select</Typography> or drag and drop
        </Box>
        <Typography component={'span'} className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <CloudUpload/>
        </Typography>
        <Typography className="mt-1.5">JPEG, PNG, JPG </Typography>
    </Box>
  )
}

export default SelectImage
