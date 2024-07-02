"use client"

import { Box, Paper, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import ChooseFromGallery from "./ChooseFromGallery";
import NewUpload from "./NewUpload";

const ImageUploadOptions = (props) => {
    const {updateImageFilePath,selectedimage,action,closeDialog,sectionId} =props;
    const[tabValue,setTabValue] = useState('one');
  return (
    <Paper className='mt-[1%] rounded-xl w-full'>
        <Tabs
            value={tabValue}
            onChange={(event,newValue)=>setTabValue(newValue)}
            className="bg-slate-500 rounded-tl-xl rounded-tr-xl"
            textColor="secondary"
            indicatorColor="inherit"
            sx={{
                "& .Mui-selected": {
                    bgcolor:'#000',
                    color:"#fff"
                },
            }}
        >
            <Tab value="one" label="Choose From Gallery" />
            <Tab value="two" label="Upload" />
        </Tabs>
        {tabValue == 'one' && <ChooseFromGallery updateImageFilePath={updateImageFilePath}
                        selectedimage={selectedimage} action={action} closeDialog={closeDialog} sectionId={sectionId}/>}
        {tabValue == 'two' && <NewUpload updateImageFilePath={updateImageFilePath}
                        selectedimage={selectedimage} action={action} closeDialog={closeDialog} sectionId={sectionId}/> }

    </Paper>
  )
}

export default ImageUploadOptions