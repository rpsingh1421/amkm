"use client"

import { Box, Button, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { createContext, useState } from "react"
import Donordetails from "./Donordetails";
import AmountSelection from "./AmountSelection";

const DonorDetailContext = createContext();
const PaymentForm = () => {
    const[amountToBePaid,setAmountToBePaid] = useState(0);
    const donorDetailsInitialState = {
        paidAmount:'',
        citizenship:'indian',
        donorName:'',
        dateOfBirth:'',
        email:'',
        contactNumber:'',
        addressLine1:'',
        addressLine2:'',
        state:'',
        district:'',
        city:'',
        pincode:'',
        panNumber:'',
        aadhaarNumber:'',
        paymentDetails:{
            paymentMode:'',
        }
    }
    const [donorDetails,setDonorDetails] = useState(donorDetailsInitialState);
    const [step,setStep] = useState(0);
  return (
    <Paper  className="sm:w-1/2 opacity-75 rounded-3xl h-fit m-auto">
        <Box className=" m-auto text-center py-[5%] bg-orange-400 rounded-t-[1rem]">
            <Typography>Donate to help under-privileged children and save tax</Typography>
        </Box>
        <DonorDetailContext.Provider value={{donorDetailsInitialState,donorDetails,setDonorDetails,step,setStep}}>
            {step==0 && <AmountSelection/>}
            {step==1 && <Donordetails/>}
        </DonorDetailContext.Provider>
      
    </Paper>
  )
}

export default PaymentForm
export{DonorDetailContext}