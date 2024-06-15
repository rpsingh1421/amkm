// components/NgoProfile.js

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NgoProfile = () => {
  return (
    <Box className="py-12">
      <Box className="w-4/5 mx-auto">
        <Box className="sm:flex items-center gap-4">
          
          <Box className="sm:w-1/2">
            <Box className="joining-img rounded-xl">
            <Image 
                src="/project-work/p14_image.jpg"
                alt="about Image "
                className="w-full rounded-xl"
                width={500}
                height={500}
              />
            </Box>
          </Box>
          
          <Box className="sm:w-1/2">
            <Box className="join-details">
              <Box className="section-title mb-4 text-center">
                <Typography className='text-4xl font-bold'><span className='text-[#fc6539]'>&mdash;</span>About Us<span className='text-[#fc6539]'>&mdash;</span></Typography>
              </Box>
              <Typography className="mb-6">The main purpose is to support charitable activities. These activities can include but are not limited to, alleviating poverty, advancing education, promoting health, and supporting religious, scientific, or literary pursuits.</Typography>
              <Box className='text-end'>
                <Link underline='none' href="/about" className="btn about-btn bg-black text-white py-2 px-4 rounded">Know More</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NgoProfile;
