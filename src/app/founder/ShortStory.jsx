"use client"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"

const ShortStory = () => {
    const navigate = useRouter();
  return (
    <Box className="sm:w-1/2 m-auto">
        <Typography className="leading-loose font-semibold">Anurag, a victim of paralysis since childhood, is determined to always take the children of his area forward, regardless of his illness. They want that as today their body is helpless due to a major disease and it is not becoming an obstacle in their work, in the same way poverty should not become an obstacle in the education of any child.</Typography>
        <Typography className="hidden lg:block leading-loose font-semibold">“Life never ends with some troubles” these words of his estranged friend changed Anurag&apos;s life. Anurag Singh (29 years), who lives in Devidas village of Sahar block, 35 km from Auraiya district headquarters, had a very difficult childhood, but Anurag did not let these difficulties become an obstacle in his life.</Typography>
        <Box className="text-center mb-[5%] sm:mb-0"> 
            <Button size="small" variant="contained" onClick={()=>navigate.push("/founder")}>Read More...</Button> 
        </Box>
    </Box>
  )
}

export default ShortStory
