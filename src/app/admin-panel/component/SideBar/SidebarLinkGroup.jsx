"use client";
import { ListItem } from "@mui/material";
import { ReactNode, useState } from "react";


const SidebarLinkGroup = ({
  children,
  activeCondition,
}) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <ListItem>{children(handleClick, open)}</ListItem>;
};

export default SidebarLinkGroup;
