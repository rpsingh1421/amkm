"use client"
import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SuccessDialog = () => {
  const [seconds, setSeconds] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push('/account/login');
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  const handleGoToLogin = () => {
    router.push('/account/login');
  };

  return (
    <Dialog open>
        <Box className='text-center p-[5%]'>
            <Box className='flex justify-center'>
            <Image width={80} height={30} src='/check-mark.gif' alt='success_symbol'/>
            </Box>
            <Typography className='font-bold text-green-800'>Password Reset Successfully</Typography>
            <Box className='my-[5%]'>
                <Button size='small' variant='contained' onClick={handleGoToLogin}>
                    Go to Login Page
                </Button>
            </Box>
            <Typography className="text-sm">You will be redirected to the login page automatically in <span className='text-[#0866ff]'>{seconds}</span> seconds...</Typography>
        </Box>
      
    </Dialog>
  );
};

export default SuccessDialog;
