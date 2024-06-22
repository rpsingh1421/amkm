import React from 'react'
import AdminLayout from '../component/Layouts/AdminLayout'
import Breadcrumb from '../component/Breadcumbs/Breadcumb'
import PersonalInformation from './PersonalInformation'
import { Box } from '@mui/material'
import PhotoRelated from './PhotoRelated'

const ProfilePage = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName={'profile'} />
      <Box className='flex gap-[2%]'>
        <PersonalInformation/>
        <PhotoRelated/>
      </Box>
    </AdminLayout>
  )
}

export default ProfilePage