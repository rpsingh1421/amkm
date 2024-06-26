
import { Box, Fab } from "@mui/material";
import TopBar from "../topbar/TopBar";
import NavBar from "../navbar/NavBar";
import CopyRight from "../copyright/CopyRight";
import Footer from "../footer/Footer";
import { Favorite } from "@mui/icons-material";
import FabButton from "../FabButton/FabButton";

export default function MainLayout({children}) {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <Box className="">
        {/* <!-- ===== Topbar Start ===== --> */}
        <TopBar/>
        {/* <!-- ===== Topbar End ===== --> */}
        
        {/* <!-- ===== NavBar Start ===== --> */}
        <NavBar/>
        {/* <!-- ===== NavBar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <Box className="bg-[#f1f1f1]">
          

          {/* <!-- ===== Main Content Start ===== --> */}
          
            <Box className="">
              {children}
            </Box>
          
          {/* <!-- ===== Main Content End ===== --> */}
        </Box>
        {/* <!-- ===== Content Area End ===== --> */}
        
        {/* <!-- ===== Main Footer End ===== --> */}
        <Footer/>
        {/* <!-- ===== Main Footer End ===== --> */}

        {/* <!-- ===== CopyRight End ===== --> */}
        <CopyRight/>
        {/* <!-- ===== CopyRight End ===== --> */}
        <FabButton/>
      </Box>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
