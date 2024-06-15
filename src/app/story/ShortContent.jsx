"use client"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"

const ShortContent = () => {
  const navigate = useRouter();
  return (
    <Box className="sm:w-1/2 m-auto">
        <Typography className="leading-loose font-semibold">&quot;Aao Milkar karen Madad&quot; (Organization) is a non-governmental organization that works to impart education to poor children as well as work on issues of women as well. Anurag Singh started this organization with his friends. In the early days of the organization, a lot of people were involved, which gradually decreased.</Typography>
        <Typography className="hidden lg:block leading-loose font-semibold">But on February 28, 2016, when the institution got the state-level registration, then there were his friends Rohit Verma, Yash Kumar, Aryan Kushwaha, Bhanu Pratap Singh, etc. which are yet to come. Later in the institution, the founder of Anuragi band Dr. Rajesh Anuragi joined and he got the institute registered with the founder of the organization on 15/11/2017 nationally. At present, Dr. Rajesh is the national president of Organization.</Typography>
            {/* <Typography>Founder of the organization, Anurag Singh, along with his friend Rohit, started the village conscious in the early days and made the people aware and turned their children into education and enrolled them in schools. When awareness campaign was going on in village- village, only then the founder of the institution got information about the problems of women, after which a women cell team was formed to listen to the problems of women in the presence of all the members. Whose national president Smriti Prabha, was vice-president, K.Anuradha, who is still in office. These people expanded their team and added other girls,which are mainly active members like Vijaya, Anju, Shivangi, Sudha, Kajal, Pooja, Ekta etc. The institution was constantly working to make people conscious about going to village-village. Which continued to go through the problem ofmoney to continue.</Typography> */}
        <Box className="text-center mb-[5%] sm:mb-0"> 
            <Button size="small" variant="contained" onClick={()=>navigate.push("/story")}>Read More...</Button> 
        </Box>
    </Box>
  )
}

export default ShortContent
