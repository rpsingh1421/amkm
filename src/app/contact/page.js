import { Box, Button, Card, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import React from "react"
import NavBar from "../components/NavBar"
import MailForm from "./MailForm"
import SocialLinks from "./SocialLinks"
import TopBar from "../components/TopBar"
import CopyRight from "../components/CopyRight"
import Footer from "../components/Footer"
import MainLayout from "../components/Layout/MainLayout"
import Image from "next/image"
import GIveUsHand from "../components/GiveUsHand"

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const ContactPage = () => {
  return (
    <MainLayout>
      <Box className="relative h-fit">
      <Image width={2000} height={100} alt="banner" src={`${storePath}/amkm_page_banner.png`} className="w-full"/>
        <Typography className="text-center font-bold font-sans text-5xl text-white absolute left-0 right-0 m-auto top-[10%] sm:top-1/2">Contact Us</Typography>
      </Box>
      <Box className="lg:w-[80%] m-auto relative py-[2%]">
        <Paper className="sm:flex gap-4 justify-around p-[3%] mt-5 rounded-xl">
            <Box className="sm:w-1/2">
              <Box className="text-center font-bold text-5xl">
                <Typography component={"h2"} className="font-bold text-4xl">Get in Touch With Us</Typography>
              </Box>
              <Typography className="p-5 text-base font-semibold">We are the best NGO in Delhi NCR, India. We endeavor for holistic growth 
                of the Nation and its people. We are the best Social Organisation in Delhi NCR, India.
                Support by Donate to NGO or Donate in India. We Mainly focused on poverty in India, Child Development, Women Empowerment, Skill Development, Education for poor & Street Children, Health programs, Environment protection, Consumer awareness, Elderly care, Rural development programs, Slum development, 
                Donate for Livelihood, etc. Donate to India&apos;s best NGO and support development.
              </Typography>
              <SocialLinks/>
            </Box>
            {/* contactus form section */}
            <Card className="sm:w-1/2 p-5">
                <MailForm/>
            </Card>
        </Paper>          
      </Box>
      <Paper className="sm:flex gap-[2%] lg:w-[80%] m-auto">
        <Box className="sm:w-1/2 py-[2%]">
          <Box className="text-center font-bold text-5xl">
            <Typography className="font-bold text-4xl">Visit Us</Typography>
          </Box>
          <List>
            <ListItem className="font-bold justify-center">Up state address :- </ListItem>
            <ListItem className="font-normal justify-center">Village Purwa Devidas</ListItem>
            <ListItem className="font-normal justify-center">Post Sahar, Dist.-Auraiya</ListItem>
            <ListItem className="font-normal justify-center"> UttarPradesh, 206248</ListItem>
          </List>

        </Box>
        <Box className="sm:w-1/2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.659205312154!2d79.587062!3d26.7552493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399de38bcb1d24e9%3A0x7645f1cf47243ac4!2s%22Aao%20Milkar%20Karen%20Madad%22(Org.)!5e0!3m2!1sen!2sin!4v1717436129992!5m2!1sen!2sin" 
            height="250" 
            style={{border:"0",width:"100%"}} 
            // allowFullscreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </Box>
      </Paper>
      <GIveUsHand/>
    </MainLayout>
  )
}

export default ContactPage
export const metadata = {
  title: "Contact Us | Donation to AMKM org. Under 80G",
  description: "Please contact us if you like to be a part of our journey. In order to make a donation to AMKM under 80G you can visit our site.",
}