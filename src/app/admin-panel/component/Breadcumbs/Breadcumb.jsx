import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const Breadcrumb = ({ pageName }) => {
  return (
    <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Typography className="text-title-md2 font-semibold text-black">
        {pageName}
      </Typography>

      <Box className="w-fit">
        <List className="flex">
          <ListItem className="w-fit flex-none pr-0">
            <Link className="font-normal text-sm text-[#a7a2a2]" href="/admin-panel">
              Dashboard / 
            </Link>
          </ListItem>
          <ListItem className="font-normal text-[#18ace9] text-sm w-fit flex-none px-0">{pageName}</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Breadcrumb;