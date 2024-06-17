import { Box, Paper, ListItem, Typography, Button } from "@mui/material"
import React from "react"
import NavBar from "../components/NavBar"
import TopBar from "../components/TopBar"
import CopyRight from "../components/CopyRight"
import Footer from "../components/Footer"
import ShortContent from "../story/ShortContent"
import ShortStory from "../founder/ShortStory"
import MainLayout from "../components/Layout/MainLayout"
import Image from "next/image"
import GIveUsHand from "../components/GiveUsHand"

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const About = () => {
  return (
    <MainLayout>
      <Box className="relative h-fit">
      <Image width={2000} height={100} alt="banner" src={`${storePath}/amkm_page_banner.png`} className="w-full"/>
        <Typography className="text-center font-bold font-sans text-5xl text-white absolute left-0 right-0 m-auto top-[10%] sm:top-1/2">About Us</Typography>
      </Box>
      <Paper className="my-[2%] py-[2%]">
        <Box className="section-title text-center">
          <Typography component={"h2"} className="text-2xl sm:text-4xl font-bold"><span className="text-[#fc6539]">&mdash;</span>AMKM PROFILE<span className="text-[#fc6539]">&mdash;</span></Typography>
        </Box>
        <Box className="w-[80%] m-auto relative">
           
            <Box className="sm:flex gap-4 justify-around p-2 mt-5">
              <Paper className="rounded-xl sm:w-1/3 p-0 lg:p-5 bg-[#f0f8ff99]">
                <ListItem className="text-sm">NAME OF THE TRUST “AAO MILKAR KAREN MADAD”(AMKM)</ListItem>
                <ListItem className="text-sm">HEAD ADDRESS- D-268 A, GALI NO.10, CHUNGI NO.3, LAL KUWAN, NEW DELHI,110044 (THIS IS NEW OFFICE ADDRESS)</ListItem>
                <ListItem className="text-sm">STATE OFFICE(U.P.) VILL. PURWA DEVIDAS, POST. SAHAR, DISTT. AURAIYA (U.P.), 206248</ListItem>
                <ListItem className="text-sm">MOBILE NO: +91 8535030208 +91 9045848261</ListItem>
                <ListItem className="text-sm">E-MAIL-AMKMORG@GMAIL.COM</ListItem>
              </Paper>
              <Paper className="rounded-xl sm:w-1/3 p-0 lg:p-5 bg-[#f0f8ff99]">
                <ListItem className="text-sm">ESTABLISHED IN 2015 (BEFORE REGISTRATION)</ListItem>
                <ListItem className="text-sm">ORGANIZATION STATUS A CHARITABLE TRUST</ListItem>
                <ListItem className="text-sm">LEVEL OF ACTION REGIONAL NATIONAL</ListItem>
                <ListItem className="text-sm">REGISTERED UNDER ACT INDIAN TRUST ACT,1882(ARTICLE,64)</ListItem>
                <ListItem className="text-sm">REGISTRATION NO. 1748/2017-2018 OF 14 NOV. 2017.</ListItem>
                <ListItem className="text-sm">PAN NO. AAGTA2801H</ListItem>
              </Paper>
              <Paper className="rounded-xl sm:w-1/3 p-0 lg:p-5 bg-[#f0f8ff99]">
                <ListItem className="text-sm">MSME UDYAM-DL-10-0005818</ListItem>
                <ListItem className="text-sm">MINISTRY OF WOMEN AND CHILD DEVELOPMENT GOVT. OF INDIA DL_2020_0266786</ListItem>
                <ListItem className="text-sm">12A NO- AAGTA2801HE20206 (PROVISIONAL)</ListItem>
                <ListItem className="text-sm">80G NO- AAGTA2801HF20226 (PROVISIONAL)</ListItem>
                <ListItem className="text-sm">MINISTRY OF SOCIAL JUSTICE (E-ANUDAN) DL/00022999</ListItem>
                <ListItem className="text-sm">NITI AAYOG(NGO DARPAN) DL/2020/0266786</ListItem>
              </Paper>
            </Box>
        </Box>
      </Paper>
      <Paper className="my-[2%] py-[2%]">
        <Box className="section-title text-center mb-[2%]">
          <Typography component={"h2"} className="text-2xl sm:text-4xl font-bold"><span className="text-[#fc6539]">&mdash;</span>THE AMKM&quot;S STORY<span className="text-[#fc6539]">&mdash;</span></Typography>
        </Box>
        <Box className="sm:flex w-[90%] gap-[2%] m-auto">
           <ShortContent/>         
          <Box className="sm:w-1/2">
            <Image width={1000} height={100} src={`${storePath}/aboutimg1.png`} alt="about_image" className="rounded-xl w-full"/>
          </Box>
        </Box>
      </Paper>
      <Paper className="sm:flex gap-[3%] p-[3%]">
        <Paper className="sm:w-1/3">
          <Image width={1000} height={100} src={`${storePath}/project-work/p61_image.png`} alt="vision_img" className="w-full h-1/3"/>
          <Box className="p-[3%]">
            <Typography className="font-bold text-3xl">VISION</Typography>
            <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">TO ACTIVELY CONTRIBUTE TO THE SOCIAL AND ECONOMIC DEVELOPMENT OF THE COMMUNITIES IN WHICH WE OPERATE AND TO BE AN ORGANIZATION THAT CONTI NUALLY RESPOND TO THE CHANGING SOCI AL REALITIES THROUGH THE DEVELOPMENT AND APPLICATION OF KNOWLEDGE, TOWARDS DEVELOPMENT OF SUSTAI NABLE SOCIETY THAT PROMOTE AND PROTECTS THE EQUALITY, SOCIAL JUSTICE AND HUMAN RI GHTS FOR ALL.</Typography>
          </Box>
        </Paper>
         <Paper className="sm:w-1/3">
          <Image width={1000} height={100} src={`${storePath}/project-work/p77_image.png`} alt="" className="w-full h-1/3"/>
          <Box className="p-[3%]">
            <Typography className="font-bold text-3xl">MISSION</Typography>
            <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">THE MAIN FUNCTION OF THIS ORGANIZATION IS TO HELP THE POORS, EDUCATE THEM AND MARGINED CHILDREN ETC. SO FAR, HUNDREDS OF POOR CHI LDREN HAVE BEEN EDUCATING WITH THE HARD WORK OF THIS ORGANIZATION. IN RECENT DAYS, THE ORGANIZATION HAS OPENED AN ACADEMY IN VILL. - DEVIDAS,POST-SAHAR,DISTT. - AURAIYA(U. P. ),206248. ABOUT 150 CHI LDREN ARE STUDYI NG.</Typography>
          </Box>
        </Paper>
         <Paper className="sm:w-1/3">
          <Image width={1000} height={100} src={`${storePath}/project-work/p93_image.jpg`} alt="" className="w-full h-1/3"/>
          <Box className="p-[3%]">
            <Typography className="font-bold text-3xl">BELIEVES</Typography>
            <Box>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">In the potential power of the Poor and Rural people to participate actively in development initiatives within their community.</Typography>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">In equal opportunity for man and women</Typography>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">in society irrespective of class, age, ethnic, culture or religion.</Typography>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">All Human Rights for all.</Typography>
              {/* <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">In freedom of expression, movement and choice by man and women alike.</Typography>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">In social harmony free from communal bias.</Typography>
              <Typography className="p-[2%] text-sm font-semibold text-[#9e9f9f]">Freedom for work, education and development.</Typography> */}
            </Box>
          </Box>
        </Paper>
      </Paper>
      <Paper className="hidden sm:block my-[2%] py-[2%] pb-0">
        <Box className="section-title text-center mb-[2%]">
          <Typography component={"h2"} className="text-2xl sm:text-4xl font-bold"><span className="text-[#fc6539]">&mdash;</span>Aim & Objects<span className="text-[#fc6539]">&mdash;</span></Typography>
        </Box>
        <Box className="flex w-[90%] gap-[2%] m-auto">
          <Box className="w-1/2">
            <Image width={500} height={100} src={`${storePath}/project-work/p49_image.png`} alt="p49_image" className="rounded-xl h-[85%] w-full"/>
          </Box>
          <Box className="w-1/2">
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">We want to build a school. In this school, poor and destitute children can study free of cost and build their bright future.</Typography>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">The school will have a state-of-the-art computer lab in which children will be able to take all kinds of information related to computers.</Typography>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">The school will have a large playground. In which children will be taught to play cricket, volleyball, football, badminton, tennis, hockey etc. So that they can have high level of mental development.</Typography>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">The school will also have extra classes for music, dancing and acting. In order to improve the skills of the children studying.</Typography>
            <Typography className="hidden lg:block mb-[2%] text-base font-semibold text-[#9e9f9f]">School building will promote environmental protection as a whole. More and more trees will be planted around the building. Green grass will be planted in all parts of the school.</Typography>
            <Typography className="hidden lg:block mb-[2%] text-base font-semibold text-[#9e9f9f]">The school will be absolutely free for poor and helpless children. Students will get everything free of cost.</Typography>
            <Typography className="hidden lg:block mb-[2%] text-base font-semibold text-[#9e9f9f]">School bus will also be arranged for students coming from far away.</Typography>
            <Typography className="hidden lg:block mb-[2%] text-base font-semibold text-[#9e9f9f]">To promote international understanding, peace and tolerance through education, science, culture and mass communication.</Typography>
            <Typography className="hidden lg:block mb-[2%] text-base font-semibold text-[#9e9f9f]">Organize program in the aims of social work, human resource management, Health system, culture and support the Research program.</Typography>
          </Box>         
        </Box>
      </Paper>
      <Paper className="my-[2%] py-[2%]">
        <Box className="section-title text-center mb-[2%]">
          <Typography component={"h2"} className="text-2xl sm:text-4xl font-bold"><span className="text-[#fc6539]">&mdash;</span>FOUNDER STORY<span className="text-[#fc6539]">&mdash;</span></Typography>
        </Box>
        <Box className="sm:flex w-[90%] gap-[2%] m-auto">
          <ShortStory/>         
          <Box className="sm:w-1/2">
            <Image width={500} height={100} src={`${storePath}/project-work/p19_image.png`} alt="about_image" className="rounded-xl w-full"/>
          </Box>
        </Box>
      </Paper>
      <GIveUsHand/>
      {/* <Image width={2000} height={100} alt="about_amkm" className="w-full" src="/project-work/p4_image.jpg"/> */}
    </MainLayout>
  )
}

export default About
export const metadata = {
  title: "About",
  description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well. Anurag Singh started this organization with his friends`
}
