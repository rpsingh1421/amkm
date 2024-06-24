import { Box, Button, Paper, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const RequestedMembers = () => {
  const [userData,setUserData] = useState([]);
  const fetchData= async()=>{
   const response = await axios.get('https://dummyapi.online/api/social-profiles');
   console.log("social profiles:",response);
   setUserData(response.data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <Paper className='w-[60%]'>
        <Box className='border-b border-borderGray p-[2%]'>
            <Typography className='font-semibold text-xl'>Pending Requests</Typography>
        </Box>
        <Box className=''>
          {userData.map((user,index)=>{
              const {userId,username,email,profilePic,fullName} = user
            return(
              index <7 && 
              <Box key={index} className='border-b border-t border-borderGray flex '>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{userId}</Typography></Box>
                  {/* <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Image width={40} height={40} src={profilePic} alt={fullName}/></Box> */}
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{fullName}</Typography></Box>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{username}</Typography></Box>
                  <Box className=' flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{email}</Typography></Box>
                  <Box className='flex items-center text-center p-[1%] border-r'><Button size='small' variant='contained' color='primary'>View</Button></Box>
              </Box>
            )
          })}

        </Box>
        <Box className='flex justify-end px-[5%]'>
          <Button>View More</Button>
        </Box>
    </Paper>
  )
}

export default RequestedMembers