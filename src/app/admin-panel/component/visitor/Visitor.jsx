"use client"

import { Mail } from '@mui/icons-material'
import { Avatar, Badge, Box, Paper, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Visitor = () => {
  const [isLoading,setIsLoading] = useState(true);
  const navigate = useRouter();
  const [visitorsData,setVisitorsData] = useState([]);
  const fetchVisitorList=async()=>{
    try {
      const fetchResponse = await axios.get('/rest-api/visitor?fetch=un-read');
      console.log("visitor list:",fetchResponse)
      setVisitorsData(fetchResponse.data.body);
    } catch (error) {
      console.error('error in fetching visitors data:',error);
    }
  }
  useEffect(()=>{
    fetchVisitorList();
  },[])
  return (
    <Paper className='w-[40%]'>
        <Box className='border-b border-borderGray p-[3%] flex justify-between'>
            <Typography className='font-semibold text-xl'>Visitor Messages</Typography>
              <Badge color="secondary" badgeContent={visitorsData.length}  className='cursor-pointer' onClick={()=>navigate.push('/admin-panel/visitor/inbox')}>
                <Mail/>
              </Badge>
        </Box>
        <Box>
        {visitorsData.map((visitor, key) => (
          <Link
            href={`/admin-panel/visitor/inbox?id=${visitor._id}`}
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <Box className="relative h-14 w-14 rounded-full">
              <Badge color="secondary">
                <Avatar
                    src={visitor.avatar}
                    alt="User"
                />
              </Badge>
            </Box>

            <Box className="flex flex-1 items-center justify-between">
              <Box>
                <Typography className={`${visitor.read ? 'font-medium':'font-bold'} text-black dark:text-white`}>
                  {visitor.name}
                </Typography>
                <Box>
                  <Typography component={'span'} className={`${visitor.read ? 'font-medium':'font-bold'} text-sm text-black dark:text-white`}>
                    {visitor.message.length > 24 ? visitor.message.slice(0, 24) : visitor.message}
                  </Typography>
                  <Typography component={'span'} className="text-xs"> . {new Date(visitor.createdAt).toLocaleDateString()}</Typography>
                </Box>
              </Box>
              {/* {chat.textCount !== 0 && (
                <Box className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </Box>
              )} */}
            </Box>
          </Link>
        ))}
      </Box>
    </Paper>
  )
}

export default Visitor
