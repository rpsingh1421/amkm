
import React from 'react'
import AdminLayout from '../component/Layouts/AdminLayout'
import Breadcrumb from '../component/Breadcumbs/Breadcumb'
import { Box } from '@mui/material'
import Gallery from './Gallery'

const page = () => {
  return (
    <AdminLayout>
        <Breadcrumb pageName={'Gallery'} />
        <Box>
            <Gallery/>
        </Box>
    </AdminLayout>
  )
}

export default page
