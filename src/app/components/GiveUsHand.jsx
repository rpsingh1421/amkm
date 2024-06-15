import { Box, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link"

const GIveUsHand =()=>{
    return(
        <Box className="bg-neutral-600 text-center py-[5%]">
            <Typography className="text-white font-bold text-3xl">GIVE US A HAND</Typography>
            <Typography className="text-white font-bold text-6xl my-[5%]">Support us and change the course of a child’s life today!</Typography>
            <Link href='/donate' className="p-[1%] border-2 rounded-full text-white font-bold"><FavoriteIcon className="mr-[1%]"/>DONATE</Link>
        </Box>
    )
}
export default GIveUsHand