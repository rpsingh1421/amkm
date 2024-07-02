
import { Box, Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Forward, Reply, Send } from "@mui/icons-material";
import { useForm } from 'react-hook-form';
import { MessageContext } from '../../visitor/inbox/Inbox';
import axios from 'axios';
// import { sendMail } from '@/utils/send-mail';

const ComposeMessage = () => {
    const {selectedMessageData,setSelelctSection} = useContext(MessageContext);
    const mailDataInitial ={
        to:selectedMessageData && selectedMessageData.email || '',
        from:'',
        message:'',
        subject:selectedMessageData && selectedMessageData.subject||'',
    }
    const [mailData,setMailData] = useState(mailDataInitial);
    const [sentMailResponse,setSentMailResponse] = useState({
        status:'',
        message:''
    })
    const {register,handleSubmit,formState:{errors,isDirty,dirtyFields},watch,reset,clearErrors} = useForm({
        defaultValues:mailData
    });
    const sendMailHandler =async(data)=>{
        console.log("all mail data:",data);
        const emailData={
            recipient:data.to,
            subject:data.subject,
            message:data.message,
        }
        console.log("mail data to be send:",emailData);
        // sendMail();
        try {
           const mailResponse =  await axios.put('/rest-api/visitor',emailData);
            console.log("email send response:",mailResponse);
            setSentMailResponse({ status:true, message:'Email sent successfully'})
            setMailData(mailDataInitial);
            reset(mailData)
        } catch (error) {
            console.log("error in sending email:",error);
            setSentMailResponse({ status:true, message:'Failed to send email'})
        }

    }
  return (
    <Paper className="w-[40%]">
        <Box className='border-b border-lightBorder p-[3%]'>
            <Typography className='font-bold text-base'>New Message</Typography>
        </Box>
        <Box component={'form'} onSubmit={handleSubmit(sendMailHandler)} className='w-[85%] m-auto py-[3%]'>
            <Typography className={`${sentMailResponse.status ? 'text-green-500':'text-bgRed'} text-xs py-[1%] text-center`}>{sentMailResponse.message}</Typography>
            <Box className='mb-[3%]'>
                <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    disabled={selectedMessageData}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">To</InputAdornment>,
                    }}
                    {...register('to',{
                        required:'enter receipent mail',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address."
                        }
                    })}
                    error={!!errors.to}
                    helperText={errors.to?.message}
                />
            </Box>
            <Box className='mb-[3%]'>
                <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
                    }}
                    {...register('subject',{
                        required:'enter subject',
                    })}
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                />
            </Box>
            <Box className='mb-[3%]'>
                <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    placeholder='Enter message here'
                    {...register('message',{
                        required:'enter mail body',
                        // pattern: {
                        //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        //     message: "Please enter a valid email address."
                        // }
                    })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    multiline
                    rows={10}
                    // This preserves line breaks when typing
                    onChange={(e) => {
                        const value = e.target.value.replace(/\n/g, '\r\n');
                        e.target.value = value;
                    }}
                />
            </Box>
            <Box className='flex gap-[2%] justify-end p-[3%]'> 
                {/* <Button onClick={()=>setSelelctSection('read')} variant="outlined" className="rounded-full" size="medium" >cancel</Button> */}
                <Button type='submit' variant="outlined" className="rounded-full" size="medium" endIcon={<Send/>}>send</Button>
            </Box>
        </Box>
        
    </Paper>
  )
}

export default ComposeMessage
