"use client"

import { Forward, Reply } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { MessageContext } from "../../visitor/inbox/Inbox";

const AllMessage = () => {
    const {visitorsMailList,setVisitorsMailList,setSelelctSection,selectedMessageData,setSelectedMessageData} = useContext(MessageContext);
    const fetchAllvisitorMails =async()=>{
        try{
            const response = await axios.get('/rest-api/visitor');
            setVisitorsMailList(response.data.body);
        }catch(error){
            console.error('error in fatching mailbox',error);
        }
        
    }
    useEffect(()=>{
        fetchAllvisitorMails();
    },[]);
    const selectMessageHandler =async(message)=>{
        setSelectedMessageData(message);
        setSelelctSection('read');
       if (!message.read) {
        await axios.get(`/rest-api/visitor/${message._id}?action=view-status`);
        fetchAllvisitorMails();
       }
    }
  return (
    
    <Paper className='w-[55%]'>
        <Box className='border-b border-lightBorder p-[2%]'>
            <Typography className='font-bold text-base'>All Messages</Typography>
        </Box>
        <Box className='w-[90%] m-auto py-[3%]'>
            {visitorsMailList.map((item,key)=>{
                return(
                    <Box className={`${selectedMessageData && selectedMessageData._id == item._id && 'bg-lightBorder'} border-b border-lightBorder flex items-center justify-between cursor-pointer hover:bg-lightBorder`} onClick={()=>selectMessageHandler(item)}>
                        <Box className='flex justify-between w-[20%]'>
                            <Typography className={`${item.read ? 'font-medium':'font-bold'} text-sm text-black dark:text-white`}> {item.name.length > 10 ? item.name.slice(0, 10) : item.name}</Typography>
                            <Typography component={'span'}>:</Typography>
                        </Box>
                        <Box className='w-[70%] pl-[2%]'>
                            <Typography className={`${item.read ? 'font-medium':'font-bold'} text-sm text-black dark:text-white text-center`}>{item.subject|| 'mail subject'}</Typography>
                            <Typography component={'span'} className={`${item.read ? 'font-medium':'font-bold'} text-sm text-black dark:text-white`}>
                                {item.message.length > 50 ? item.message.slice(0, 50) : item.message}
                            </Typography>
                        </Box>
                        <Box className='w-[10%]'>
                            <Typography component={'span'} className="text-xs"> {new Date(item.createdAt).toLocaleDateString()}</Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    </Paper>
  )
}

export default AllMessage
