"use client"
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { ForgotPasswordContext } from './ForgotPassword';
import Image from 'next/image';
import defaultNodeApi from '@/lib/api/defaultNodeApi';

const api = defaultNodeApi();
const ResetPassword = () => {
    const {step,setStep,handleNext,userCredentials,setUserCredentials,userCredentialsInitial} = useContext(ForgotPasswordContext);

    const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
    
    const inputChangeHandler=(e)=>{
        setUserCredentials(pre=>({...pre,[e.target.name]:e.target.value}));
    }
    const submitHandler =async()=>{
        // console.log("credentials",userCredentials);
        const data = {
            user_id:userCredentials.user_id,
            password:userCredentials.password
        }
        // console.log(" data to be send:",data)
        try {
            const response = await api.put('/rest-api/auth/password-change',data);
        // console.log("loginresponse",response);
        if(response.data.status){
            handleNext();
        }
        } catch (error) {
            setStep(4);
            console.log("error:",error.response)
        }
        
    }
  return (
    <>
    <Box className='p-[2%] border-b-2 gap-[5%] flex'>
        <Image src='/aaomilkar_logo.png' alt='amkm_logo' width={30} height={10}/>
        <Typography className="flex-1 text-xl font-bold">Change Password</Typography>
    </Box>
    <Box component='form' className='p-[5%]' onSubmit={handleSubmit(submitHandler)}>
        <Box className='flex items-center gap-[2%]'>
            <TextField 
                className='my-[2%]'
                type='password'
                size='small'
                // required
                label='Enter Password*'
                autoComplete='off'
                name='password'
                value={userCredentials.password}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'password',{
                            required: "Password should not be empty",
                            pattern:{
                                value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&]).{6,32}$/,
                                message:"should be min.6 digit with  Uppercase,lowercase,special symbol and numeric"
                            }
                        }
                    )
                }}
                error={errors.password && errors.password}
                // helperText={errors.password && errors.password?.message}
            />
            <Typography className='text-xs text-red-700'>{errors.password && errors.password?.message}</Typography>
        </Box>
        <Box className='flex items-center gap-[2%]'>
            <TextField 
                className='my-[2%]'
                autoComplete='off'
                size='small'
                label='Confirm Password*'
                name='confirmPassword'
                value={userCredentials.confirmPassword}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'confirmPassword',{
                            required:'empty not allowed',
                            validate:(value)=>{
                                if (userCredentials.password !== value) {
                                    return 'password mismatch';
                                }
                                return true;
                            },
                        }
                    )
                }}
                error={errors.confirmPassword && errors.confirmPassword}
                // helperText={errors.confirmPassword && errors.confirmPassword?.message}
            />
            <Typography className='text-xs text-red-700'>{errors.confirmPassword && errors.confirmPassword?.message}</Typography>
           {userCredentials.confirmPassword === userCredentials.password && !errors.password&& userCredentials.confirmPassword && !errors.confirmPassword && <Image src='/Success-Transparent.png' width={30} height={30} alt='success_symbol'/>}
        </Box>
        <Box className='my-[2%] text-center'>
            <Button variant='contained' color='primary' type='submit'>Reset Password</Button>
        </Box>
    </Box>
    </>
  )
}

export default ResetPassword