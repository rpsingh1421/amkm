import { CheckBox } from '@mui/icons-material';
import { Box, Button, Checkbox, Dialog, FormControlLabel, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const InstructionDialog = (props) => {
  const {openInstructionDialog,setOpenInstructionDialog} = props;
  const [acceptInstructions,setAcceptInstructions] = useState(false);
  const handleCheckbox =()=>{

  }
  return (
    <Dialog open={openInstructionDialog} fullWidth>
        <Box className="p-[3%]">
          <Box className="text-center">
            <Typography className="font-bold text-2xl">Read Regisitration Instructions Carefully</Typography>
          </Box>
          <Box>
            <List sx={{ listStyle: "decimal", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">You have not registered earlier with us</ListItem>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">you should have a valid phone Number,email which is not used for registration before with us</ListItem>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">you should have valid aadharcard/aadharcard image </ListItem>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">You should have valid pancard/pancard image</ListItem>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">Once you submit the data it cannot be edited, so fill data carefully</ListItem>
              <ListItem sx={{ display: "list-item" }} className="font-semibold">After Compeleting registration,your account will be verified and activated by us.you will get activation information via mobile or email.</ListItem>
            </List>
          </Box>
          <Box>
            <FormControlLabel 
              control={<Checkbox checked={acceptInstructions} onChange={()=>setAcceptInstructions(!acceptInstructions)}/>} 
              label="I have read instructions carefully." 
            />
          </Box>
          <Box className="text-center">
            <Button
              className=''
              variant='contained'
              size='small'
              onClick={()=>setOpenInstructionDialog(false)}
              disabled={!acceptInstructions}>Accept & Submit</Button>  
          </Box>
        </Box>

    </Dialog>
  )
}

export default InstructionDialog