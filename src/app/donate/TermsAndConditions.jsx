"use client"
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel, Modal, Typography } from "@mui/material"

import { useState } from "react"

const TermsAndConditions = (props) => {
  const {openDialog,setOpenDialog,initiatePayment} =props;
  // checkBox related
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Dialog open={openDialog}>
      <DialogContent>
        <Typography className="text-xs my-[3%]">
            Information is being collected to comply with government regulations and shall be treated as confidential. These details shall not be divulged for any other purpose. By sharing your details, you agree to receive stories and updates from AMKM via mobile, Whatsapp, landline, email and post. If you’d like to change this, please send us an email on amkmorg@gmail.com
        </Typography>
        <FormControlLabel 
            control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      // required
                      name='accept'
                    />
                  } 
            labelPlacement="end" 
            label={<Typography className="text-xs">I hereby declare that I am a citizen of India, making this donation out of my own funds. The information provided above is correct to the best of my knowledge. I know that all further communications will be done on contact details provided above</Typography>}/>
        <br/>
        <Typography className="text-sm font-bold my-[2%] text-center">Your donations are tax exempted under 80G of the Indian Income Tax Act</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" startIcon={<ArrowBack/>} color="warning" size="small" onClick={()=>setOpenDialog(false)}>Go Back</Button>
        <Button variant="contained" endIcon={<ArrowForward/>} color="success" size="small" onClick={()=>initiatePayment()} disabled={!checked}>Proceed</Button>
      </DialogActions>
    </Dialog>
  )
}

export default TermsAndConditions
