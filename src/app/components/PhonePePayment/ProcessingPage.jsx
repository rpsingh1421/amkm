"use client"
import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProcessingPage = (props) => {
  const {processingDialog,setProcessingDialog,paymentInitiation,setPaymentInitiation,setStep}= props
  const closeDialog=()=>{
    setPaymentInitiation(true);
    setProcessingDialog(false);
    setStep(0);
  }
  return (
    <Dialog open fullWidth>
      <DialogActions className='p-0'>
        <IconButton onClick={closeDialog} size='small' className='bg-red hover:bg-danger p-0.5 rounded-none'><Close/></IconButton>
      </DialogActions>
      <DialogContent className='text-center'>
        {paymentInitiation ? <Box>
          <Typography className='font-bold text-xl'>Your request is still being processed, please wait.</Typography>
          <Box className='flex justify-center'><Image src='/loading_circle.gif'  width={100} height={100} sx={{width:'auto',height:'auto'}} alt='loading'/></Box>
          <Typography className='font-semibold'>Thanks for helping us.</Typography>
        </Box>
        :
        <Box>
          <Box className='flex justify-center'><Image src='/failed_payment.png'  width={100} height={100} sx={{width:'auto',height:'auto'}} alt='loading'/></Box>
          <Typography className='my-[5%] font-semibold'> Sorry there was a problem processing your request</Typography>
          <Button onClick={closeDialog} className='rounded-2xl bg-orange-700 hover:bg-red text-[#ffffff]' variant='contained' size='small' color='inherit'>Try Again</Button>
        </Box>
        }
      </DialogContent>
    </Dialog>
  )
}

export default ProcessingPage