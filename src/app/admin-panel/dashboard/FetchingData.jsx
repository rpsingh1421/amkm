"use client"
import { Box, ListItem } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

async function getMovieList(){
    const response = await axios.get('https://dummyapi.online/api/movies');
    return response.data;
}
  
  const FetchingData=async()=> {
    // const records = await getMovieList();
    const [records,setRecords] = useState([]);
    const getMovieList=async()=>{
        const response = await axios.get('https://dummyapi.online/api/movies');
        setRecords(response.data)
    }
    useEffect(()=>{
        getMovieList()
    },[])
    return (
      <>
      {records.map((item, index) => (
          <ListItem key={index}>{item.movie}</ListItem>
        ))}
      </>
    )
  }
export default FetchingData;