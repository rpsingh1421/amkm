"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Box, List, ListItem, TableFooter, Typography } from "@mui/material";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { BrowseGallery, Collections, ContactPage, Dashboard, ExpandLess, ExpandMore, Group, Handshake, Home, MultipleStop, NearMe, Payments, TableChart } from "@mui/icons-material";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );
  // close on click outside
  

  // close if the esc key is pressed
  

  return (
    <Box className="bg-slate-600 w-[20%]">
    
      {/* <!-- SIDEBAR HEADER --> */}
      {/* <Box className="flex items-center justify-between gap-2 px-6 py-[2%] lg:py-[2%] border-b-2 h-[20%]"> */}
        <Link href="/admin-panel" className="flex items-center gap-[5%] justify-center p-[5%] border-b-2 border-white">
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
            {/* <Typography className="font-bold text-2xl"></Typography> */}
          </Box>
        </Link>
      {/* </Box> */}
      {/* <!-- SIDEBAR HEADER --> */}

      {/* <!-- SIDEBAR Body --> */}
      <Box className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-[80%]">
        {/* <!-- Sidebar Menu --> */}
        <Box className="mt-5 px-4 py-1 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <Box>
            
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              Menu
            </Typography>
            <List className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <ListItem>
                <Link
                  href="/admin-panel/dashboard"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <Dashboard/>
                  Dashboard
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              PAGES
            </Typography>

            <List className="mb-6 flex flex-col gap-1.5">

              {/* <!-- Menu Item Home --> */}
              <ListItem>
                <Link
                  href="/admin-panel/home"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <Home/>
                  Home
                </Link>
              </ListItem>
              {/* <!-- Menu Item About --> */}
              <SidebarLinkGroup
                activeCondition={false
                  // pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="#"
                        className={"group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-gray-900 text-[#000000c7] hover:text-white"}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Group/>
                        About
                        <Box>
                          {!open?<ExpandMore/>:<ExpandLess/>}
                        </Box>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <Box
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <List className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Banner
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              About Us
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Image Gallery
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Team
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Join Us
                            </Link>
                          </ListItem>
                        </List>
                      </Box>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Contact Page --> */}
              <SidebarLinkGroup
                activeCondition={false
                  // pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="#"
                        className={"group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-gray-900 text-[#000000c7] hover:text-white"}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <ContactPage/>
                        Contact
                        <Box>
                          {!open?<ExpandMore/>:<ExpandLess/>}
                        </Box>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <Box
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <List className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Banner
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              About Us
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Image Gallery
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Team
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Join Us
                            </Link>
                          </ListItem>
                        </List>
                      </Box>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Gallery start --> */}
              <ListItem>
                <Link
                  href="/admin-panel/gallery"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <Collections/>
                  Gallery
                </Link>
              </ListItem>
              {/* <!-- Menu Item Gallery end --> */}
              {/* <!-- Menu Item Get Involved Page --> */}
              <SidebarLinkGroup
                activeCondition={false
                  // pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="#"
                        className={"group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-gray-900 text-[#000000c7] hover:text-white"}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Handshake/>
                        Get Involved
                        <Box>
                          {!open?<ExpandMore/>:<ExpandLess/>}
                        </Box>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <Box
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <List className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Add Images
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              Add Videos
                            </Link>
                          </ListItem>
                          
                        </List>
                      </Box>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Donation page --> */}
              <SidebarLinkGroup
                activeCondition={false
                  // pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="#"
                        className={"group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-gray-900 text-[#000000c7] hover:text-white"}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Payments/>
                        Donate
                        <Box>
                          {!open?<ExpandMore/>:<ExpandLess/>}
                        </Box>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <Box
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <List className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              successfull
                            </Link>
                          </ListItem>
                          <ListItem>
                            <Link
                              href="#"
                              className={"group relative flex items-center gap-2.5 rounded-md p-2 font-medium duration-300 ease-in-out hover:text-white text-gray-400 hover:bg-slate-800"}
                            >
                              failed
                            </Link>
                          </ListItem>
                        </List>
                      </Box>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>
            </List>
          </Box>
          {/* <!-- Settings --> */}
          <Box>
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              SETTINGS
            </Typography>

            <List className="mb-6 flex flex-col gap-1.5">
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <MultipleStop/>
                  Topbar
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <NearMe/>
                  Navbar
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <TableChart/>
                  Footer
                </Link>
              </ListItem>
            </List>
          </Box>
          {/* Accounts */}
          <Box>
            <Typography className="mb-4 ml-4 text-sm font-semibold ">
              Accounts
            </Typography>

            <List className="mb-6 flex flex-col gap-1.5">
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <MultipleStop/>
                  Admins
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <NearMe/>
                  Moderarors
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <NearMe/>
                  Volunteers
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  className={"group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:text-white text-[#000000c7] hover:bg-slate-800"}
                >
                  <TableChart/>
                  Donors
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
        {/* <!-- Sidebar Menu --> */}
      </Box>
      {/* <!-- SIDEBAR Body --> */}
    </Box>
  );
};

export default Sidebar;
