
import React from 'react'
import AdminLayout from '../component/Layouts/AdminLayout'
import { Typography } from '@mui/material'
import Breadcrumb from '../component/Breadcumbs/Breadcumb'
import Dashboard from './Dashboard'

const DashBoard = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName={'dashboard'} />
      <Dashboard/>
    </AdminLayout>
  )
}

export default DashBoard
