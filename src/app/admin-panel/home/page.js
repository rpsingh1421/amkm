// src/app/admin-panel/home/page.js

import React, { useContext } from 'react'
import AdminLayout from '../component/Layouts/AdminLayout'
import Breadcrumb from '../component/Breadcumbs/Breadcumb'
import { Box } from '@mui/material'
import Home from './Home'
// import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

const homePage = () => {
  // const  authenticatedUser  = useAuth();
  // if(!authenticatedUser){
  //   redirect('/account/login')
  // }
  return (
    <AdminLayout>
      <Breadcrumb pageName={'Home'} />
      {/* Banner related */}
      <Box>
        <Home/>
      </Box>
    </AdminLayout>
  )
}

export default homePage
