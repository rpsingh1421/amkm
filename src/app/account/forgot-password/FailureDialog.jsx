"use client"
import React, { useContext } from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';
import Image from 'next/image';
import { ForgotPasswordContext } from './ForgotPassword';

const FailureDialog = () => {
    const {setStep,setUserCredentials,userCredentialsInitial} = useContext(ForgotPasswordContext);

    const handleGoTo = () => {
        setStep(0);
        setUserCredentials(userCredentialsInitial);
    };

  return (
    <Dialog open fullWidth>
        <Box className='text-center p-[5%]'>
            <Box className='flex justify-center'>
            <Image width={80} height={30} src='/error.png' alt='success_symbol'/>
            </Box>
            <Typography className='font-bold text-red-800 my-[3%]'>Password Reset failed</Typography>
            <Typography className='font-bold text-red-800'>Try Again after sometime</Typography>
            <Box className='my-[5%]'>
                <Button size='small' variant='contained' onClick={handleGoTo}>
                    Try again
                </Button>
            </Box>
            {/* <Typography className="text-sm">You will be redirected to the login page automatically in <span className='text-[#0866ff]'>{seconds}</span> seconds...</Typography> */}
        </Box>
      
    </Dialog>
  );
};

export default FailureDialog;
