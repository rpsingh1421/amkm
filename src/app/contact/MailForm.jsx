"use client"

import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const MailForm = () => {
    const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
  return (
    <Box component={'form'}>
        <TextField
        fullWidth
        className={"mb-5"}
        size='small'
        name='visitor_name'
        id='visitor_name'
        label='Enter Your Name'
        />
        <TextField
        className={"mb-5"}
        fullWidth
        size='small'
        name='visitor_email'
        id='visitor_email'
        label='Enter Your Email'
        />
        <TextField
        fullWidth
        className={"mb-5"}
        size='small'
        name='visitor_phone'
        id='visitor_phone'
        label='Enter Your Phone Number'
        />
        <TextField
        className={"mb-5"}
        fullWidth
        name='mail_body'
        id='mail_body'
        label='Write Your Message'
        multiline
        rows={3}
        // maxRows={5}
        />
        <Button size='medium' variant='contained'>Send</Button>
    </Box>
  )
}

export default MailForm
