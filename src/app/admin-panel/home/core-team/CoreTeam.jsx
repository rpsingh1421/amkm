"use client"
import { Paper, Tab, Tabs } from '@mui/material'
import React, { createContext, useEffect, useState } from 'react'
import MemberList from './MemberList';
import AddModifyMember from './AddModifyMember';
import axios from 'axios';

const CoreTeamContext = createContext();
const CoreTeam = () => {
    const[tabValue,setTabValue] = useState('one');
    const [registeredMembers,setRegisteredMembers] = useState([]);
    const [isEditing,setIsEditing] = useState(false);
    const memberInitialData={
        position:'',
        facebook:'',
        instagram:'',
        twitter:'',
        user:''
    };
    const [memberData,setMemberData] = useState(memberInitialData); 
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
        <CoreTeamContext.Provider value={{setTabValue,isEditing,setIsEditing,registeredMembers,memberInitialData,memberData,setMemberData}}>
            {tabValue=='one' && <MemberList/>}
            {tabValue=='two' && <AddModifyMember registeredMembers={registeredMembers}/>}
        </CoreTeamContext.Provider>
    </Paper>
  )
}

export default CoreTeam

export {CoreTeamContext}