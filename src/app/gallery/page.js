import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import GalleryBody from './GalleryBody'
import MainLayout from '../components/Layout/MainLayout'
import GIveUsHand from '../components/GiveUsHand'


const GalleryPage = () => {
  return (
    <MainLayout>
      <Box className="hidden bg-cover bg-[url('/gallery_banner1.png')] h-[30vh] sm:flex items-center"></Box>
      <GalleryBody/>
      <GIveUsHand/>
    </MainLayout>
  )
}

export default GalleryPage
export const metadata = {
  title: "Our Galleries | AMKM Social Activities and Integrations",
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.Check out the monthly events at AMKM, social activities, and other integrations.`,
}

 