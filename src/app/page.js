import { Box, Button, Fab, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import TopBar from "./components/topbar/TopBar";
import ImageGallery from "./components/home/ImageGallery";
import NgoProfile from "./components/home/NgoProfile";
import JoinUsSection from "./components/home/joinUs";
import Footer from "./components/footer/Footer";
import CopyRight from "./components/copyright/CopyRight";
import Team from "./components/home/Team";
import Banner from "./components/banner/Banner";
import Favorite from "@mui/icons-material/Favorite";
import FabButton from "./components/FabButton/FabButton";

export default function Home() {
  return (
    <Box>
      <TopBar/>
      <Box className="sm:relative">
        <Box className="sm:absolute top-0 w-full z-[1]">
          <NavBar/> 
        </Box>
      {/* =============Banner Section==========================*/}
        <Banner/>
      {/* =============Banner Section==========================*/}
      </Box>
      <NgoProfile/>
      <ImageGallery/>
      <Team/>
      <JoinUsSection/>
      
      <Footer/>
      <CopyRight/>
      <FabButton/>
    </Box>
  );
}
export const metadata = {
   title: "Home||AMKM Official website",
}