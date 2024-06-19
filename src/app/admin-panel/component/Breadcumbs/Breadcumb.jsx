import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const Breadcrumb = ({ pageName }) => {
  return (
    <Box className="flex justify-between py-[2%] items-center">
      <Typography className="font-semibold text-xl text-black capitalize">
        {pageName}
      </Typography>

      
      {pageName!='dashboard' && <Box className='flex gap-[5%]'>
        <Link className="font-semibold text-sm text-[#a7a2a2]" href="/admin-panel/dashboard"> Dashboard</Link>
        <Typography className="font-semibold text-sm text-[#a7a2a2]"> / </Typography>
        <Typography className="font-semibold text-[#18ace9] text-sm ">{pageName}</Typography>
        
      </Box>}
    </Box>
  );
};

export default Breadcrumb;