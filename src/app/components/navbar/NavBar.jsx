// // "use client"

// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';
// // import { usePathname } from 'next/navigation';
// // import FavoriteIcon from '@mui/icons-material/Favorite';

// // const pages = ['Home','about','Contact Us','Projects','Media','Get Involved','Login'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// // function NavBar() {
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };
// //   const pathname = usePathname();
// //   console.log("pathname",pathname)
// //   return (
// //     <Box className='bg-transparent'>
// //         <Box className="flex justify-around">
// //           <Box className="flex ">
// //             {pages.map((page) => (
// //               <Button
// //                 key={page}
// //                 onClick={(handleCloseNavMenu)}
// //                 sx={{ my: 2, color: 'white', display: 'block' }}
// //                 variant={pathname.match(`/${page}`) &&'contained'}
// //               >
// //                 {page}
// //               </Button>
// //             ))}
// //             {/* <Button
// //                 onClick={handleOpenUserMenu}
// //                 sx={{ my: 2, color: 'white', display: 'block' }}
// //               >
// //                 Menu
// //               </Button>
// //               <Menu
// //               sx={{ mt: '45px' }}
// //               id="menu-appbar"
// //               anchorEl={anchorElUser}
// //               anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               open={Boolean(anchorElUser)}
// //               onClose={handleCloseUserMenu}
// //             >
// //               {settings.map((setting) => (
// //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// //                   <Typography textAlign="center">{setting}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu> */}
            
// //           </Box>
          
// //           <Box>
// //             <Button 
// //                 variant='contained'
// //                 startIcon={<FavoriteIcon/>}
// //                 color='error'
// //                 sx={{ my: 2 }}
// //             >
// //                 Donate Now
// //             </Button>
// //           </Box>
// //         </Box>
// //     </Box>
// //   );
// // }
// // export default NavBar;
// "use client";

// import * as React from 'react';
// import { usePathname } from 'next/navigation';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// const pages = ['Home', 'about', 'Contact Us', 'Projects', 'Media', 'Get Involved', 'Login'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const pathname = usePathname();
//   console.log("pathname", pathname);

//   return (
//     <div className="bg-transparent">
//       <div className="flex justify-around">
//         <div className="flex">
//           {pages.map((page) => (
//             <button
//               key={page}
//               onClick={handleCloseNavMenu}
//               className={`my-2 text-white block ${pathname.match(`/${page}`) ? 'bg-white text-black' : ''}`}
//             >
//               {page}
//             </button>
//           ))}
//           {/* User menu section if needed in the future */}
//           {/* <button
//             onClick={handleOpenUserMenu}
//             className="my-2 text-white block"
//           >
//             Menu
//           </button>
//           <div
//             className={`mt-12 ${Boolean(anchorElUser) ? 'block' : 'hidden'}`}
//             id="menu-appbar"
//             anchorEl={anchorElUser}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             {settings.map((setting) => (
//               <button key={setting} onClick={handleCloseUserMenu} className="text-center">
//                 {setting}
//               </button>
//             ))}
//           </div> */}
//         </div>

//         <div>
//           <button 
//             className="bg-red-500 text-white my-2 px-4 py-2 rounded flex items-center"
//           >
//             <FavoriteIcon className="mr-2" />
//             Donate Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
"use client"

import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePathname, useRouter } from 'next/navigation';
import navItems from '@/app/data/navItem.json'
import { IconButton, List, ListItem, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  // console.log(process.env.NEXT_PUBLIC_BASE_PATH)

  const navigate = useRouter();
  const handleCloseNavMenu = (link) => {
    // console.log(link?link:'nothing')
    navigate.push(link ? '/'+link:'/')
  };
  const pathname = usePathname(); 

  /* ===========mobile view navbar related======== */
    const [dropdown,setDropDown] = useState(false);
    const navRef = useRef(null);
    const navClickHandler = (link)=>{
        setDropDown(false);
        navigate.push(link ? '/'+link:'/');
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  /* ===========mobile view navbar related======== */
  return (
    <>
    <Box className={pathname=='/'?'bg-transparent':'bg-[#000000]'}>
      <Box className="hidden lg:flex justify-around">
        <Box className="flex">
          {navItems.map((item,index) => (
            <Button
              key={index}
              onClick={()=>handleCloseNavMenu(item.link)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              variant={pathname === `/${item.link.toLowerCase().replace(' ', '')}` ? 'contained' : 'text'}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box>
          <Button
            variant='contained'
            startIcon={<FavoriteIcon />}
            color='error'
            sx={{ my: 2 }}
            onClick={()=>navigate.push('/donate')}
          >
            Donate Now
          </Button>
        </Box>
      </Box>
    </Box>
    {/* ====================mobile view  navbar start================== */}
    <Box className="w-full flex justify-between pr-[5%] lg:hidden bg-white border-y-2">
      <IconButton onClick={()=>setDropDown(!dropdown)} size='large' className='p-0'><MenuIcon fontSize='inherit' className='border-2 p-[1%] bg-black text-white'/></IconButton>
      <Button
            variant='contained'
            startIcon={<FavoriteIcon />}
            color='error'
            // sx={{ my: 2 }}
            size='small'
            onClick={()=>navigate.push('/donate')}
          >
            Donate Now
          </Button>
    </Box>
    <Box className="relative">
      {dropdown && <Paper ref={navRef} className='bg-[#f1f1f1] w-4/5 absolute top-0 z-[1]'>
        <Box>
            <List>
              {
                navItems.map((item,index) => {
                  return(
                    <ListItem key={index} className={`border-b-2 border-white font-bold b
                    ${
                      pathname === '/'+item.link.toLowerCase().replace(' ', '')
                        && 'bg-[#979191] text-white'
                    }
                    `}
                    onClick={()=>navClickHandler(item.link)}
                    >
                      {item.label}
                    </ListItem>
                  )
                })
              }
            </List>
        </Box> 
      </Paper>}
    </Box>
    {/* ====================mobile view  navbar end================== */}
    </>
  );
}

export default NavBar;
