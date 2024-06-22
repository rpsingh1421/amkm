"use client";
import React, { useState, ReactNode } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import AuthProvider from "@/context/AuthContext";

export default function AdminLayout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <Box className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <SideBar
          sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} 
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <Box className="bg-whiten dark:bg-boxdark-2  relative flex flex-1 flex-col overflow-y-hidden overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header
            // sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} 
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <Box className="overflow-y-scroll mb-[5%] overflow-x-hidden">
            <Box className="mx-auto max-w-screen-2xl p-4 py-0 md:p-6 md:py-0 2xl:p-10">
              {children}
            </Box>
          </Box>
          {/* <!-- ===== Main Content End ===== --> */}
          {/* <!-- ===== Main Footer End ===== --> */}
          <Footer/>
          {/* <!-- ===== Main Footer End ===== --> */}

        </Box>
        {/* <!-- ===== Content Area End ===== --> */}
      </Box>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
