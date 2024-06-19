import MainLayout from '@/app/components/Layout/MainLayout'
import { Box, Paper } from '@mui/material'
import React from 'react'
import SearchAccount from './SearchAccount';
import ForgotPassword from './ForgotPassword';

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const page = () => {
  return (
    <MainLayout>
      <ForgotPassword/>
    </MainLayout>
  )
}

export default page