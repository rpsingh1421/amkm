"use client"

import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Forward, Reply } from "@mui/icons-material";
import ComposeMessage from './ComposeMessage';
import { MessageContext } from '../../visitor/inbox/Inbox';

const ReadMessage = () => {
    const {selectsection,setSelelctSection,selectedMessageData,setSelectedMessageData} = useContext(MessageContext);
  return (
        <Paper className="w-[40%]">
            <Box className='border-b border-lightBorder p-[3%]'>
                <Typography className='font-bold text-base'>Read Message</Typography>
            </Box>
            <Box className='p-[3%]'>
                <Typography className='font-semibold text-sm text-center uppercase'>{selectedMessageData && selectedMessageData.name}</Typography>
                <Typography className='font-semibold text-sm'>{selectedMessageData && selectedMessageData.email}</Typography>
                <Typography className='text-xs'>to me</Typography>
            </Box>
            <Box className='p-[3%] w-[85%] m-auto'>
                <Typography 
                    component="pre"
                    sx={{
                        whiteSpace: 'pre-wrap',       
                        wordWrap: 'break-word',      
                        fontFamily: 'inherit',       
                    }}
                    >
                    {selectedMessageData && selectedMessageData.message}
                    </Typography>
            </Box>
            <Box className='flex gap-[2%] justify-end p-[3%]'> 
                <Button onClick={()=>setSelelctSection('compose')} variant="outlined" className="rounded-full" size="medium"  startIcon={<Reply/>}>reply</Button>
                <Button variant="outlined" className="rounded-full" size="medium" endIcon={<Forward/>}>forward</Button>
            </Box>
        </Paper>
  )
}

export default ReadMessage
