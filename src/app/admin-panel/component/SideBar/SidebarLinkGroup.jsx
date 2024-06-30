"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, ListItem, Typography } from "@mui/material";

const SidebarLinkGroup = ({ children, open, handleClick, icon, label,activeCondition }) => {
  
  return (
    <>
      
      <ListItem>
        <Box className={`w-full cursor-pointer relative flex gap-2.5 items-center rounded-md px-4 py-2 font-medium hover:bg-gray-900 hover:text-white text-whiten hover:bg-slate-800 ${activeCondition && 'bg-slate-800'}`} onClick={handleClick}>
          {icon}
          <Typography>{label}</Typography>
          <Box className='flex-1 flex justify-end'>
            {!open ? <ExpandMore /> : <ExpandLess />}
          </Box>
        </Box>
      </ListItem>

      <Box className={`transition-max-height duration-300 ease-in-out overflow-hidden ${open ? 'max-h-screen' : 'max-h-0'}`}>
        {children}
      </Box>
    </>
  );
};

export default SidebarLinkGroup;
