import { Search } from '@mui/icons-material'
import { Box, IconButton, List, Paper, TextField } from '@mui/material'
import React from 'react'
import DropdownUser from './DropdownUser'
import { useAuth } from '@/context/AuthContext'

const Header = () => {
  
  return (
    <Paper className="sticky top-0 z-999 w-full bg-white drop-shadow-1 ">
      <Box className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        
        {/* search tool */}
        <Box component={'form'} >
          <Box className="relative">
            <IconButton className="absolute left-0 top-1/2 -translate-y-1/2">
              <Search/>
            </IconButton>

            <TextField
              size='small'
              variant='outlined'
              placeholder="Type to search..."
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
            />
          </Box>
        </Box>
        <Box className="flex items-center gap-3 2xsm:gap-7">
          <List className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </List>

          {/* <!-- User Area --> */}
          <DropdownUser/>
          {/* <!-- User Area --> */}
        </Box>
        
      </Box>
    </Paper>
  )
}

export default Header
