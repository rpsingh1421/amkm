"use client"

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import './imageGallery.scss'
import Link from "next/link";
import Image from "next/image";

const ImageGallery = () => {
      useEffect(()=>{
    // Cards hover animation
    const cards = document.querySelectorAll('.card');
    // console.log(cards);
    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
          if (!card.hasAttribute('active')) {
            updateActiveCard(card);
          }
        // alert("hello")
        });
      });
      function updateActiveCard(activeCard) {
        cards.forEach((card) => {
            if (card === activeCard) {
            card.setAttribute('active', '');
            } else {
            card.removeAttribute('active');
            }
        })
    }
},[])
  return (
    <Box className="hidden sm:block photo_gallery">
        {/* <Typography className="text-5xl text-black ">Image Gallery</Typography> */}
        <Typography className='text-4xl font-bold text-center pt-6'>&mdash; <span className='text-[#fc6539]'>Image Gallery</span>&mdash; </Typography>

        <Box className="gallery_section"> 
            <Box className="card">
                <Image width={"100"} height={"100"} src="/project-work/p90_image.jpg" alt="photogallery1" className="card__image"/>
            </Box>
            <Box className="card">
                <Image width={"100"} height={"100"} src="/project-work/p92_image.jpg" alt="photogallery2" className="card__image"/>                
            </Box>
            <Box className="card" active=''>
                <Image width={"100"} height={"100"} src="/image2.jpg" alt="photogallery3" className="card__image"/>      
            </Box>
            <Box className="card">
                <Image width={"100"} height={"100"} src="/project-work/p93_image.jpg" alt="photogallery4" className="card__image"/>
            </Box>
            <Box className="card">
                <Image width={"100"} height={"100"} src="/project-work/p6_image.jpg" alt="photogallery5" className="card__image"/>
            </Box>
        </Box>
        <Box className="flex justify-end pr-[5%]">
          <Link href="/gallery" className="rounded-full p-[1%] bg-orange-500 font-bold text-white">Show More...</Link>
        </Box>
    </Box>
  )
}

export default ImageGallery