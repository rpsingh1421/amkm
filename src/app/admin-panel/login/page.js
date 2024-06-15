// src/app/admin-panel/login/page.js

import { Box, Paper, TextField } from '@mui/material'
import React from 'react'
import LoginEntry from './LoginEntry'
import MainLayout from '../../components/Layout/MainLayout'

const loginPage = () => {
  return (
    <MainLayout>
      <Box className="bg-cover bg-[url('/donatelogo.jpg')]">
        <Box className="flex gap-[5%] w-[40%] m-auto py-[5%]">           
            <Paper className=" w-full m-auto opacity-80">
               <Box>
                    <LoginEntry/>
                </Box>
            </Paper>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default loginPage
export const metadata = {
  title: "login Page",
};