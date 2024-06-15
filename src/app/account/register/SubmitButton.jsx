"use client"
import { Box, Button } from "@mui/material"
// import styles from './studentregisteration.module.scss'
import { useContext } from "react";
import { StepperContext } from "./RegisterPage";

const SubmitButton = (props) => {
    const {activeStep,handleBack,handleNext,onFinalSubmit}=useContext(StepperContext);
  return (
    <Box className='w-full pr-[1%] flex gap-[1%] justify-end'>
        {activeStep<3 &&activeStep>0   && <Button size='small' onClick={handleBack} variant="contained" color="warning">Back</Button>}
        {activeStep<2  && <Button size='small' type='submit' variant="contained" color="success" >Save & Next</Button>}
        {/* {activeStep<3  && <Button size='small' onClick={handleNext} variant="contained" color="info">Skip</Button>} */}
        {activeStep==2 && <Button size='small' onClick={onFinalSubmit} variant="contained" color="success">Register</Button>}
        {activeStep <2 && <Button size='small' variant="contained" color="error">Cancel</Button>}
    </Box>
  )
}

export default SubmitButton
