
import React from 'react'
import AdminLayout from '../component/Layouts/AdminLayout'
import { Typography } from '@mui/material'
import Breadcrumb from '../component/Breadcumbs/Breadcumb'

const DashBoard = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName={'Dashboard'} />
    </AdminLayout>
  )
}

export default DashBoard
