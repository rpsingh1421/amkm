"use client"

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DonorDetailContext } from "./PaymentForm";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TermsAndConditions from "./TermsAndConditions";
import { ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import axios from "axios";

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const Donordetails = () => {
    const {donorDetailsInitialState,donorDetails,setDonorDetails,step,setStep} = useContext(DonorDetailContext);
    const{register,handleSubmit,control,formState:{errors},clearErrors,reset,setValue}= useForm();

    const inputChangeHandler =(e)=>{
        setDonorDetails((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const onselectDateOfBirth = (value)=>{
        setDonorDetails((pre)=>{
            return {...pre,dateOfBirth:value}
        })
    }
    const [openDialog,setOpenDialog] = useState(false);
    const openAcceptTermsAndConditionDialog=()=>{
        console.log('hello')
        setOpenDialog(true);
    }
    const initiatePayment = async () => {
        setOpenDialog(false);
        try {
            const response = await axios.post('/rest-api/payment/phonepay/initiate-payment', donorDetails);
            console.log("payment initiation response:",response);
          // const result = await response.json();
            // if (response.data.success) {
            //     window.location.href = response.data.paymentUrl;
            // } else {
            //     console.error('Payment initiation failed:', response.data.message);
            // }
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };
  return (
    <>
    <Paper component='form' onSubmit={handleSubmit(openAcceptTermsAndConditionDialog)} className="bg-white text-center flex flex-col gap-2 h-[100%] p-2 rounded-b-2xl">
        <Box className="flex items-center gap-[5%]">
            <Typography className="font-semibold">Citizenship :</Typography>
            <FormControl>
                {/* <FormLabel id="citizenship">Citizenship</FormLabel> */}
                <RadioGroup
                    row
                    aria-labelledby="citizenship"
                    name="citizenship"
                    value={donorDetails.citizenship}
                    onChange={inputChangeHandler}
                >
                    <FormControlLabel value="indian" control={<Radio />} label="Indian" />
                    <FormControlLabel value="foreigner" control={<Radio disabled/>} label="Foreigner" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box className="flex gap-[1%]">
            <TextField
                size="small"
                name="donorName"
                label="name"
                className="w-1/2"
                value={donorDetails.donorName}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'donorName',{
                            required:'empty not allowed',
                            pattern:{
                                value:/^[a-zA-Z ]*$/,
                                message:"only alphabets allowed"
                            },
                            minLength:{
                                value:3,
                                message:"minimum 3 digit"
                            },
                            maxLength:{
                                value:30,
                                message:"maximum 30 digit"
                            }
                        }
                    )
                }}
                error={errors.donorName}
            />
            <TextField
                size="small"
                name="contactNumber"
                label="Mobile Number"
                className="w-1/2"
                value={donorDetails.contactNumber}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'contactNumber',{
                            required:'empty not allowed',
                            pattern:{
                                value:/[1-9]{1}[0-9]{9}/,
                                message:"only numeric : not starting with 0"
                            },
                            minLength:{
                                value:10,
                                message:"contact should be of 10 digit"
                            },
                            maxLength:{
                                value:10,
                                message:"contact should be of 10 digit"
                            }
                        }
                    )
                }}
                error={errors.contactNumber}
            />
        </Box>
        <Box className="flex gap-[1%]">
            <Controller
                name="dateOfBirth"
                control={control}
                rules={{ required: true}}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DesktopDatePicker
                            label="Enter Date of Birth"
                            control={control}
                            inputFormat="DD-MM-YYYY"
                            value={value}
                            onChange={(event) => { onChange(event);onselectDateOfBirth(event); }}
                            slotProps={{
                                textField:{
                                    // helperText:errors.startDate &&'hello',
                                    error:errors.dateOfBirth,
                                    size: 'small',
                                    sx:{width:'40%'}
                                }
                            }}
                        />
                    </LocalizationProvider>
                )} 
            />
            <TextField
                size="small"
                name="email"
                label="Email"
                className="w-[60%]"
                value={donorDetails.email}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'email',{
                            required:'empty not allowed',
                            pattern:{
                                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message:"Email is not Valid"
                            }
                        }
                    )
                }}
                error={errors.email}
            />
        </Box>
        <Box className="flex gap-[1%]">
            <TextField
                size="small"
                name="addressLine1"
                label="Address Line1"
                className="w-1/2"
                value={donorDetails.addressLine1}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'addressLine1',{
                            required:'empty not allowed',
                        }
                    )
                }}
                error={errors.addressLine1}
                
                
            />
            <TextField
                size="small"
                name="addressLine2"
                label="Address Line2"
                className="w-1/2"
                value={donorDetails.addressLine2}
                onChange={inputChangeHandler}
            />
        </Box>
        <Box className="flex gap-[1%]">
            <TextField
                size="small"
                name="state"
                label="state"
                className="w-1/2"
                value={donorDetails.state}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'state',{
                            required:'empty not allowed',
                            pattern:{
                                value:/^[a-zA-Z ]*$/,
                                message:"only alphabets allowed"
                            },
                            minLength:{
                                value:3,
                                message:"minimum 3 digit"
                            },
                            maxLength:{
                                value:30,
                                message:"maximum 30 digit"
                            }
                        }
                    )
                }}
                error={errors.state}
            />
            <TextField
                size="small"
                name="district"
                label="district"
                className="w-1/2"
                value={donorDetails.district}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'district',{
                            required:'empty not allowed',
                            pattern:{
                                value:/^[a-zA-Z ]*$/,
                                message:"only alphabets allowed"
                            },
                            minLength:{
                                value:3,
                                message:"minimum 3 digit"
                            },
                            maxLength:{
                                value:30,
                                message:"maximum 30 digit"
                            }
                        }
                    )
                }}
                error={errors.district}
            />
        </Box>
        <Box className="flex gap-[1%]">
            <TextField
                size="small"
                name="city"
                label="city"
                className="w-1/2"
                value={donorDetails.city}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'city',{
                            required:'empty not allowed',
                            pattern:{
                                value:/^[a-zA-Z ]*$/,
                                message:"only alphabets allowed"
                            },
                            minLength:{
                                value:3,
                                message:"minimum 3 digit"
                            },
                            maxLength:{
                                value:30,
                                message:"maximum 30 digit"
                            }
                        }
                    )
                }}
                error={errors.city}
            />
            <TextField
                size="small"
                name="pincode"
                label="pincode"
                className="w-1/2"
                value={donorDetails.pincode}
                onChange={inputChangeHandler}
                inputProps={{
                    ...register(
                        'pincode',{
                            required:'empty not allowed',
                            pattern:{
                                value:/[1-9]{1}[0-9]{5}/,
                                message:"only numeric : not starting with 0"
                            },
                            minLength:{
                                value:6,
                                message:"contact should be of 6 digit"
                            },
                            maxLength:{
                                value:6,
                                message:"contact should be of 6 digit"
                            }
                            
                        }
                    )
                }}
                error={errors.pincode}
            />
        </Box>
        <TextField
            size="small"
            name='panNumber'
            label='Pan Number'
            value={donorDetails.panNumber}
            onChange={inputChangeHandler}
            helperText='Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G in India'
            inputProps={{
                ...register(
                    'panNumber',{
                        required:"Pan required",

                        pattern:{
                            value:/^[a-zA-Z0-9]*$/,
                            message:"only alphanumeric allowed"
                        },
                        minLength:{
                            value:10,
                            message:"minimum 10 digit"
                        },
                        maxLength:{
                            value:10,
                            message:"maximum 10 digit"
                        }
                    }
                )
            }}
            error={errors.panNumber}
        />
        
        <Box className="my-[3%] text-center">
            <Image width={100} height={100} src={`${storePath}/payment-mode-strip.png`} alt="payment-strip" className="m-auto w-fit"/>
            <Typography className="text-xs">We accept all major payment methods</Typography>
        </Box>
        <Box className="flex">
            <Button type="submit" color="warning" variant="contained" size="small" className="w-fit m-auto" startIcon={<ArrowBack/>} onClick={()=>setStep(0)}>Go Back</Button>
            <Button type="submit" color="info" variant="contained" size="small" className="w-fit m-auto">continue to payment</Button>
        </Box>    
        <TermsAndConditions openDialog={openDialog} setOpenDialog={setOpenDialog} initiatePayment={initiatePayment}/>
    </Paper>
    
    </>
  )
}

export default Donordetails
