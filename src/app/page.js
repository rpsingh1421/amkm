import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import ImageGallery from "./components/ImageGallery";
import NgoProfile from "./components/NgoProfile";
import JoinUsSection from "./components/joinUs";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import Team from "./components/Team";

export default function Home() {
  return (
    <Box>
      <TopBar/>
      <Box className="sm:relative">
        {/* <Box className="sm:absolute top-0 w-full z-[1]">
          <NavBar/> 
        </Box> */}
      {/* =============Banner Section==========================*/}
        {/* <Banner/> */}
      {/* =============Banner Section==========================*/}
      </Box>
      {/* <NgoProfile/> */}
      {/* <ImageGallery/> */}
      {/* <Team/> */}
      {/* <JoinUsSection/> */}
      {/* <Footer/> */}
      <CopyRight/>
    </Box>
  );
}
export const metadata = {
   title: "Home||AMKM Official website",
}