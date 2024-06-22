import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Stack gap={2}>
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />

    </Stack>
  )
}

export default Loading