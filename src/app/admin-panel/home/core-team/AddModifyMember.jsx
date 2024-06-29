"use client"

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const storePath = process.env.NEXT_PUBLIC_STORE;
const AddModifyMember = ({registeredMembers}) => {
  const memberInitialData={

  };
  const [memberData,setMemberData] = useState(memberInitialData);
  const { register, handleSubmit, formState: { errors, dirtyFields,isDirty }, clearErrors, reset,watch } = useForm({
    defaultValues: memberData // Set the initial values
  });

  const onFormSubmit =async()=>{

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

  return (
    <Box className='my-[3%]'>
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
                      // pattern: {
                      //     value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
                      //     message: "Please enter one or two words using only alphabets."
                      // }
                  })}
                  error={!!errors.facebook}
                  helperText={errors.facebook?.message}
                  disabled
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
                      // pattern: {
                      //     value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
                      //     message: "Please enter one or two words using only alphabets."
                      // }
                  })}
                  error={!!errors.instagram}
                  helperText={errors.instagram?.message}
                  disabled
              />

            </Box>
            <Box className="flex gap-[3%] mb-[2%]">
              <Typography className='w-[25%] font-bold'>Youtube Link</Typography>
              <TextField
                  fullWidth
                  size='small'
                  value={watch('youtube')}
                  {...register('youtube', {
                      // required: 'Title field should not be empty',
                      // pattern: {
                      //     value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
                      //     message: "Please enter one or two words using only alphabets."
                      // }
                  })}
                  error={!!errors.youtube}
                  helperText={errors.youtube?.message}
                  disabled
              />

            </Box>
            <Box className='flex gap-[3%] justify-end'>
              <Button type="submit" variant='contained'>modify</Button>
              <Button type="submit" variant='contained'>add</Button>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}

export default AddModifyMember