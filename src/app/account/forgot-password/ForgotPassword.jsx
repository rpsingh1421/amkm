"use client"

import { Box, Paper } from '@mui/material'
import React, { createContext, useState } from 'react'
import SearchAccount from './SearchAccount'
import ResetPassword from './ResetPassword'
import SuccessDialog from './SuccessDialog'
import OtpValidation from './OtpValidation'
import FailureDialog from './FailureDialog'

const ForgotPasswordContext = createContext();
const ForgotPassword = () => {
    const [step,setStep] = useState(0);

    const userCredentialsInitial = {
        user_id:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        otp:'',
    }
    const [userCredentials,setUserCredentials] = useState(userCredentialsInitial);
    const handleNext =()=>{
        setStep(step+1);
    }
  return (
    <Box className="">
        <Box className="flex gap-[5%] w-[40%] m-auto py-[5%]">           
            <ForgotPasswordContext.Provider value={{step,setStep,handleNext,userCredentials,setUserCredentials,userCredentialsInitial}} >
                <Paper className=" w-full m-auto opacity-80 rounded-xl">
                    {step==0 && <SearchAccount/>}
                    {step==1 && <OtpValidation/>}
                    {step==2 && <ResetPassword/>}
                    {step==3 && <SuccessDialog/>}
                    {step==4 && <FailureDialog/>}
                </Paper>
            </ForgotPasswordContext.Provider>
        </Box>
    </Box>
  )
}

export default ForgotPassword
export {ForgotPasswordContext}