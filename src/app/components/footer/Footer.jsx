import { Box, Button, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const storePath = process.env.NEXT_PUBLIC_STORE_URL;
  return (
    <Box className="bg-cover" style={{backgroundImage: `url(${storePath}/footer/footerbackground.jpg)`,width: '100%'}}
    >
      <Box className="w-full bg-[#000000eb] sm:flex gap-5 justify-around p-5">
        <Box className='hidden sm:block sm:w-2/5'>
            <Box className="flex gap-2">
                <Image width={"100"} height={"100"} src={`${storePath}/aaomilkar.jpeg`} alt='amkm_logo' className='w-14 rounded-full'/>
                <Typography className='font-bold text-white text-2xl self-center'>AAO MILKAR KAREN MADAD</Typography>
            </Box>
            <Box className="my-2">
                {/* <Typography className="text-white my-1 text-sm">PAN NO. AAGTA2801H</Typography> */}
                <Typography className="text-white my-1 text-sm">NITI AAYOG(NGO DARPAN) DL/2020/0266786</Typography>
                <Typography className="text-white my-1 text-sm">MSME UDYAM-DL-10-0005818</Typography>
                <Typography className="text-white my-1 text-sm">MINISTRY OF WOMEN AND CHILD DEVELOPMENT GOVT. OF INDIA DL_2020_0266786</Typography>
                <Typography className="text-white my-1 text-sm">12A NO- AAGTA2801HE20206 (PROVISIONAL)</Typography>
                <Typography className="text-white my-1 text-sm">80G NO- AAGTA2801HF20226 (PROVISIONAL)</Typography>
                <Typography className="text-white my-1 text-sm">MINISTRY OF SOCIAL JUSTICE (E-ANUDAN) DL/00022999</Typography>
            </Box>
        </Box>
        <Box className='sm:w-1/5'>
            <Typography className='font-bold text-white text-xl leading-[4rem]'>Centers</Typography>
            <List className="flex sm:flex-col ">
                <ListItem className="text-white">Bihar</ListItem>
                <ListItem className="text-white">Uttar Pradesh</ListItem>
                <ListItem className="text-white">New Delhi</ListItem> 
            </List>
        </Box>
        <Box className='sm:w-1/5'>
            <Typography className='font-bold text-white text-xl leading-[4rem]'>Quick Links</Typography>
            <Box className="flex flex-col ">
                {/* <Link href='/' className="text-white hidden sm:block ">home</Link>
                <Link href='/about' className="text-white my-2 hidden sm:block ">about Us</Link> */}
                <Link href='/contact' className="text-white my-2">Contact Us</Link>
                <Link href='/donate' className="text-white my-2">Donate</Link>
                <Link href='/privacy-policy' className="text-white my-2">Privacy Policy</Link>
                <Link href='/refund-policy' className="text-white my-2">Refund Policy</Link>
                <Link href='/terms-conditions' className="text-white my-2">Terms & Conditions</Link>
            </Box>
        </Box>
        <Box className='sm:w-1/5'>
            <Typography className='font-bold text-white text-xl leading-[4rem]'>Contact Us</Typography>
            <Box className="flex gap-2">
                <Image width={"100"} height={"100"} src='/social_media/location.png' className='w-[10%] h-1/2' alt='location_icon'/>
                <Box  className="text-white">
                    <Typography>Head Office</Typography>
                    <Typography>D-268 A, GALI NO.10, CHUNGI
                        NO.3, LAL KUWAN, NEW DELHI,110044</Typography>
                </Box>
            </Box>
            <Box className="flex my-2 gap-2">
                <Image width={"100"} height={"100"} src='/social_media/call.png' className='w-[10%] h-1/2' alt='call_icon'/> 
                <Box className="text-white">
                    <Typography>+91-8535030208</Typography>
                    <Typography>+91-9045848261</Typography>
                </Box>
            </Box>
            <Box className="flex my-2 gap-2">
                <Image width={"100"} height={"100"} src='/social_media/gmail.png' className='w-[10%]' alt='gmail_icon'/>
                <Box className="text-white">
                    <Typography>AMKMORG@GMAIL.COM</Typography>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
