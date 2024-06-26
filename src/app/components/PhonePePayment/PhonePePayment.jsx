// app/components/PhonePePayment/PhonePePayment.js
"use client"
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const PhonePePayment = () => {
  const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
  
  const [paymentData,setPaymentData] = useState({
    // merchantTransactionId: `txn_${Date.now()}`,
    amount: '',
  });
  const initiatePayment = async () => {
    

    try {
      const response = await axios.post('/rest-api/payment/phonepay/initiate-payment', paymentData);

      // const result = await response.json();
      if (response.data.success) {
        window.location.href = response.data.paymentUrl;
      } else {
        console.error('Payment initiation failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <Box>
      <Box component={'form'} onSubmit={handleSubmit(initiatePayment)}>
        <TextField 
          type="number"
          name='amount'
          value={paymentData.amount} 
          onChange={(e) => setPaymentData(pre=>({amount:e.target.value}))} 
          placeholder="Enter amount"
          inputProps={{
            ...register('amount',{
              required:'enter amount'
            })
          }}
          error={errors.amount && errors.amount}
          helperText={errors.amount && errors.amount?.message}
        />
        <Button variant='contained' type="submit">Pay Now</Button>
    </Box>
    </Box>
  );
};

export default PhonePePayment;
