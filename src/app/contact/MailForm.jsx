"use client"

import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MailForm = () => {
    const{register,handleSubmit,formState:{errors}}= useForm();
    const visitorIntialData ={
      name:'',
      email:'',
      contact:'',
      subject:'',
      message:''
    }
    const [visitorData,setVisitorData] = useState(visitorIntialData);
    const [response,setResponse] = useState({
      status:'',
      message:''
    })
    const inputChangeHandler =(e)=>{
      setVisitorData(pre=>({...pre,[e.target.name]:e.target.value}));
    }
    const dataSubmitHandler = async()=>{
      try {
        const response= await axios.post('/rest-api/visitor',visitorData);
        setResponse({status:true,message:'thanks for contacting us. We will contact you soon.'})
      } catch (error) {
        console.error(error.response.error);
        setResponse({status:false,message:'something went wrong...try again later'})
      }
    }
  const clearForm =()=>{
    setVisitorData(visitorIntialData);
    setResponse({status:'',message:''});
  }
  return (
    <>
    <Box component={'form'} onSubmit={handleSubmit(dataSubmitHandler)}>
      <TextField
          className='mb-[2%]' 
        fullWidth
        size='small'
        label='Enter Your Name*'
        name='name'
        value={visitorData.name}
        onChange={inputChangeHandler}
        inputProps={{
          ...register(
              'name',{
                  required:'empty not allowed',
                  pattern:{
                      value:/^[a-zA-Z ]*$/,
                      message:"only alphabets allowed"
                  },
                  minLength:{
                      value:3,
                      message:"minimum 3 digit"
                  },
                  maxLength:{
                      value:30,
                      message:"maximum 30 digit"
                  }
              }
          )
        }}
        error={errors.name && errors.name}  
        helperText={errors.name && errors.name?.message}                 
      />
        
        <TextField
            className='mb-[2%]' 
          fullWidth
          size='small'
          label='Enter Your Email*'
          name='email'
          value={visitorData.email}
          onChange={inputChangeHandler}
          inputProps={{
            ...register('email',
              {
                required:'empty not allowed',
                pattern:{
                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message:"Email is not Valid"
                }
              }
            )
          }}
          error={errors.email && errors.email}
          helperText={errors.email && errors.email?.message}                   
      />
        
      <TextField
        className='mb-[2%]' 
        fullWidth
        type='number'
        size='small'
        label='Phone Number*'
        name='contact'
        value={visitorData.contact}
        onChange={inputChangeHandler}
        inputProps={{
          ...register('contact',
            {
              required:'empty not allowed',
              pattern:{
                  value:/[1-9]{1}[0-9]{9}/,
                  message:"only numeric : not starting with 0"
              },
              minLength:{
                  value:10,
                  message:"number should be of 10 digit"
              },
              maxLength:{
                  value:10,
                  message:"number should be of 10 digit"
              }
            }
          )
        }}
        error={errors.contact && errors.contact}
        helperText={errors.contact && errors.contact?.message}
      />
      <TextField
          className='mb-[2%]' 
        fullWidth
        size='small'
        label='Enter message topic*'
        name='subject'
        value={visitorData.subject}
        onChange={inputChangeHandler}
        inputProps={{
          ...register(
              'subject',{
                  required:'empty not allowed',
                  pattern:{
                      value:/^[a-zA-Z ]*$/,
                      message:"only alphabets allowed"
                  },
                  minLength:{
                      value:3,
                      message:"minimum 3 digit"
                  },
                  maxLength:{
                      value:30,
                      message:"maximum 30 digit"
                  }
              }
          )
        }}
        error={errors.subject && errors.subject}  
        helperText={errors.subject && errors.subject?.message}                 
      />
       <TextField
          className='mb-[3%]'
          fullWidth
          multiline
          rows={3}
          size='small'
          placeholder='Write Your Message*'
          name='message'
          value={visitorData.message}
          onChange={inputChangeHandler}
          inputProps={{
            ...register(
                'message',{
                    required:'empty not allowed',
                    pattern:{
                        value:/^[a-zA-Z.,!?&$!() ]*$/,
                        message:"only alphabets and .,!?&$!() allowed"
                    },
                    minLength:{
                        value:3,
                        message:"minimum 3 digit"
                    },
                    maxLength:{
                        value:1000,
                        message:"maximum length exceed"
                    }
                }
            )
          }}
          error={errors.message && errors.message}
          helperText={errors.message && errors.message?.message}
        />
        <Button size='medium' variant='contained' type="submit">Send</Button>
    </Box>
    {response.message && <Dialog open 
        sx={{
            "& .MuiDialog-container": {
            "& .MuiPaper-root": {
                width: "30%",
                  // Set your width here
            },
            },
        }}
      >
        <Box className="flex justify-end">
          <IconButton onClick={()=>clearForm()} className="hover:bg-[#dd0723] bg-[#f18156] text-whiten rounded-none" size="small"><Close color="inherit"/></IconButton>
        </Box>
        <Box className="text-center m-[3%]">
            <Typography className='font-semibold my-[2%] text-xl'>&quot;AMKM-Aao Milkar Karein Madad&quot;</Typography>
            <Box className='w-1/3 m-auto'>
                <Image width={100} height={100} src='/thanks.png' alt='processing_image' className=''/>
            </Box>
            <Typography className={`font-semibold my-[2%] capitalize ${!response.status ? 'text-[#dd0723]' :'text-green-600'}`}>
              {response.message}
            </Typography>
        </Box>
    </Dialog>}
    </>
  )
}

export default MailForm
