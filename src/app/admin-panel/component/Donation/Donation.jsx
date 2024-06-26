"use client"
import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Donation = () => {
  const[donationList,setDonationList] = useState([]);
  const fetchDonationList =async()=>{
    try {
      const response = await axios.get('/rest-api/donation');
      console.log("donation list:",response)
      setDonationList(response.data.body);
    } catch (error) {
      console.error("fetching error:",error)
    }
    
  }
  useEffect(()=>{
    fetchDonationList();
  },[])
  return (
    <Paper className='w-full'>
        <Box className='border-b border-borderGray p-[2%]'>
            <Typography className='font-semibold text-xl'>Recent Donation</Typography>
        </Box>
        <Box className=''>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Transation Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>transactionId</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Donor,s Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donationList.map((item,index)=>{
                const date = new Date(item.createdAt).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            }).replace(/ (?=\d{4})/, '')
                return(
                  <TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.transactionId}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{item.donor.donorName}</TableCell>
                    <TableCell><Button size='small' variant='contained'>view</Button></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
    </Paper>
  )
}

export default Donation