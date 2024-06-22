import { FileUpload } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PhotoRelated = () => {
  return (
    <Box className="">
    <Box className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <Box className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <Typography variant="h3" className="font-medium text-black dark:text-white">
          Your Photo
        </Typography>
      </Box>
      <Box className="p-7">
        <Box component={'form'} >
          <Box className="mb-4 flex items-center gap-3">
            <Box className="h-14 w-14 rounded-full">
              <Avatar
                src={"/images/user/user-03.png"}
                alt="User"
              />
            </Box>
            <Box>
              <Typography className="mb-1.5 text-black dark:text-white">
                Edit your photo
              </Typography>
              <Box className="flex gap-2.5">
                <Button className="text-sm hover:text-primary">
                  Delete
                </Button>
                <Button className="text-sm hover:text-primary">
                  Update
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="relative mb-5.5 block w-full appearance-none rounded border border-dashed border-primary bg-gray dark:bg-meta-4 ">
          <label className="" htmlFor="aadhar-upload" style={{cursor:'pointer',padding:'2rem'}}>
            <TextField
              id="aadhar-upload"
              name="aadhar_image"
              style={{ display: 'none',cursor:'pointer' }}
              type="file"
              accept=".jpg, .jpeg, .png"
            //   onChange={onSelectPhoto}
            //   inputProps={{
            //     ...register('aadhar_image',{
            //       required:'aadhar not selected',
            //       validate:fileSizeValidation
            //     })
            //   }}
            />
            <Box className="flex flex-col items-center justify-center space-y-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                <FileUpload/>
              </span>
              <Typography className='text-center'>
                <span className="text-primary">Click to upload</span> or drag and drop
              </Typography>
              <Typography className="mt-1.5">SVG, PNG, JPG or GIF</Typography>
              <Typography>(max, 800 X 800px)</Typography>
            </Box>
            </label>
          </Box>

          <Box className="flex justify-end gap-4.5">
            <Button
              className=" text-black hover:bg-red dark:border-strokedark dark:text-white"
              type="submit"
            >
              Cancel
            </Button>
            <Button className="bg-primary text-gray hover:bg-green-400"
              type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default PhotoRelated