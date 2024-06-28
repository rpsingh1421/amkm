"use client"

import { Box, Paper, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import SelectFromGallery from "./SelectFromGallery";
import UploadNew from "./UploadNew";

const ChangeImage = () => {
    const[tabValue,setTabValue] = useState('one');
    useEffect(()=>{

    },[])
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
        {tabValue == 'one' && <SelectFromGallery/>}
        {tabValue == 'two' && <UploadNew/>}

    </Paper>
  )
}

export default ChangeImage