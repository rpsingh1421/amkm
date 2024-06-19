// src/app/admin-panel/login/LoginEntry.js
"use client"

import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi'
import { useAuth } from '@/context/AuthContext'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import {useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ForgotPasswordContext } from './ForgotPassword'

const SearchAccount = () => {
    const api = defaultNodeApi(); // Get the Axios instance
    const {handleNext,userCredentials,setUserCredentials,userCredentialsInitial} = useContext(ForgotPasswordContext);
    const{register,handleSubmit,control,getValues,formState:{errors},clearErrors,reset,setValue}= useForm();
    
    const [error,setError] = useState('');
    const inputChangeHandler =(e)=>{
        setError('');
        setUserCredentials((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const submitHandler =async()=>{
        // console.log("userCredentials",userCredentials);
        try {
            const response = await api.get(`/rest-api/auth/password-change?email=${userCredentials.email}&contact=${userCredentials.phone}`);
            // console.log("account search response:",response);
            if(response.data.status){
                setUserCredentials(pre=>({...pre,user_id:response.data.user_id}));
                handleNext();
            }
            handleNext();
        } catch (error) {
            const errorMessage = error.response.data.message;
            setError(errorMessage);
        }
    }
  return (
    <>
    <Box className='p-[2%] border-b-2 gap-[5%] flex'>
        <Image src='/aaomilkar_logo.png' alt='amkm_logo' width={30} height={10}/>
        <Typography className="flex-1 text-xl font-bold">Search Your Account</Typography>
    </Box>
    <Box className='text-center mt-[2%]'><Typography className='text-xs text-red-700'>{error && error}</Typography></Box>
    <Box component='form' className='p-[5%]' onSubmit={handleSubmit(submitHandler)}>
        <TextField
            fullWidth
            className='my-[2%]'
            size='small'
            name='email'
            id='email'
            label='Enter email'
            value={userCredentials.email}
            onChange={inputChangeHandler}
            autoComplete='off'
            inputProps={{
                ...register(
                    'email',{
                        
                        // required:'empty not allowed',
                        pattern:{
                            value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message:"Enetr a valid email"
                        },
                        validate:(value)=>{
                            const phone = getValues('phone');
                            if (!value && !phone) {
                                return 'Either email or phone is required';
                            }
                            return true;
                        }
                    }
                )
            }}
            error={!!errors.email}
        />
        <Box className="my-[2%]">
            <Typography className='font-bold my-[3%] text-center'>OR</Typography>
        </Box>
        <Box className="my-[2%]">
            <TextField
                fullWidth
                type='number'
                size="small"
                name="phone"
                label="Enter Registered Number"
                className="mb-[2%]"
                value={userCredentials.phone}
                onChange={inputChangeHandler}
                autoComplete='off'
                inputProps={{
                    ...register(
                        'phone',{
                            pattern: {
                                value: /^[1-9]{1}[0-9]{9}$/,
                                message: "Only numeric, not starting with 0"
                            },
                            minLength: {
                                value: 10,
                                message: "Contact should be of 10 digits"
                            },
                            maxLength: {
                                value: 10,
                                message: "Contact should be of 10 digits"
                            },
                            validate:(value)=>{
                                const email = getValues('email');
                                if (!value && !email) {
                                    return 'Either email or phone is required';
                                }
                                return true;
                            }
                            
                        }
                        
                    )
                }}
                error={!!errors.phone}
            />
        </Box>
        <Box className='my-[2%] text-center'>
            <Button variant='contained' color='primary' type='submit'>Find Account</Button>
        </Box>
        
    </Box>
    <Box className="border-t-2 p-[2%] text-center">
        {/* <Link href='/account/forgot-password' className='text-[#0866ff]'>Cancel</Link> */}
        <Typography>Want to try login again ?...<span><Link href="/account/login" className='text-[#0866ff] font-bold'>Go Back To Login</Link></span></Typography>
    </Box>
    </>
  )
}

export default SearchAccount
