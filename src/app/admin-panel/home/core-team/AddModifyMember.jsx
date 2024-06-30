"use client"

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CoreTeamContext } from "./CoreTeam";

const storePath = process.env.NEXT_PUBLIC_STORE;
const AddModifyMember = ({}) => {
  const {setTabValue,isEditing,setIsEditing,registeredMembers,memberInitialData,memberData,setMemberData} = useContext(CoreTeamContext);
  const [responseDetails,setResponseDetails] = useState({
    status:'',
    message:''
  })
 
  const { register, handleSubmit, formState: { errors, dirtyFields,isDirty }, clearErrors, reset,watch } = useForm({
    defaultValues: memberData // Set the initial values
  });

  const onFormSubmit =async(data)=>{
    console.log("all submitted data:",data);
    if (isEditing) {
      const changedValues = Object.keys(dirtyFields).reduce((accumulator, current) => {
        accumulator[current] = data[current];
        return accumulator;
      }, {});
      console.log("Changed values:", changedValues);
      try {
        await axios.put(`/rest-api/core-team/${memberData._id}`,changedValues);
        setResponseDetails({status:true,message:'member data is updated'})
        setMemberData(memberInitialData);
      } catch (error) {
        console.error('member is not updated:',error);
        setResponseDetails({status:false,message:'member data is not updated...try again later'})
      }
    } else {
      try {
        await axios.post('/rest-api/core-team',data);
        setResponseDetails({status:true,message:'member is added to core team'})
        reset();
      } catch (error) {
        console.error('member is not registered as core team:',error);
        setResponseDetails({status:false,message:'member is not added to core team...try again later'})
      }
    }
  }
  useEffect(()=>{
    reset(memberData);
  },[memberData,reset]);
  const [selectedMember,setSelectedMember] = useState();
  useEffect(()=>{
    if(watch('user')){
      const user = registeredMembers.find(member=>member._id==watch('user'));
      console.log('selected meber data is:',user);
      setSelectedMember(user);
    }
  },[watch('user')])
  const clearForm =()=>{
    if (isEditing) {
      setMemberData(memberInitialData);
      setIsEditing(false);
      setTabValue('one');
    } else {
      reset();
    }
  }
  return (
    <Box className='my-[3%]'>
      {responseDetails.message && <Typography className={`mb-[2%] text-center ${responseDetails.status? 'text-green-500':'text-bgRed'}`}>{responseDetails.message}</Typography>}
      <Box component={'form'} onSubmit={handleSubmit(onFormSubmit)}>
        <Box className='flex gap-[3%]'>
          
          <Box className='w-[75%] m-auto'>
            <Box className='flex gap-[3%]'>
              <Box className='w-[20%]'>
                {watch('user')&&
                  <Image
                    src={`${storePath}/${selectedMember && selectedMember.profile_image}`}
                    width={950}
                    height={100}
                    className="w-full"
                    alt={selectedMember && selectedMember.member_name}
                  />
                }
              </Box>
              <Box className='w-[75%]'>
                <Box className="flex gap-[3%] mb-[2%]">
                  <Typography className='w-[40%] font-bold'>Select User</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="user-select-label">select Member</InputLabel>
                    <Select
                      size="small"
                      labelId="user-select-label"
                      label="Select Member"
                      value={watch('user') || ''}
                      {...register("user", { required: "member is required" })}
                      error={!!errors.user}
                      helperText={errors.user?.message}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      {
                        registeredMembers.map((member,index)=>{
                          return(
                            <MenuItem value={member._id} key={index}>{member.member_name}</MenuItem>
                          )
                        })
                      }
                    </Select>
                    {/* {errors.user && <Typography color="error">{errors.user.message}</Typography>} */}
                  </FormControl>
                </Box>
                <Box className="flex gap-[3%] mb-[2%]">
                  <Typography className='w-[40%] font-bold'>Assign Position</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="position-select-label">Assign Position</InputLabel>
                    <Select
                      size="small"
                      labelId="position-select-label"
                      label="Assign Position"
                      value={watch('position') || ''}
                      {...register("position", { required: "member is required" })}
                      error={!!errors.position}
                      helperText={errors.position?.message}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="founder">founder</MenuItem>
                      <MenuItem value="president">president</MenuItem>
                      <MenuItem value="vice-president">vice-president</MenuItem>
                      <MenuItem value="treasure">treasure</MenuItem>
                    </Select>
                    {/* {errors.position && <Typography color="error">{errors.position.message}</Typography>} */}
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
              <Typography className='w-[25%] font-bold'>Facebook Link</Typography>
              <TextField
                  fullWidth
                  size='small'
                  value={watch('facebook')}
                  {...register('facebook', {
                      // required: 'Title field should not be empty',
                      pattern: {
                        value: /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
                        message: "Enter a valid Facebook URL"
                      }
                  })}
                  error={!!errors.facebook}
                  helperText={errors.facebook?.message}
                  
              />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
              <Typography className='w-[25%] font-bold'>Instagram Link</Typography>
              <TextField
                  fullWidth
                  size='small'
                  value={watch('instagram')}
                  {...register('instagram', {
                      // required: 'Title field should not be empty',
                      pattern: {
                        value: /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/,
                        message: "Enter a valid Instagram URL"
                      }
                  })}
                  error={!!errors.instagram}
                  helperText={errors.instagram?.message}
                  
              />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
              <Typography className='w-[25%] font-bold'>Twitter Link</Typography>
              <TextField
                  fullWidth
                  size='small'
                  value={watch('twitter')}
                  {...register('twitter', {
                      // required: 'Title field should not be empty',
                      pattern: {
                        value: /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/?$/,
                        message: "Enter a valid Twitter URL"
                      }
                  })}
                  error={!!errors.twitter}
                  helperText={errors.twitter?.message}
              />

            </Box>
            <Box className='flex gap-[3%] justify-end'>
              <Button variant="contained" size="medium" onClick={()=>clearForm()}>cancel</Button>
             {isEditing ? <Button type="submit" variant='contained' disabled={!isDirty}>modify</Button>
              : <Button type="submit" variant='contained' disabled={!isDirty}>add</Button>}
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}

export default AddModifyMember