import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Flag from '../../public/eng-flag.png';
import Image from 'next/image';
import Logo from '/public/logo.png';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 3 }}>
  <AppBar position="relative" sx={{ boxShadow: "none", backgroundColor: "transparent", zIndex: 100 }}>
      <Toolbar sx={{ justifyContent: 'space-between',alignItems:"center" }} style={{height:"100px"}}>
      <Image src={Logo} height={240} width={240}></Image>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Typography sx={{ mx: 2 }}>How it works</Typography>
          <Typography sx={{ mx: 2 }}>FAQ</Typography>
          <Typography sx={{ mx: 2 }}>Testimonials</Typography>
          <Typography sx={{ mx: 2 }}>Trading</Typography>
          <Typography sx={{ mx: 2 }}>About Us</Typography>
          <Typography sx={{ mx: 2 }}>Academy</Typography>
        </Box>
  
        <Box sx={{
  display: 'flex', 
  alignItems: 'center',
}}>
          <Box sx={{
            borderRadius: "50%", 
            width: 40,
            height: 40,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background:"#2176B9",
            p:3.5,mr:2
          }}>
            <SearchIcon style={{ fontSize: 35 }}/>
          </Box>
          
          <Box sx={{
            borderRadius: "30px", 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background:"#2176B9",
            p:2
          }}>
            <Image src={Flag} alt="English Flag" width={24} height={24} />
            <Typography>EN-US</Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  
  
  
    
  )
}
