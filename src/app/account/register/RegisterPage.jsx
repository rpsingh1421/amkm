"use client"
import React, { createContext, useState } from 'react'
import InstructionDialog from './InstructionDialog';
import { Box, Paper, Step, StepLabel, Stepper } from '@mui/material';
import BasicDetails from './BasicDetails';
import ImageUpload from './ImageUpload';
import PreviewUserData from './PreviewUserData';
import RegistrationResult from './RegistrationResult';
import axios from 'axios';
import ProcessingDialog from '@/app/components/Dialogs/ProcessingDialog';

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

  const [loading, setLoading] = useState(false);
  const onFinalSubmit = async () => {
    
    const formData = new FormData();
    formData.append('userData', userData.member_name);
    uploadedFiles.map(item => formData.append(item.fieldName, item.file));
    // console.log('Files to be uploaded', uploadedFiles);
    setLoading(true); // Start loading
    try {
      const fileUploadResponse = await axios.post('https://store.amkmofficial.com/team-members.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(fileUploadResponse.data.status){
        const savedFiles = fileUploadResponse.data.body;
        // console.log("savedFiles:",savedFiles);
        // savedFiles.map((item)=>{
        //   setUserData((pre)=>({...pre,[item.key]:item.path}));
        // })

        // Wait for the state to be updated
        // await new Promise((resolve) => {
        //   setUserData(updatedUserData, resolve);
        // });// but this not it stuck here
        let updatedUserData = { ...userData };

        savedFiles.forEach(item => {
            updatedUserData[item.key] = item.path;
        });

        // console.log("Updated user data:", updatedUserData);

        // Use updatedUserData directly for the API call
        // console.log("fileUploadResponse:",fileUploadResponse);
        const response = await axios.post('/rest-api/team',updatedUserData);
        // console.log("user data send to save:",updatedUserData);
        // console.log("user data saved response from api:",response);
        if(response.data.status){
          // console.log(response);
          const responseData = response.data.body;
          setRegistrationResponse((pre)=>{
              return {...pre,
                email:responseData.member_email,
                phoneNumber:responseData.contact,
                password:userData.password,              
              }
          });
          updatedUserData = {};
          handleNext();
        }
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }finally {
      setLoading(false); // End loading
    }
  };
  
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
      {loading && <ProcessingDialog/>}
    </>
  )
}

export default RegisterPage

export {StepperContext}