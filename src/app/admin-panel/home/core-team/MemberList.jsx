"use client"

import NoRowsLayout from "@/app/components/Layout/NowRowsLayout";
import TableLoadingSkeleton from "@/app/components/Layout/TableLoadingSkeleton";
import { Box } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"

const MemberList = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [teamList,setTeamList]= useState([]);
    const fetchCoreTeamList =async ()=>{
        try {
            const response = await axios.get('/rest-api/core-team');
            setTeamList(response.data.body);
            setIsLoading(false)
        } catch (error) {
            console.error('failed to fetch team list:',error);
            setIsLoading(false)
        }  
    }
    useEffect(()=>{
        fetchCoreTeamList();
    },[])
  return (
    <Box>
        {isLoading && <TableLoadingSkeleton/>}
        {teamList.map((team,index)=>{
            return (
                <Box>
                
                </Box>
            )
        })   
        }
        {teamList.length==0 && <NoRowsLayout/>}
    </Box>
  )
}

export default MemberList