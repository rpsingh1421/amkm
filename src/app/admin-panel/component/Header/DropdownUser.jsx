import defaultNodeApi from '@/app/rest-api/api/node-api/defaultNodeApi';
import { useAuth } from '@/context/AuthContext';
import { Contacts, ExpandMore, Logout, Person, Person2, Settings } from '@mui/icons-material'
import { Box, Button, List, ListItem } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const api = defaultNodeApi(); // Get the Axios instance
const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const{authenticatedUser,setAuthenticatedUser} = useAuth();
    const navigate = useRouter();

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
    // oon click logout button in dropdown
    const logoutHandler=async()=>{
      const response = await api.get('/rest-api/auth/logout');
      console.log(response);
      if(response.data.status){
        setAuthenticatedUser(null);
      }
    }
  return (
    <Box className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Anurag Singh
          </span>
          <span className="block text-xs">Admin</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/team/anurag_founder.jpeg"}
            className='rounded-full'
            alt="User"
          />
        </span>

        <ExpandMore/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <Box className={`absolute right-0 mt-4 flex w-fit flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <List className="flex flex-col border-b py-[1%] ">
          <ListItem className='border-b-2 hover:bg-gray-700 hover:text-white'>
            <Link
              href="#"
              className="flex items-center gap-3 text-base font-normal duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Person2/>
              My Profile
            </Link>
          </ListItem>
          <ListItem className='border-b-2 hover:bg-gray-700 hover:text-white'>
            <Link
              href="#"
              className="flex items-center gap-3 text-base font-normal duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Contacts/>
              My Contacts
            </Link>
          </ListItem>
          <ListItem className='border-b-2 hover:bg-gray-700 hover:text-white'>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-normal duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Settings/>
              Account Settings
            </Link>
          </ListItem>
        </List>
        <Button onClick={logoutHandler} className="flex items-center gap-3 px-6 base-4 text-sm font-normal duration-300 ease-in-out hover:text-primary lg:text-base">
          <Logout/>
          Log Out
        </Button>
      </Box>
      {/* <!-- Dropdown End --> */}
    </Box>
  )
}

export default DropdownUser
