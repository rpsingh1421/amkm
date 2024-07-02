"use client"

import NoRowsLayout from "@/app/components/Layout/NowRowsLayout";
import TableLoadingSkeleton from "@/app/components/Layout/TableLoadingSkeleton";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios"
import Image from "next/image";
import { useContext, useEffect, useState } from "react"
import Link from 'next/link'
import { CoreTeamContext } from "./CoreTeam";
import LoadingImageSkeleton from "@/app/gallery/LoadingImageSkeleton";

const storePath = process.env.NEXT_PUBLIC_STORE;
const MemberList = () => {
    const {setTabValue,isEditing,setIsEditing,registeredMembers,memberInitialData,memberData,setMemberData} = useContext(CoreTeamContext);
    const [isLoading,setIsLoading] = useState(true);
    const [teamList,setTeamList]= useState([]);
    const fetchCoreTeamList =async ()=>{
        try {
            const response = await axios.get('/rest-api/core-team');
            console.log("team list:",response)
            setTeamList(response.data.body);
            setIsLoading(false)
        } catch (error) {
            console.error('failed to fetch team list:',error);
            setIsLoading(false)
        }  
    }
    useEffect(()=>{
        fetchCoreTeamList();
    },[])

    const selectUserToModify=(teamInfo)=>{
        const user_id = teamInfo.user._id;
        teamInfo.user=user_id;
       console.log("selected core member to modify:",teamInfo);
       setMemberData(teamInfo);
       setTabValue('two');
       setIsEditing(true);
    }
  return (
    <Box className='flex gap-[1%] p-[3%]'>
        {isLoading && <LoadingImageSkeleton/>}
        {teamList.map((team,index)=>{
            return (
                <Box className='w-[24%] text-center' key={index}>
                    <Box>
                        <Image src={`${storePath}/${team.user.profile_image}`} alt={team.user.member_name} width={950} height={100} className="w-full"/>
                    </Box>
                    <Typography className='my-[1%] capitalize'>{team.position}</Typography>
                    <Box className="flex gap-[1%] justify-center">
                        <Link href={team.facebook} target="block" className="relative w-10 ">
                            <Image src={`${storePath}/gallery/social_media/facebook.png`} className="relative" width={30} height={30} alt="Instagram Logo" />
                        </Link>
                        <Link href={team.instagram} target="block" className="relative w-10 ">
                            <Image src={`${storePath}/gallery/social_media/instagram.png`} className="relative" width={30} height={30} alt="Instagram Logo" />
                        </Link>
                        <Link href={team.twitter} target="block" className="relative w-10 ">
                            <Image src={`${storePath}/gallery/social_media/twitter.png`} className="relative" width={30} height={30} alt="Instagram Logo" />
                        </Link>
                    </Box>
                    <Button onClick={()=>selectUserToModify(team)} variant="contained" size="small" className="rounded-full mt-[5%]">modify</Button>
                </Box>
            )
        })   
        }
        {teamList.length==0 && !isLoading && <NoRowsLayout/>}
    </Box>
  )
}

export default MemberList