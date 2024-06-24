// src/app/admin-panel/login/LoginEntry.js
"use client"

import defaultNodeApi from '@/lib/api/defaultNodeApi'
import { useAuth } from '@/context/AuthContext'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginProcessingDialog from '../../admin-panel/component/Dialogs/LoginProcessingDialog'

const LoginEntry = () => {
    const {authenticatedUser, setAuthenticatedUser,login} = useAuth();
    // console.log("authenticatedUser:",authenticatedUser);
    const api = defaultNodeApi(); // Get the Axios instance
    const navigate = useRouter();
    const [loading,setLoading] = useState(false);
    const loginCredentialsInitial = {
        email:'',
        phone:'',
        password:''
    }
    const [loginCredentials,setLoginCredentials] = useState(loginCredentialsInitial);
    const{register,handleSubmit,control,getValues,formState:{errors},clearErrors,reset,setValue}= useForm();
    const inputChangeHandler =(e)=>{
        setError('');
        setLoginCredentials((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const submitHandler =async()=>{
        // console.log("login credentials",loginCredentials);
        setLoading(true);
        try {
            const response = await api.post('/rest-api/auth/login',loginCredentials);
        console.log("loginresponse",response);
        if(response.data.status){
            setAuthenticatedUser(response.data.body);
            login(response.data.body);//authcontext
            navigate.push('/admin-panel/dashboard');
            setLoginCredentials(loginCredentialsInitial);
            setLoading(false);
        }else{
            setError(response.data.message);
            setLoading(false)
        }
        } catch (error) {
            setError("something gone wrong...server issue");
            setLoading(false)
        }
    }
    const [error,setError] = useState('');
  return (
    <>
    <Box component='form' className='p-[5%]' onSubmit={handleSubmit(submitHandler)}>
        <Box className="mb-[3%]"><Image width={100} height={100} alt='logo' src='/aaomilkar_logo.png' className='w-[20%] m-auto'/></Box>
        <Box className='text-center mt-[2%]'><Typography className='text-xs text-red-700'>{error && error}</Typography></Box>
        <TextField
            fullWidth
            className='my-[2%]'
            size='small'
            name='email'
            id='email'
            label='Enter email'
            value={loginCredentials.email}
            onChange={inputChangeHandler}
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
                value={loginCredentials.phone}
                onChange={inputChangeHandler}
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
        <TextField 
            fullWidth
            type='password'
            size='small'
            // required
            label='Enter Password*'
            autoComplete='new-password'
            name='password'
            value={loginCredentials.password}
            onChange={inputChangeHandler}
            inputProps={{
                ...register(
                    'password',{
                        required: "Password should not be empty",
                        // pattern:{
                        //     value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&]).{6,32}$/,
                        //     message:"should be min.6 digit with  Uppercase,lowercase,special symbol and numeric"
                        // }
                    }
                )
            }}
            error={!!errors.password}
            // helperText={errors.password && errors.password?.message}
        />
        <Box className='my-[2%] text-center'>
            <Button variant='contained' color='primary' type='submit'>Login</Button>
        </Box>
        <Box className="flex justify-between">
            <Link href='/account/forgot-password' className='text-[#0866ff]'>Forgot Password</Link>
            <Typography>If not already registered ?...<span><Link href="/account/register" className='text-[#0866ff]'>Sign Up</Link></span></Typography>
        </Box>
    </Box>
    {loading && <LoginProcessingDialog/>}
    </>
  )
}

export default LoginEntry
