"use client"
import { Favorite } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const FabButton = () => {
    const navigate = useRouter()
    const pathName = usePathname();
    console.log(pathName)
  return (
    pathName != '/donate' && <Fab onClick={()=>navigate.push('/donate')} variant="extended" className="hidden sm:block bg-bgRed fixed top-[65%] right-0 text-white hover:text-bgRed" >
        <Favorite sx={{ mr: 1 }} color="inherit"/>
        Donate
    </Fab>
  )
}

export default FabButton