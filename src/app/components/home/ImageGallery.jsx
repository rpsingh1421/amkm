"use client"

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import './imageGallery.scss'
import Link from "next/link";
import Image from "next/image";

const ImageGallery = () => {
  const storePath = process.env.NEXT_PUBLIC_STORE_URL;
  useEffect(() => {
    // Cards hover animation
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mouseover', () => {
        if (!card.hasAttribute('active')) {
          updateActiveCard(card);
        }
      });
    });

    function updateActiveCard(activeCard) {
      cards.forEach((card) => {
        if (card === activeCard) {
          card.setAttribute('active', '');
        } else {
          card.removeAttribute('active');
        }
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseover', () => {
          if (!card.hasAttribute('active')) {
            updateActiveCard(card);
          }
        });
      });
    }
  }, []);

  return (
    <Box className="hidden sm:block photo_gallery">
      <Typography className='text-4xl font-bold text-center pt-6'>&mdash; <span className='text-[#fc6539]'>Image Gallery</span>&mdash; </Typography>
      <Box className="gallery_section">
        <Box className="card">
          <Image width={400} height={300} src={`${storePath}/project-work/p90_image.jpg`} alt="photogallery1" className="card__image"/>
        </Box>
        <Box className="card">
          <Image width={400} height={300} src={`${storePath}/project-work/p92_image.jpg`} alt="photogallery2" className="card__image"/>
        </Box>
        <Box className="card" active="">
          <Image width={400} height={300} src={`${storePath}/image2.jpg`} alt="photogallery3" className="card__image"/>
        </Box>
        <Box className="card">
          <Image width={400} height={300} src={`${storePath}/project-work/p93_image.jpg`} alt="photogallery4" className="card__image"/>
        </Box>
        <Box className="card">
          <Image width={400} height={300} src={`${storePath}/project-work/p6_image.jpg`} alt="photogallery5" className="card__image"/>
        </Box>
      </Box>
      <Box className="flex justify-end pr-[5%]">
        <Link href="/gallery" className="rounded-full p-[1%] bg-orange-500 font-bold text-white">Show More...</Link>
      </Box>
    </Box>
  )
}

export default ImageGallery
