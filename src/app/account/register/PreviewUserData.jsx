import { Box, Typography } from "@mui/material"
// import styles from './studentregisteration.module.scss'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { StepperContext } from "./RegisterPage";
import SubmitButton from "./SubmitButton";
// import { StepperContext, UploadedFileContext } from './Register'
// import SubmitButton from './SubmitButton'

const PreviewUserData = () => {
    const {activeStep,handleBack,handleNext,userData,uploadedFiles}=useContext(StepperContext);
    // const {selectedProfilePhotoPath,selectedAadharPhotoPath,selectedEnglishSignPhotoPath,selectedHindiSignPhotoPath} = useContext(UploadedFileContext);
    const{register,handleSubmit,formState:{errors},clearErrors,reset}= useForm();
  return (
    <Box>
      <Box className="border-2 my-[2%]">
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Name</Typography>
            <Typography className="text-sm font-semibold w-[70%]">{userData.member_name}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Email</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.member_email}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Phone Number</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.contact}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Aadhaar Number</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.aadhar_number}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Pancard Number</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.pancard_number}</Typography>
          </Box>
          {/* <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Address</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.address}</Typography>
          </Box> */}
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">city</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.city}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">District</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.district}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">State</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.state}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Pincode</Typography>
            <Typography className="text-sm font-semibold w-[70%] p-[1%]">{userData.pincode}</Typography>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">User Photo</Typography>
            <Box className="w-[70%] p-[1%]">
              <img src={uploadedFiles.find(item=>item.fieldName=="profile_image").preview} alt="" className="w-1/3"/>  
            </Box>
          </Box>
          <Box className="flex gap-[3%] border-b-2">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Aadhaar Image</Typography>
            <Box className="w-[70%] p-[1%]">
            <img src={uploadedFiles.find(item=>item.fieldName=="aadhar_image").preview} alt="" className="w-1/3"/> 
            </Box>
          </Box>
          <Box className="flex gap-[3%]">
            <Typography className="text-base font-bold w-1/4 border-r-2 p-[1%]">Pancard Image</Typography>
            <Box className="w-[70%] p-[1%]">
            <img src={uploadedFiles.find(item=>item.fieldName=="pancard_image").preview} alt="" className="w-1/3"/> 
            </Box>
          </Box>
      </Box>
      <SubmitButton/>
    </Box>
  )
}

export default PreviewUserData
