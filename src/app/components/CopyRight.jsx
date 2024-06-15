import { Box, Typography } from '@mui/material'
import React from 'react'

const CopyRight = () => {
  return (
    <Box className="bg-black text-center py-5">
        <Typography className="m-0 text-gray-300 text-base">
            Copyright ©2024 All rights reserved | Developed by <a href="http://rpsinghdev.com/" target="_blank">R.P.Singh</a>
        </Typography>
    </Box>
  )
}

export default CopyRight
