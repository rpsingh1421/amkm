"use client"
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import stateDistrictList from '@/app/data/StateDistList.json'
import Image from 'next/image';
import { Close, Edit } from '@mui/icons-material';
import axios from 'axios';


const storePath = process.env.NEXT_PUBLIC_STORE;
const MemberProfile = (props) => {
    const {selectedMember, setSelectedMember,assignRole, activateMember,responseDetails,onCloseDialog,setResponseDetails,edit,setEdit} = props;
    console.log("received userData in MemberProfile is:",selectedMember);
    const{register,handleSubmit,control,formState:{errors},clearErrors,reset}= useForm();

  return (
    <Dialog open sx={{
        "& .MuiDialog-container": {
        "& .MuiPaper-root": {
            width: "80%",
            height: 'auto',
            borderRadius:'1rem'
              // Set your width here
        },
        },
    }} fullScreen>
        <DialogTitle>
            <Box className='flex gap-[2%] justify-end'>
                <Button onClick={()=>setEdit(true)} variant='contained' color='warning' startIcon={<Edit/>}>Edit</Button>
                <Button onClick={()=>onCloseDialog()} variant='contained' color='error' endIcon={<Close/>}>close</Button>
            </Box>
        </DialogTitle>
        <Box component={'form'} onSubmit={handleSubmit(assignRole)} className='p-[2%]'  >
            <Box className='flex gap-[2%] w-full'>
                <Paper className='dark:border-strokedark dark:bg-boxdark'>
                    <Box className='border-b border-[#d3d3d3] p-[2%]'>
                        <Typography className='font-semibold dark:text-whiten'>Personal Information</Typography>
                    </Box>
                    <Box className='p-[2%]'>
                    <Box>
                        {/* ==========name======= */}
                        <Box className="my-[2%]">
                            <TextField
                            className='bg-white rounded-md ' 
                                fullWidth
                                size='small'
                                label='Member Name*'
                                name='member_name'
                                disabled
                                value={selectedMember.member_name}                
                            />
                        </Box>
                        {/* ========email=======  */}
                        
                        <Box className="my-[2%]">
                            <TextField
                            className='bg-white rounded-md ' 
                                fullWidth
                                size='small'
                                // required
                                label='Member Email*'
                                name='member_email'
                                disabled
                                value={selectedMember.member_email}
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
                                disabled
                                value={selectedMember.contact}
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
                                    disabled
                                    value={selectedMember.aadhar_number}                                   
                                />
                            </Box>
                            <Box className="w-1/2">
                                <TextField
                                className='bg-white rounded-md ' 
                                    fullWidth
                                    size='small'
                                    label='Pan Number'
                                    name='pancard_number'
                                    disabled
                                    value={selectedMember.pancard_number}
                                />
                            </Box>
                        </Box>
                        <Box className="flex gap-[2%] my-[2%]">
                            <Box width={'50%'}>
                                <TextField
                                    id="stateLabel"
                                    size='small'
                                    name='state'
                                    disabled
                                    value={selectedMember.state}
                                    label="State"    
                                />
                            </Box>
                            <Box width={'50%'}>
                                <TextField
                                    id="district"
                                    size='small'
                                    name='district'
                                    disabled
                                    value={selectedMember.district}
                                    label="District"                   
                                />
                            </Box>
                        </Box>
                        <Box className="flex gap-[2%] my-[2%]">
                            <Box className="w-1/2">
                                <TextField
                                    className='bg-white rounded-md ' 
                                    fullWidth
                                    size='small'
                                    label='city*'
                                    name='city'
                                    disabled
                                    value={selectedMember.city}
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
                                    disabled
                                    value={selectedMember.pincode}
                                />
                            </Box>
                        </Box>
                        <Box className="flex gap-[2%] my-[2%]">
                            <Box width={'50%'}>
                                <FormControl fullWidth>
                                    <InputLabel id="role">Assign Role</InputLabel>
                                    <Select
                                        // sx={{minHeight:'0px',height:'1.6rem',fontSize:'small'}}
                                        labelId="role"
                                        id="role"
                                        size='small'
                                        name='role'
                                        value={selectedMember.role || ''} // Ensure value is always defined
                                        label="Assign Role"
                                        onChange={(e)=>setSelectedMember(pre=>({...pre,role:e.target.value}))}
                                        // displayEmpty
                                        type='search'  
                                        inputProps={register('role', {
                                            required: 'Please select role',
                                        })}
                                        error={errors.role}
                                        // helperText={errors.district?.message}
                                        disabled={!edit}                     
                                    >
                                        <MenuItem value='admin'>Admin</MenuItem>
                                        <MenuItem value='moderator'>Moderator</MenuItem>
                                        <MenuItem value='member'>Member</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box width={'50%'} className='flex items-center'>
                            <Typography >Only Assign role is editable</Typography>
                            </Box>
                        </Box>
                    </Box>       
                    </Box>
                    {responseDetails.message && <Box>
                        <Typography className={`text-center ${responseDetails.status?'text-green-500':'text-red'}`}>{responseDetails.message}</Typography>
                    </Box>}
                </Paper>
                <Paper className=' dark:border-strokedark dark:bg-boxdark'>
                    <Box className='border-b border-[#d3d3d3] p-[2%]'>
                        <Typography className='font-semibold dark:text-whiten'>Related Images</Typography>
                    </Box>
                    <Box className='flex items-center border-b-2 border-borderGray'>
                        <Box className='flex-1 text-center'><Typography className='font-bold'>Profile Image</Typography></Box>
                        <Box className='flex-1 border-l-2 border-borderGray flex items-center justify-center py-[3%]'>
                            <Image src={`${storePath}/${selectedMember.profile_image}`} alt={selectedMember.member_name+'profile_image'} width={100} height={100}/>
                        </Box>
                    </Box>
                    <Box className='flex items-center border-b-2 border-borderGray'>
                        <Box className='flex-1 text-center'><Typography className='font-bold'>Aadhar Image</Typography></Box>
                        <Box className='flex-1 border-l-2 border-borderGray flex items-center justify-center py-[3%]'>
                            <Image src={`${storePath}/${selectedMember.aadhar_image}`} alt={selectedMember.member_name+'aadhar_image'} width={100} height={100}/>
                        </Box>
                    </Box>
                    <Box className='flex items-center'>
                        <Box className='flex-1 text-center'><Typography className='font-bold'>PanCard Image</Typography></Box>
                        <Box className='flex-1 border-l-2 border-borderGray flex items-center justify-center py-[3%]'>
                            <Image src={`${storePath}/${selectedMember.pancard_image}`} alt={selectedMember.member_name+'pancard_image'} width={100} height={100}/>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box className='flex justify-center my-[2%] gap-[2%]'>
                {edit && <Button type='submit' variant='contained'>Update</Button>}
                {!selectedMember.status && !edit &&<Button onClick={()=>activateMember()} variant='contained' color='success' disabled={!selectedMember.role}>Activate</Button>}
            </Box>
        </Box>
    </Dialog>
  )
}

export default MemberProfile