import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <Box className="bg-slate-600 text-center py-[0.5%] fixed bottom-0 w-full">
        <Typography className="m-0 text-gray-300 text-xs">
            Copyright ©2024 All rights reserved | made by <Link href="http://rpsinghdev.com/" target="_blank">R.P.Singh</Link>
        </Typography>
    </Box>
  )
}

export default Footer
