"use client"
import React, { createContext, useState } from 'react'
import InstructionDialog from './InstructionDialog';
import { Box, Paper, Step, StepLabel, Stepper } from '@mui/material';
import BasicDetails from './BasicDetails';
import ImageUpload from './ImageUpload';
import PreviewUserData from './PreviewUserData';
import RegistrationResult from './RegistrationResult';
import axios from 'axios';

const steps = ['Basic Details', 'Upload Documents', 'Preview & final Submit','Result'];
const StepperContext = createContext();
const RegisterPage = () => {
  const [openInstructionDialog,setOpenInstructionDialog] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const userDataInititalState={
    member_name:'',
    member_email:'',
    contact:'',
    profile_image:'',
    aadhar_number:'',
    aadhar_image:'',
    pancard_number:'',
    pancard_image:'',
    state:'',
    district:'',
    city:'',
    pincode:'',
    password:''
  }
  const [userData,setUserData] = useState(userDataInititalState);
  const [uploadedFiles,setUploadedFiles] =useState([]);
  const [registrationResponse,setRegistrationResponse] = useState({
    email:'',
    phoneNumber:'',
    password:'',
})
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onFinalSubmit=async()=>{
    const formData = new FormData();
    formData.append('userData',JSON.stringify(userData));
    uploadedFiles.map(item=>formData.append(item.fieldName,item.file))
    console.log('submitted Data',uploadedFiles);
    try {
      const response = await axios.post('/rest-api/team-members', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(response.data.status){
        console.log(response);
        const responseData = response.data.body;
        setRegistrationResponse((pre)=>{
            return {...pre,
              email:responseData.member_email,
              phoneNumber:responseData.contact,
              password:userData.password,              
            }
        })
        handleNext();
    }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // handleNext();
  }
  return (
    <>
      <Box className="">
        <Paper className="w-[75%] m-auto rounded-2xl"> 
          <Stepper 
              activeStep={activeStep} 
              alternativeLabel//for label below to step
              sx={{paddingY:'5vh'}}
          >
              {
                  steps.map((step,index)=>{
                      return(
                          <Step key={index}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                      )
                  })
              }                
          </Stepper>
          <StepperContext.Provider value={{activeStep,handleBack,handleNext,onFinalSubmit,userData,setUserData,userDataInititalState,uploadedFiles,setUploadedFiles}}>
            <Paper className="w-[85%] m-auto p-[2%]">
                {activeStep==0 && <BasicDetails/>}
                {activeStep==1 && <ImageUpload/>}
                {activeStep==2 && <PreviewUserData/>}
                {activeStep==3 && <RegistrationResult registrationResponse={registrationResponse}/>}
                
            </Paper>
          </StepperContext.Provider>
        </Paper>
      </Box>
      <InstructionDialog openInstructionDialog={openInstructionDialog} setOpenInstructionDialog={setOpenInstructionDialog} />
    </>
  )
}

export default RegisterPage

export {StepperContext}