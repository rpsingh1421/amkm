import React from 'react'
import AdminLayout from '../../component/Layouts/AdminLayout'
import Breadcrumb from '../../component/Breadcumbs/Breadcumb'
import Inbox from './Inbox'

const page = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName={'inbox'}/>
      <Inbox/>      
    </AdminLayout>
  )
}

export default page
