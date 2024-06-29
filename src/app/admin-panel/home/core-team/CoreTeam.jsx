"use client"
import { Paper, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MemberList from './MemberList';
import AddModifyMember from './AddModifyMember';
import axios from 'axios';

const CoreTeam = () => {
    const[tabValue,setTabValue] = useState('one');
    const [registeredMembers,setRegisteredMembers] = useState([]);
    const fetchRegisteredMemberList=async()=>{
        try {
            const response = await axios.get('/rest-api/team/fetch?type=active');
            console.log("registered members response:",response);
            setRegisteredMembers(response.data.body);
        } catch (error) {
            console.error('error in fetching registered member list:',error)
        }
    }
    useEffect(()=>{
        fetchRegisteredMemberList();
    },[])
  return (
    <Paper className='w-[90%] m-auto mt-[1%] pb-[3%] rounded-xl'>
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
            <Tab value='one' label='Member List'/>
            <Tab value='two' label='Add'/>

            
        </Tabs>

        {tabValue=='one' && <MemberList/>}
        {tabValue=='two' && <AddModifyMember registeredMembers={registeredMembers}/>}
    </Paper>
  )
}

export default CoreTeam