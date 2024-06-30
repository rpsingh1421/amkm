"use client"
import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { FolderOpen } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { PageDataContext } from './Home'
import { useForm } from 'react-hook-form'

const api = defaultNodeApi();

const storePath = process.env.NEXT_PUBLIC_STORE;
const Banner = () => {
    const {pageData,setPageData,initialContent} = useContext(PageDataContext);
    const { register, handleSubmit, formState: { errors, dirtyFields,isDirty  }, clearErrors, reset, watch } = useForm({
        // Set the initial values from pageData:
        defaultValues: pageData //defaultValues with a synchronous object:
    });
    const[editing,setEditing] = useState(true);
    const [responseDetails,setResponseDetails] = useState({
        status:'',
        message:''
      })
    const fetchBannerSectionData = async()=>{
        try {
            const response = await axios.get('/rest-api/home-page?section=banner');
            console.log("banner section data:",response)
            if(response.data.body){
                setPageData(response.data.body);
                setEditing(true)
            }
        } catch (error) {
           console.error(error) ;
        }
    }

    const handleDataSubmit = async (data) => {       
        if (editing) {       
            const changedValues = Object.keys(dirtyFields).reduce((accumulator,current)=>{
                accumulator[current]=data[current]
                return accumulator;
            },{});      
            try {
                const updateRespose = await axios.put(`/rest-api/home-page/${pageData._id}`,changedValues);
                console.log('banner page data updated response:',updateRespose);
                setPageData(initialContent);
                setResponseDetails({status:true,message:updateRespose.data.message})
            } catch (error) {
                setResponseDetails({status:false,message:'failed to upload banner data'})
                console.log('failed to update:',error)
            }
            
        }else{
            try {
                const createRespose = await axios.post('/rest-api/home-page',data);
                console.log('banner page data saved response:',createRespose);
                setPageData(initialContent);
                setResponseDetails({status:true,message:createRespose.data.message})
            } catch (error) {
                setResponseDetails({status:false,message:'failed to create banner data'})
                console.log('failed to create:',error)
            }
        }      
    };
    useEffect(()=>{
        fetchBannerSectionData();
    },[])
    useEffect(() => {
        reset(pageData);//it will use the latest pageData values.
    }, [pageData, reset]);
  return (
    <Paper className='w-[90%] m-auto mt-[1%] py-[3%] rounded-xl'>
        <Box component={'form'} onSubmit={handleSubmit(handleDataSubmit)} className='w-3/4 m-auto'>
            <Typography className={`${responseDetails.status?'text-green-500':'text-red'}`}>{responseDetails.message}</Typography>           
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>line1</Typography>
                <TextField
                    fullWidth
                    size='small'
                    value={watch('quote1')}
                    {...register('quote1', {
                        required: 'line1 field should not be empty',
                        pattern: {
                            value: /^(?:[a-zA-Z]+(?:\s|$)){0,5}$/,
                            message: "Please enter up to 5 words using only alphabets."
                        }
                    })}
                    error={!!errors.quote1}
                    helperText={errors.quote1?.message}
                />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>line2</Typography>
                <TextField
                    fullWidth
                    size='small'
                    value={watch('quote2')}
                    {...register('quote2', {
                        required: 'line2 field should not be empty',
                        pattern: {
                            value: /^(?:[a-zA-Z]+(?:\s|$)){0,5}$/,
                            message: "Please enter up to 5 words using only alphabets."
                        }
                    })}
                    error={!!errors.quote2}
                    helperText={errors.quote2?.message}
                />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
                <Typography className='w-[25%] font-bold'>Message</Typography>
                
                <TextField
                    fullWidth
                    size='small'
                    {...register('content', {
                        required: 'message field should not be empty',
                        pattern: {
                        value: /^(?:[a-zA-Z,''""&.]+(?:\s|$)){0,50}$/,
                        message: "Only letters, comma, apostrophe, quotation marks, ampersand, full stop, spaces allowed. Max 20 words."
                        }
                    })}
                    value={watch('content')}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                    multiline
                    rows={3}
                />
            </Box>
            <Box className="flex justify-end">
                {editing ?<Button disabled={!isDirty} variant='contained' size='small' className='' type='submit'>update</Button>
                :<Button disabled={!isDirty} variant='contained' size='small' className='' type='submit'>Add</Button>}
            </Box>
        </Box>
    </Paper>
  )
}

export default Banner
