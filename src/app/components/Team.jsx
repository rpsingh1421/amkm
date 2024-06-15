"use client"
import { ArrowRightAlt } from "@mui/icons-material"
import { Box, Button, Paper, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import FounderImage from "../../../public//team/anurag_founder.jpeg"

const Team = () => {
  const navigate = useRouter();
  return (
    <Box className="text-center my-[3%]">
          <Typography variant="h2" className="text-4xl font-bold">&mdash; <span className="text-[#fc6539]">Know Our Team</span>&mdash; </Typography>
        <Box className="w-[85%] m-auto p-5">
          <Typography>“ The best way to find yourself is to lose yourself in the service of others.” – <span className="text-gray-500 text-xs">Gandhi</span>  </Typography>
          <Typography className="mt-3">“ Volunteering is at the very core of being a human. No one has made it through life without someone else&apos;s help.” – <span className="text-gray-500 text-xs">Heather French Henry</span>.</Typography>
        </Box>
      <Box className="flex justify-around lg:w-3/4 m-auto gap-5">
        <Paper className="rounded-xl w-1/2 sm:w-1/4 py-[3%]">
          <Image src="/team/anurag_founder.jpeg" alt="founder_image"  className="w-1/2 m-auto rounded-full" width={"100"} height={"100"}/>
          <Box className="text-center">
            <Box className="my-[5%]">
              <Typography className="font-bold text-sm md:base lg:text-xl">Anurag Singh</Typography>
              <Typography className="text-gray-500 text-base">Founder</Typography>
            </Box>
            <Box className="flex gap-[1%] justify-center">
              <Link href="https://www.facebook.com/anurags091" target="block" className="relative w-10 ">
                  <Image src="/social_media/facebook.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
              <Link href="https://www.instagram.com/anurags091" target="block" className="relative w-10 ">
                  <Image src="/social_media/instagram.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>

              <Link href="https://www.x.com/anurags091" target="block" className="relative w-10 ">
                  <Image src="/social_media/twitter.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
            </Box>
          </Box>
        </Paper>
        <Paper className="rounded-xl w-1/2 sm:w-1/4 py-[3%]">
          <Image src="/team/RajeshAnuragi_president.jpeg" className="w-1/2 m-auto rounded-full" width={"100"} height={"100"} alt='amkm_president_image'/>
          <Box className="text-center">
            <Box className="my-[5%]">
              <Typography className="font-bold text-sm md:base lg:text-xl">Dr. Rajesh Anuragi</Typography>
              <Typography className="text-gray-500 text-base">President</Typography>
            </Box>
            <Box className="flex gap-[1%] justify-center">
              <Link href="https://www.facebook.com/dranuragirajesh" target="block" className="relative w-10 ">
                  <Image src="/social_media/facebook.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
              <Link href="https://www.instagram.com/anuragiofficial" target="block" className="relative w-10 ">
                  <Image src="/social_media/instagram.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>

              <Link href="https://www.x.com/anuragiofficial " target="block" className="relative w-10 ">
                  <Image src="/social_media/twitter.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
            </Box>
          </Box>
        </Paper>
        <Paper className="hidden sm:block rounded-xl w-1/2 sm:w-1/4 py-[3%]">
          <Image src="/team/rohit.jpeg" className="w-1/2 m-auto rounded-full" width={"100"} height={"100"} alt="Vice_President" />
          <Box className="text-center">
            <Box className="my-[5%]">
              <Typography className="font-bold text-sm md:base lg:text-xl">Rohit Verma</Typography>
              <Typography className="text-gray-500 text-base">Vice President </Typography>
            </Box>
            <Box className="flex gap-[1%] justify-center">
              <Link href="https://www.facebook.com/rohit.rajput.7161953" target="block" className="relative w-10 ">
                  <Image src="/social_media/facebook.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
              <Link href="https://www.instagram.com/rohithindu6086" target="block" className="relative w-10 ">
                  <Image src="/social_media/instagram.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>

              <Link href="https://x.com/Rohitverma99176" target="block" className="relative w-10 ">
                  <Image src="/social_media/twitter.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
            </Box> 
          </Box>
        </Paper>
        <Paper className="hidden sm:block rounded-xl w-1/2 sm:w-1/4 py-[3%]">
          <Image src="/team/YashKumar_treasure.jpeg" className="w-1/2 m-auto rounded-full" width={"100"} height={"100"} alt="treasure_image" />
          <Box className="text-center">
            <Box className="my-[5%]">
              <Typography className="font-bold text-sm md:base lg:text-xl">Yash Kumar</Typography>
              <Typography className="text-gray-500 text-base">Treasure</Typography>
            </Box>
            <Box className="flex gap-[1%] justify-center">
              <Link href="https://www.facebook.com/yash.kumar.7169" target="block" className="relative w-10 ">
                  <Image src="/social_media/facebook.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
              <Link href="https://www.instagram.com/94yashkumar" target="block" className="relative w-10 ">
                  <Image src="/social_media/instagram.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>

              <Link href="#" target="block" className="relative w-10 ">
                  <Image src="/social_media/twitter.png" className="relative" width={30} height={30} alt="Instagram Logo" />
              </Link>
            </Box> 
          </Box>
        </Paper>
        
      </Box>
      {/* ============== View all team button ============== */}
      <Box className="sm:hidden flex justify-center my-[2%]">
        <Button className="bg-[#fc6539]" variant="contained" size="large" endIcon={<ArrowRightAlt/>} onClick={()=>navigate.push("/leadership")}>View All</Button>
      </Box>
    </Box>
  )
} 

export default Team
