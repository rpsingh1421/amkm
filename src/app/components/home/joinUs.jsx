// components/JoinUsSection.js

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const JoinUsSection = () => {
  
  return (
    <Box className="py-12 bg-[#f1f1f1]">
      <Box className="sm:w-4/5 mx-auto sm:flex items-center gap-[5%]">
          <Box className="sm:w-[40%]">
            <Box className="">
              <Box className="mb-4 text-center sm:text-start">
                <Typography className='text-4xl font-bold'><span className='text-[#fc6539]'>&mdash;</span>Join With Us<span className='text-[#fc6539]'>&mdash;</span></Typography>
              </Box>
              <Typography className="mb-6 p-[3%] sm:p-0">
                The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way.
              </Typography>
              <Box className="text-center sm:text-start mb-[5%] sm:mb-0">
                <Link href="/volunteer" className="bg-blue-500 text-white py-2 px-4 rounded">
                  Join Now
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="sm:w-[60%] flex gap-[1%] h-max">
            <Box className="w-1/2 rounded-xl">
              <Image width={100} height={200} 
                src={`${storePath}/joinus/joinUs1.jpg`}
                alt="Joining Image 1"
                className="w-full h-full rounded-xl"
              />
            </Box>
            <Box className="w-1/2">
              <Image width={225} height={100} 
                src={`${storePath}/joinus/joinUs2.jpg`}
                alt="Joining Image 2"
                className="w-full h-full rounded-xl"
              />
            </Box>
          </Box>
        
      </Box>
    </Box>
  );
};

export default JoinUsSection;
