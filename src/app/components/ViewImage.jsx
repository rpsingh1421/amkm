import { Close, ZoomIn, ZoomOut } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, IconButton } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const ViewImage = (props) => {
    const {imagePath,openImageDialog,setOpenImageDialog} =props;
    // const [openImageDialog,setOpenImageDialog] = useState(false)
    const handleClose = ()=>{
        setOpenImageDialog(false);
        setZoom(false)
    }
    const zoomImage= "w-[150%] max-w-[none] h-auto"
    const [zoom,setZoom]  = useState(false);
    // const onZoom =()=>{
    //     setZoom(true);
    // }
  return (
    <Dialog open={openImageDialog} onClose={handleClose} className=" w-80% m-auto">
        <Box className='flex gap-[1%] justify-end p-[2%]'>
            <IconButton onClick={()=>setZoom(true)} disabled={!zoom ? false:true}><ZoomIn/></IconButton>
            <IconButton onClick={()=>setZoom(false)} disabled={zoom ? false:true}><ZoomOut/></IconButton>
            <IconButton onClick={()=>handleClose()} className='rounded-md bg-red text-white  hover:bg-red' size='small' ><Close color='inherit' fontSize='small'/></IconButton>
        </Box>
      <DialogContent>
        <Box>
          <Image width={"100"} height={"100"} src={'https://store.amkmofficial.com/'+imagePath} alt='gallery_image'  className={zoom&&zoomImage}/>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ViewImage
