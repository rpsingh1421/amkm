"use client"
import { Box } from '@mui/material'
import React, { createContext, useEffect, useState } from 'react'
import AllMessage from '../../component/visitor/AllMessage'
import ReadMessage from '../../component/visitor/ReadMessage'
import ComposeMessage from '../../component/visitor/ComposeMessage'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

const MessageContext = createContext();
const Inbox = () => {
    const searchParams = useSearchParams();
    const messageId =searchParams.get('id');//if some one clicked on dashboard to a message
    const [visitorsMailList,setVisitorsMailList] = useState([]);
    const [selectsection,setSelelctSection]= useState('compose');
    const [selectedMessageData,setSelectedMessageData] = useState();

    const markMessageAsRead = async()=>{
        await axios.get(`/rest-api/visitor/${messageId}?action=view-status`)
    }
    useEffect(()=>{
        if (messageId && visitorsMailList.length>0) {
            const messageData = visitorsMailList.find(visitor=>visitor._id==messageId);
            setSelectedMessageData(messageData);
            setSelelctSection('read');
            console.log("message data provided")
            if (!messageData.read) {
                console.log('message data view status is false')
                markMessageAsRead();
            }
        }
    },[messageId,visitorsMailList])
  return (
    <MessageContext.Provider value={{visitorsMailList,setVisitorsMailList,selectsection,setSelelctSection,
        selectedMessageData,setSelectedMessageData
    }}>
        <Box className='flex gap-[2%]'>
            <AllMessage/>
            {selectsection == 'read' && <ReadMessage/>}
            {selectsection == 'compose' && <ComposeMessage/>}
        </Box>
    </MessageContext.Provider>
  )
}

export default Inbox
export {MessageContext}