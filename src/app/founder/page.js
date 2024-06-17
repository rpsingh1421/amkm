import { Box, Typography } from "@mui/material"
import React from "react"
import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import CopyRight from "../components/CopyRight"
import MainLayout from "../components/Layout/MainLayout"
import Image from "next/image"

const storePath = process.env.NEXT_PUBLIC_STORE_URL;
const page = () => {
  return (
    <MainLayout>
      <Box>
        <Image width={1000} height={100} src={`${storePath}/founder_bg.png`} alt="founder_bg.png" className="w-full"/>
        <Box className="w-[90%] m-auto p-[3%]">
            <Box className="lg:flex gap-[2%]">
                <Box className="lg:w-1/3">
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag1.jpg`} alt="founder_anurag" className="rounded-xl w-full"/>
                </Box>
                <Box className="lg:w-2/3">
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">Anurag, a victim of paralysis since childhood, is determined to always take the children of his area forward, regardless of his illness. They want that as today their body is helpless due to a major disease and it is not becoming an obstacle in their work, in the same way poverty should not become an obstacle in the education of any child.</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">“Life never ends with some troubles” these words of his estranged friend changed Anurag&apos;s life. Anurag Singh (29 years), who lives in Devidas village of Sahar block, 35 km from Auraiya district headquarters, had a very difficult childhood, but Anurag did not let these difficulties become an obstacle in his life. Anurag was paralyzed six months after his birth.</Typography>    
                </Box>        
            </Box>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">These difficulties were momentary for Anurag. After fighting his illness and doing LLB, today with the help of his friends, he is providing free reading material to hundreds of children and also giving them free education by qualified teachers.</Typography>
            <Box className="lg:flex gap-[2%]">
                <Box className="lg:w-2/3">
                    <Typography component={"h2"} className="font-bold text-3xl">Anurag was suffering from Gliosis-</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">After being admitted in ICU for a month, Anurag&apos;s family members came to know that there is a disease called Gliosis. After fighting the pain of this disease for five whole years, Anurag started giving up on life. With the encouragement of family and friends, studies continued. At the age of 15, he started his career as a computer teacher. Two and a half thousand rupees started getting in this career and Anurag&apos;s studies continued. Everything had started going well. For some reason, he just went into depression, in which his closest friend Sumit helped him to get out.</Typography>
                    <Typography component={"h2"} className="mb-[2%] text-base font-bold">friend died in road accident</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">In these difficult moments ofAnurag, his best friend Sumit Gupta tried a lot to save him. Anurag&apos;s eyes fill with tears when he tells that he lost his friend in a road accident in the year 2014 but his words “Life never ends with some problems” this sentence gave me courage and I named “Come help together” Opened an institution of Open heart surgery done in November- 2018-</Typography>
                </Box>
                <Box className="sm:w-1/3">
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag2.jpg`} alt="founder_anurag" className="rounded-xl mt-[3%] w-full"/>
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag6.jpg`} alt="founder_anurag" className="rounded-xl mt-[3%] w-full"/>
                </Box>
            </Box>
            <Box className="lg:flex gap-[2%]">
                <Box className="sm:w-1/3">
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag3.jpg`} alt="founder_anurag" className="rounded-xl w-full"/>
                </Box>
                <Box className="lg:w-2/3">
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">When Anurag had just started running the institute, his mother had welcomed and supported his decision in the family, but in February 2017, his mother went into a coma and died untimely on 13 August 2017. Anurag&apos;s troubles did not stop here, he came to know of a serious heart ailment sometime after his mother&apos;s death. And despite getting treatment in many big hospitals of Delhi, he did not get rest, after which the doctors performed a very complicated open heart surgery in November 2018 to save his life. Most of the cost of his surgery was borne by his colleague Dr. Rajesh Anuragi in the institute and Professor Rajkumar of Delhi University.</Typography>
                </Box>
            </Box>
            <Box className="lg:flex gap-[2%]">
                <Box className="lg:w-2/3">
                    <Typography className="mb-[2%] text-3xl font-bold">Village girls hold cricket bats instead of rolling pin.</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">Anurag has also opened a sports academy for the girl students studying in his institute, in which girls play cricket. Anurag says that this task was not easy for him, he took the help of his girls team for this and explained to the girls&apos; families, then the girls went today. Net practice and plays cricket on the field.</Typography>
                </Box>
                <Box className="sm:w-1/3">
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag4.jpg`} alt="founder_anurag" className="rounded-xl w-full"/>
                </Box>
            </Box>
            <Typography className="mb-[2%] text-base font-semibold">The children of the institute go to the zoo and on picnics-</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">For the mental development of the children of the institute, Anurag takes them to the zoo and other places so that these children of the village can get new information. Two students of Anurag&apos;s institute, Aastha and Harsh Kumar have brought laurels to the institute by passing the entrance exams of &quot;Navodaya Vidyalaya&quot; and &quot;Sarvodaya Vidyalaya&quot;.</Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">The youngest of five brothers and two sisters, Anurag tells about himself, “I am the youngest of five brothers and two sisters. I was paralyzed six months after birth. Continuous treatment went on and I was fine at the age of one and a half years. The paralysis was cured, but from the age of three, I started having seizures. My studies never stopped even after the treatment. After passing the 10th examination in the year 2006, the mental balance was completely restored. messed with.&quot; He further explains, &quot;Along with studies, these children are made to do various activities from time to time, which make them happy, coming among these children, I forget my illness and feel happy.&quot; Invest money from your salary</Typography>
            <Box className="lg:flex gap-[2%]">
                <Box className="sm:w-1/3">
                    <Image width={300} height={100} src={`${storePath}/founder/founder_amkm_anurag5.jpg`} alt="founder_anurag" className="rounded-xl w-full"/>
                </Box>
                <Box className="lg:w-2/3">
                    <Typography className="font-bold text-3xl">&quot;Let&apos;s help together&quot; </Typography>
                    <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">The aim of this organization is to provide free education to poor children, women to know their rights, to work on all issues like save daughter. Anurag says that our four friends Rajesh Anuragi, Yash Kumar, Rohit Verma, and Bhanu Pratap Singh are fully involved in our campaign. I and all my friends do private jobs and this organization is being run with the money we earn from it. Children feel free to ask questions Poor children are getting free education Thousands of poor children have been taught free of cost in this institution till now, which are taught by fellow friends from nearby areas. Rohit Amit, Vikas, Abhishek, Vipin, Aman, Nooralam, Ashif Khan are mainly involved in these.</Typography>
                </Box>
            </Box>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]"> A team of girls is working to make women aware of their issue, which includes many rural girls like Anuradha, Kumari Vijaya, Ekta.</Typography>
            <Typography className="mb-[2%] text-base font-semibold text-[#9e9f9f]">Anurag happily tells that all our friends are supporting us a lot. They are not working for money, but working for the society. Anurag is very fond of journalism. He also writes many poems and articles. Anurag says, “Today I am very happy with my work.</Typography>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default page
export const metadata = {
    title: "About Founder",
    description: `"Aao Milkar karen Madad" (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well.Anurag, a victim of paralysis since childhood, is determined to always take the children of his area forward, regardless of his illness. `,
  }