"use client"

import { CurrencyRupee, Favorite, Lock } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { DonorDetailContext } from "./PaymentForm";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const AmountSelection = () => {
    const {donorDetailsInitialState,donorDetails,setDonorDetails,step,setStep} = useContext(DonorDetailContext);
    const{register,handleSubmit,control,formState:{errors},clearErrors,reset,setValue}= useForm();

    const inputChangeHandler =(e)=>{
        setDonorDetails((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const selectAmountHandler =(amount)=>{
        // clearErrors("paidAmount");
        setDonorDetails((pre)=>{
            return {...pre,paidAmount:amount}
        });
        setValue("paidAmount", amount);
        clearErrors("paidAmount");
           
    }
    const amountSubmitHandler =()=>{
        setStep(step+1);
    }
  return (
    <Box component='form' onSubmit={handleSubmit(amountSubmitHandler)} className="text-center bg-white py-[5%] rounded-[1rem]">
        <Box>
            <Typography className="mb-[3%]"><span><Favorite color="error"/></span>How will my donation TRANSFORM A CHILD’S LIFE?</Typography>
            <Typography>Your contribution will be used towards giving India’s underprivileged children happier childhoods</Typography>

        </Box>
        <Box className="my-[3%] text-start px-[5%]">
            <Typography className="text-sm font-bold"><Lock/>choose an amount to donate</Typography>
            <Box className="flex gap-2 justify-around w-1/2 m-auto">
                <Button variant={donorDetails.paidAmount=='3000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(3000)} >3000</Button>
                <Button variant={donorDetails.paidAmount=='5000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(5000)} >5000</Button>
                <Button variant={donorDetails.paidAmount=='10000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(10000)} >10000</Button>
            </Box>
            <Box className="flex gap-2 justify-around w-1/2 m-auto my-[3%]">
                <Button variant={donorDetails.paidAmount=='20000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(20000)} >20000</Button>
                <Button variant={donorDetails.paidAmount=='50000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(50000)} >50000</Button>
                <Button variant={donorDetails.paidAmount=='100000'?'contained':"outlined"} startIcon={<CurrencyRupee/>} onClick={()=>selectAmountHandler(100000)} >100000</Button>
            </Box>
            <Box className="bg-white w-fit m-auto">
                <TextField
                    variant="filled"
                    name='paidAmount'
                    type='number'
                    onChange={inputChangeHandler}
                    value={donorDetails.paidAmount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><CurrencyRupee/></InputAdornment>,
                        endAdornment: <InputAdornment position="end">other amount</InputAdornment>,
                    }}
                    inputProps={{
                        ...register(
                            'paidAmount',{
                                required:'empty not allowed',
                                pattern:{
                                    value:/[1-9]{1}[0-9]{2,}/,
                                    message:"amount should not be less than 500"
                                },
                                // minLength:{
                                //     value:4,
                                //     message:"amount should not be less than 1000"
                                // }
                                validate: value => value >=100 || "amount should not be less than 500"
                            }
                        )
                    }}
                    error={errors.paidAmount}
                    helperText={errors.paidAmount?.message}
                />
                
            </Box>
        </Box>
        <Typography className="text-xs">Your donations are tax exempted under 80G of the Indian Income Tax Act</Typography>
        <Button variant="contained" type="submit" className="mt-[3%]" color="error" startIcon={<Favorite/>}>Donate now</Button>
      </Box>
  )
}

export default AmountSelection
