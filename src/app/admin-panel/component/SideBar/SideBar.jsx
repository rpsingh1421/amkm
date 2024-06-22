"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Box, List, ListItem, Typography } from "@mui/material";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { Dashboard, ExpandLess, ExpandMore, Group, Home, Collections } from "@mui/icons-material";

const Sidebar = () => {
  const pathname = usePathname(); 
  console.log('pathname',pathname)
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <Box className="bg-slate-600 dark:bg-boxdark w-[20%]">
      <Link href="/admin-panel/dashboard" className="flex items-center gap-[5%] justify-center p-[5%] border-b-2 border-white">
        <Image
          width={100}
          height={100}
          src={"/aaomilkar_logo.png"}
          alt="Logo"
          priority={true}
          className="w-[35%]"
        />
        <Box className="text-center leading-4 w-[60%]">
          <Typography className="font-bold text-xl text-white">Admin Panel</Typography>
        </Box>
      </Link>

      <Box className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-[80%]">
        <Box className="mt-5 px-4 py-1 lg:mt-9 lg:px-6">
          <Box>
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              Menu
            </Typography>
            <ListItem>
              <Link
                href="/admin-panel/dashboard"
                className={` w-full group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800 ${pathname=='/admin-panel/dashboard' && 'bg-slate-800'}`}
              >
                <Dashboard/>
                Dashboard
              </Link>
            </ListItem>
          </Box>

          <Box>
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              PAGES
            </Typography>
            <List className="mb-6 flex flex-col gap-1.5">
              <ListItem>
                <Link
                  href="/admin-panel/home"
                  className={`w-full group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800 ${pathname=='/admin-panel/home' && 'bg-slate-800'}`}
                >
                  <Home/>
                  Home
                </Link>
              </ListItem>

              <SidebarLinkGroup
                open={openDropdown === "about"}
                handleClick={() => handleToggleDropdown("about")}
                icon={<Group />}
                label="About"
                activeCondition={
                  pathname === "/admin-panel/about"
                }
              >
                <List className="flex flex-col">
                  <ListItem>
                    <Link
                      href="#"
                      className={"w-full group relative flex items-center justify-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-meta-4"}
                    >
                      Banner
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      className={"w-full group relative flex items-center justify-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-meta-4"}
                    >
                      About Us
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      className={"w-full group relative flex items-center justify-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-meta-4"}
                    >
                      Image Gallery
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      className={"w-full group relative flex items-center justify-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-meta-4"}
                    >
                      Team
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="#"
                      className={"w-full group relative flex items-center justify-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-meta-4"}
                    >
                      Join Us
                    </Link>
                  </ListItem>
                </List>
              </SidebarLinkGroup>
             <ListItem>
                <Link
                  href="/admin-panel/gallery"
                  className={`w-full group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800 ${pathname=='/admin-panel/gallery' && 'bg-slate-800'}`}
                >
                  <Collections/>
                  Gallery
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
