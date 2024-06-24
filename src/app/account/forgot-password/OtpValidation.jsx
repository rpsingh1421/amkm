"use client"
import defaultNodeApi from '@/lib/api/defaultNodeApi';
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ForgotPasswordContext } from './ForgotPassword';

const OtpValidation = () => {
    const api = defaultNodeApi(); // Get the Axios instance
    const {step,nextStep,handleNext,userCredentials,setUserCredentials,userCredentialsInitial} = useContext(ForgotPasswordContext);
    const{register,handleSubmit,control,getValues,formState:{errors},clearErrors,reset,setValue}= useForm();
    
    const [error,setError] = useState('');
    const inputChangeHandler =(e)=>{
        setError('');
        setUserCredentials((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const validateOtp = async()=>{
        let data ={
            otp:userCredentials.otp,
            user_id:userCredentials.user_id
        }
        try {
            const response= await api.post('/rest-api/auth/password-change',data);
        if(response.data.status){
            // console.log(response);
            handleNext();

        }
        } catch (error) {
            const errorMessage = error.response.data.message;
            setError(errorMessage);
        }
    }
    return (
    <>
    <Box className='p-[2%] border-b-2 gap-[5%] flex'>
        <Image src='/aaomilkar_logo.png' alt='amkm_logo' width={30} height={10}/>
        <Typography className="flex-1 text-xl font-bold">Validate Otp</Typography>
    </Box>
    <Box className='text-center mt-[2%]'><Typography className='text-xs text-red-700'>{error && error}</Typography></Box>
    <Box component='form' className='p-[5%] text-center' onSubmit={handleSubmit(validateOtp)}>
        <TextField 
            
            size='small'
            // required
            label='Enter Otp*'
            name='otp'
            value={userCredentials.otp}
            onChange={inputChangeHandler}
            inputProps={{
                ...register(
                    'otp',{
                        required:'empty not allowed',
                    }
                )
            }}
            error={errors.otp && errors.otp}
            helperText={errors.otp && errors.otp?.message}
        />
        <Box className='my-[2%] text-center'>
            <Button variant='contained' color='primary' size='small' type='submit'>validate</Button>
        </Box>
        {/* <Box className="flex justify-between">
            <Link href='/account/forgot-password' className='text-[#0866ff]'>Forgot Password</Link>
            <Typography>If not already registered ?...<span><Link href="/account/register" className='text-[#0866ff]'>Sign Up</Link></span></Typography>
        </Box> */}
    </Box>
    </>
  )
}

export default OtpValidation