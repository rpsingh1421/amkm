"use client"
import { Box, Button, Typography } from "@mui/material";
import Video from "./Video";
import { useRouter } from "next/navigation";

const Banner = () => {
  const navigate = useRouter();
  return (
    <Box className="relative">
        {/* <img src="/home-banner1.jpg"/> */}
        <Video/>
        <Box className="hidden bg-[#0000006e] h-[-webkit-fill-available] w-full absolute top-0 lg:flex">
            <Box className="w-3/4 m-auto text-center flex flex-col space-y-8">
              <Typography className="uppercase text-5xl text-yellow-500">Give a hand</Typography>
              <Typography className="uppercase text-5xl font-semibold text-white">to make the world better</Typography>
              <Typography className=" text-white text-base">
                  That don&apos;t lights. Blessed land spirit creature Boxide our made two
                  upon you&apos;ll dominion waters man second good you they&apos;re Boxided upon winged were replenish night
              </Typography>
              <Box className="flex justify-around mt-5 ">
                <Button variant="contained" className="bg-[#60bc0f] text-white" onClick={()=>navigate.push("/donate")}>Donate Now</Button>
                <Button className="bg-[#fdbb00] text-white" onClick={()=>navigate.push("/what-we-do")}>See Causes</Button>
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Banner
