"use client"
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import stateDistrictList from '@/app/data/StateDistList.json'

const PersonalInformation = () => {
    const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();
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
    const  inputChangeHandler=(e)=>{
        setUserData((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }

    const submitPersonalDetail=()=>{

    }
    const[confirmPassword,setConfirmPassword] = useState('');
    const confirmPasswordChangeHandler =(e)=>{
        setConfirmPassword(e.target.value);
    }
    const validatePasswordConfirmation =  (value) => {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        return value == userData.password || "password not matched";
    };
    const [districtListOfselectedState,setDistrictListOfselectedState] = useState([]);
    useEffect(()=>{
        const new_array = stateDistrictList.filter(item=> item.state==userData.state);
        new_array.map((item,index)=>
        setDistrictListOfselectedState(item.districts)
        );
        // setDistrictList(new_array.districts);
        // console.log(districtList);
    },[userData.state])
  return (
    <Paper className='w-[70%] dark:border-strokedark dark:bg-boxdark'>
        <Box className='border-b border-[#d3d3d3] p-[2%]'>
            <Typography className='font-semibold dark:text-whiten'>Personal Information</Typography>
        </Box>
        <Box className='p-[2%]' component={'form'} onSubmit={handleSubmit(submitPersonalDetail)} >
        <Box>
            {/* ==========name======= */}
            <Box className="my-[2%]">
                <TextField
                className='bg-white rounded-md ' 
                    fullWidth
                    size='small'
                    label='Enter Your Name*'
                    name='member_name'
                    value={userData.member_name}
                    onChange={inputChangeHandler}
                    inputProps={{
                        ...register(
                            'member_name',{
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
                    error={errors.member_name && true}                  
                />
            </Box>
            {/* ========email=======  */}
            
            <Box className="my-[2%]">
                <TextField
                className='bg-white rounded-md ' 
                    fullWidth
                    size='small'
                    // required
                    label='Enter Your Email*'
                    name='member_email'
                    value={userData.member_email}
                    onChange={inputChangeHandler}
                    inputProps={{
                        ...register(
                            'member_email',{
                                required:'empty not allowed',
                                pattern:{
                                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message:"Email is not Valid"
                                }
                            }
                        )
                    }}
                    error={errors.member_email && true}                    
                />
            </Box>
            {/* ========phone number=======  */}
            <Box className="my-[2%]">
                <TextField
                className='bg-white rounded-md ' 
                    fullWidth
                    type='number'
                    size='small'
                    label='Phone Number*'
                    name='contact'
                    value={userData.contact}
                    onChange={inputChangeHandler}
                    inputProps={{
                        ...register(
                            'contact',{
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
                    error={errors.contact && true}
                />
            </Box>
            <Box className="flex gap-[2%] my-[2%]">
                <Box className="w-1/2">
                    <TextField
                    className='bg-white rounded-md ' 
                        fullWidth
                        type='number'
                        size='small'
                        label='aadhaar Number*'
                        name='aadhar_number'
                        value={userData.aadhar_number}
                        onChange={inputChangeHandler}
                        inputProps={{
                            ...register(
                                'aadhar_number',{
                                    required:'empty not allowed',
                                    pattern:{
                                        value:/[0-9]{12}/,
                                        message:"enter valid 12 digit aadhaar number"
                                    },
                                }
                            )
                        }}
                        error={errors.aadhar_number && true}
                    />
                </Box>
                <Box className="w-1/2">
                    <TextField
                    className='bg-white rounded-md ' 
                        fullWidth
                        size='small'
                        label='Pan Number'
                        name='pancard_number'
                        value={userData.pancard_number}
                        onChange={inputChangeHandler}
                        inputProps={{
                            ...register(
                                'pancard_number',{
                                    required:'pancard number should not empty',
                                    pattern:{
                                        value:/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
                                        message:"enter valid pan number of 10 digit"
                                    },
                                }
                            )
                        }}
                        error={errors.pancard_number && true}
                    />
                </Box>
            </Box>
            <Box className="flex gap-[2%] my-[2%]">
                <Box width={'50%'}>
                    <FormControl fullWidth>
                        <InputLabel id="stateLabel">Select State</InputLabel>
                        <Select
                            // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
                            labelId="stateLabel"
                            id="stateLabel"
                            size='small'
                            name='state'
                            value={userData.state}
                            label="Select State"
                            onChange={inputChangeHandler}
                            // displayEmpty
                            type='search' 
                            inputProps={register('state', {
                                required: 'Please select state',
                              })}
                            error={errors.state && true}
                            // helperText={errors.state?.message}
                        >
                            {stateDistrictList.map((item,index)=>{
                                return(
                                    <MenuItem value={item.state} key={index}>{item.state}</MenuItem>
                                )
                            })}
                            
                        </Select>
                    </FormControl> 
                </Box>
                <Box width={'50%'}>
                    <FormControl fullWidth>
                        <InputLabel id="district">Select District</InputLabel>
                        <Select
                            // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
                            labelId="district"
                            id="district"
                            size='small'
                            name='district'
                            value={userData.district}
                            label="Select District"
                            onChange={inputChangeHandler}
                            // displayEmpty
                            type='search'  
                            inputProps={register('district', {
                                required: 'Please select district',
                            })}
                            error={errors.district}
                            // helperText={errors.district?.message}
                            disabled={!userData.state}                     
                        >
                            {districtListOfselectedState.map((item,index)=>{
                                return(
                                    <MenuItem value={item} key={index}>{item}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box className="flex gap-[2%] my-[2%]">
                <Box className="w-1/2">
                    <TextField
                    className='bg-white rounded-md ' 
                        fullWidth
                        size='small'
                        // required
                        label='city*'
                        name='city'
                        value={userData.city}
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
                        error={errors.city && true}
                    />
                </Box>
                <Box className="w-1/2">
                    <TextField
                    className='bg-white rounded-md ' 
                        fullWidth
                        size='small'
                        type='number'
                        // required
                        label='Pincode*'
                        name='pincode'
                        value={userData.pincode}
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
                        error={errors.pincode && true}
                    />
                </Box>
            </Box>
            <Box className="flex gap-[2%] my-[2%]">
                <Box className="w-1/2">
                    <TextField
                    
                        className='bg-white rounded-md '
                        fullWidth
                        type='password'
                        size='small'
                        // required
                        label='Enter Password*'
                        autoComplete='new-password'
                        name='password'
                        value={userData.password}
                        onChange={inputChangeHandler}
                        inputProps={{
                            ...register(
                                'password',{
                                    required: "Password should not be empty",
                                    pattern:{
                                        value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&]).{6,32}$/,
                                        message:"should be min.6 digit with  Uppercase,lowercase,special symbol and numeric"
                                    }
                                }
                            )
                        }}
                        error={errors.password && true}
                        // helperText={errors.password && errors.password?.message}
                    />
                </Box>
                <Box className="w-1/2">
                    <TextField
                    className='bg-white rounded-md ' 
                        fullWidth
                        // type='password'
                        
                        size='small'
                        // required
                        label='Confirm Password*'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                        inputProps={{
                            ...register(
                                'confirmPassword',{
                                    required:'empty not allowed',
                                    validate: validatePasswordConfirmation,
                                }
                            )
                        }}
                        error={errors.confirmPassword && true}
                        // helperText={errors.confirmPassword && errors.confirmPassword?.message}
                    />
                </Box>
            </Box>
        </Box>       
    </Box>
    </Paper>
  )
}

export default PersonalInformation