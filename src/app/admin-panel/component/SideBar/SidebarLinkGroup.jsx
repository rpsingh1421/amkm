"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, ListItem } from "@mui/material";

const SidebarLinkGroup = ({ children, open, handleClick, icon, label,activeCondition }) => {
  
  return (
    <>
      
      <ListItem>
        <Box className={`w-full cursor-pointer relative flex gap-2.5 items-center justify-between rounded-md px-4 py-2 font-medium hover:bg-gray-900 hover:text-white text-[#000000c7] hover:bg-slate-800 ${activeCondition && 'bg-slate-800'}`} onClick={handleClick}>
        {icon}
          {label}
          <Box>
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
