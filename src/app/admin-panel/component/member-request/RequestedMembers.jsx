import { Box, Button, Paper, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MemberProfile from './MemberProfile';
import NoRowsLayout from '@/app/components/Layout/NowRowsLayout';
import TableLoadingSkeleton from '@/app/components/Layout/TableLoadingSkeleton';

const storePath = process.env.NEXT_PUBLIC_STORE;
const RequestedMembers = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [userData,setUserData] = useState([]);
  const [responseDetails,setResponseDetails] = useState({
    status:'',
    message:''
  })
  const [edit,setEdit] = useState(false);  
  const fetchData= async()=>{
   const response = await axios.get('/rest-api/team/fetch?type=in-active');
   console.log("pending user requests:",response);
   setUserData(response.data.body);
   setIsLoading(false);
  }
  const activateMember = async()=>{
    try {
        console.log("userId:",selectedMember._id)
        const response = await axios.get(`/rest-api/team/${selectedMember._id}?action=modify-status`);
        console.log("activation result:",response)
        setSelectedMember(response.data.body);
        fetchData();
        setResponseDetails({status:true,message:'user activated successfully'})
    } catch (error) {
        console.log("user activation error:",error)
        setResponseDetails({status:false,message:'user activation failed...'})
    }
  }
  const assignRole=async()=>{
    try {
      const updateResponse = await axios.put(`/rest-api/team/${selectedMember._id}`,selectedMember);
      setSelectedMember(updateResponse.data.body)
      setEdit(false);
      setResponseDetails({status:true,message:'role assigned successfully'});
    } catch (error) {
      console.log("user activation error:",error)
      setResponseDetails({status:false,message:'role assign failed...'})
    }
  }
  const onCloseDialog=()=>{
    setSelectedMember();
    setResponseDetails({status:'',message:''});
    fetchData();
  }
  useEffect(()=>{
    fetchData();
  },[]);
  /**===============selected member  */
  const [selectedMember,setSelectedMember] = useState();
  return (
    <>
    <Paper className='w-[60%] overflow-y-auto h-[fit] h-max-[80vh]'>
        <Box className='border-b border-borderGray p-[2%]'>
            <Typography className='font-semibold text-xl'>Pending Requests</Typography>
        </Box>
        <Box className=''>
          {userData.map((user,index)=>{
              const {_id,member_name,member_email,profile_image,state} = user
            return(
              index <7 && 
              <Box key={index} className='border-b border-t border-borderGray flex '>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{index+1}</Typography></Box>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Image width={40} height={40} src={`${storePath}/${profile_image}`} alt={member_name+'_image'}/></Box>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{member_name}</Typography></Box>
                  <Box className='flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{state}</Typography></Box>
                  <Box className=' flex-1 text-center p-[1%] border-r border-borderGray'><Typography>{member_email}</Typography></Box>
                  <Box className='flex items-center text-center p-[1%]'>
                    <Button onClick={()=>setSelectedMember(user)} size='small' variant='contained' color='primary'>View</Button>
                  </Box>
              </Box>
            )
          })}

        </Box>
        {isLoading ? <TableLoadingSkeleton/> : 
        userData.length ==0 && <Box className='text-center py-[10%]'><NoRowsLayout/></Box>}
        {!userData.length ==0 &&<Box className='flex justify-end px-[5%] my-[2%]'>
          <Button>Show More...</Button>
        </Box>}
    </Paper>
    {selectedMember && <MemberProfile responseDetails={responseDetails} setResponseDetails={setResponseDetails}  edit={edit} setEdit={setEdit} assignRole={assignRole} activateMember={activateMember} 
    selectedMember={selectedMember} setSelectedMember={setSelectedMember}
    onCloseDialog={onCloseDialog}/>}
    </>
  )
}

export default RequestedMembers