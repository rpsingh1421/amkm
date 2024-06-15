"use client"
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const SocialLinks = () => {
    const navigate = useRouter();
  return (
    <Box className="flex justify-center gap-4">
        <Link href="https://www.facebook.com/amkmofficial/" target='block' className='relative w-10 '>
            <Image src='/social_media/facebook.png' className='relative' width={100} height={200} alt="facebook Logo" />
        </Link>
        <Link href=" https://www.instagram.com/amkmofficial/" target='block' className='relative w-10 '>
            <Image src='/social_media/instagram.png' className='relative' width={90} height={150} alt="Instagram Logo" />
        </Link>

        <Link href="https://www.twitter.com/amkmofficial/" target='block' className='relative w-10 '>
            <Image src='/social_media/twitter.png' className='relative' width={100} height={200} alt="twitteer Logo" />
        </Link>

        <Link href="https://www.youtube.com/channel/amkmofficial/" target='block' className='relative w-10 '>
            <Image src='/social_media/youtube.png' className='relative' width={100} height={200} alt="youtube Logo" />
        </Link>
    </Box>
  )
}

export default SocialLinks
