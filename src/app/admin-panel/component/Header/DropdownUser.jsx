import defaultNodeApi from '@/lib/api/defaultNodeApi';
import { useAuth } from '@/context/AuthContext';
import { Contacts, ExpandLessOutlined, ExpandMore, Logout, Person, Person2, Settings } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, List, ListItem, Paper } from '@mui/material'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import LogoutProcessingDialog from '../LogoutProcessingDialog';

const api = defaultNodeApi(); // Get the Axios instance
const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const{authenticatedUser,setAuthenticatedUser,logout} = useAuth();
    const navigate = useRouter();
    const [loading,setLoading] = useState(false);
    
    const trigger = useRef(null);
    const dropdown = useRef(null);
    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
        if (!dropdown.current) return;
        if (
            !dropdownOpen ||
            dropdown.current.contains(target) ||
            trigger.current.contains(target)
        )
            return;
        setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
        if (!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });
    // on click logout button in dropdown
    const logoutHandler=async()=>{
      setLoading(true)
      try {
        const response = await axios.get('/rest-api/auth/sign-out');
        console.log(response);
        if(response.data.status){
          navigate.push('/account/login');
          logout();
          setLoading(false)
        }
        
      } catch (error) {
          console.log("error when logout:",error)
          setLoading(false)
      }
    }
  return (
    <>
    <Box className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white uppercase">
            {authenticatedUser && authenticatedUser.member_name}
            {/* Anurag singh */}
          </span>
          <span className="block text-xs dark:text-white uppercase">
            {authenticatedUser && authenticatedUser.role}
            {/* admin */}
            </span>
        </span>

        <span className="h-12 w-12 rounded-full">
          {/* <Image
            width={100}
            height={100}
            src={`https://store.amkmofficial.com/${authenticatedUser.profile_image}`}
            // src={`${storePath}/team/anurag_founder.jpeg`}
            className='rounded-full w-[10%]'
            alt="User"
            priority={true}
          /> */}
          <Avatar alt="User" src={`https://store.amkmofficial.com/${authenticatedUser && authenticatedUser.profile_image}`} />
        </span>

        <IconButton className='dark:bg-white'>{dropdownOpen?<ExpandLessOutlined/>:<ExpandMore/>}</IconButton>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <Paper ref={dropdown} className={`absolute mt-[10%] right-0 flex w-[15vw] flex-col rounded-sm border border-stroke bg-white shadow-default ${dropdownOpen === true ? "block" : "hidden"
        }`}
      >       
          <Link href="/admin-panel/profile" className="p-[3%] border-b hover:bg-black hover:text-white font-semibold text-base w-full" ><Person2 className='mr-[5%]'/>My Profile</Link>
        
        
          <Link href="#" className="p-[3%] border-b hover:bg-black hover:text-white font-semibold text-base w-full" ><Contacts className='mr-[5%]'/>My Contacts</Link>
      
       
          <Link href="#" className="p-[3%] border-b hover:bg-black hover:text-white font-semibold text-base w-full" ><Settings className='mr-[5%]'/>Account Settings</Link>
        
        <Button onClick={logoutHandler} variant='text' className="flex items-center gap-3 px-6 base-4 text-sm font-normal duration-300 ease-in-out hover:text-primary lg:text-base">
          <Logout/>
          Log Out
        </Button>
      </Paper>
      {/* <!-- Dropdown End --> */}
    </Box>
    {loading && <LogoutProcessingDialog/>}
    </>
  )
}

export default DropdownUser
