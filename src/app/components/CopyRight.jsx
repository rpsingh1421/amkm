import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  return (
    <Box className="bg-[#000000] text-center py-5">
        <Typography className="m-0 text-whiten text-base">
            Copyright ©2024 All rights reserved | Developed by <Link href="http://rpsinghdev.com/" target="_blank">R.P.Singh</Link>
        </Typography>
    </Box>
  )
}

export default CopyRight
