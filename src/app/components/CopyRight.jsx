import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  return (
    <Box className="bg-black text-center py-5">
        <Typography className="m-0 text-gray-300 text-base">
            Copyright ©2024 All rights reserved | Developed by <Link href="http://rpsinghdev.com/" target="_blank">R.P.Singh</Link>
        </Typography>
    </Box>
  )
}

export default CopyRight
