import React from 'react';
import{AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navabr = () => {
    const StyledToolbar = styled(Toolbar)({
        dispaly: 'flex',
        justifyContent:'space-between'
    })
    const SocialBox= styled(Box)({
        display:'flex',
        gap:10,
    })
    const MenuBox= styled(Box)({
        display:'flex',
        gap:30,
    })

    const SearchBox =styled(Box)({
        display: "flex",
        gap:5,
    })

    const MenuItems = [
        {Name:'Home',Link:'/'},
        {Name:'Products',Link:'#'},
        {Name:'Portfolio',Link:'#'},
        {Name:'Blog',Link:'#'},
        {Name:'Contact Us',Link:'#'},
    ]

    const[open,setOpen]= useState(false);
  return (
    <div>
      <AppBar sx={{background:'#1127cf'}} position="static">
        <StyledToolbar>
            <SocialBox>
                <Box><FacebookIcon/></Box>
                <Box><InstagramIcon/></Box>
                <Box><TwitterIcon/></Box>
            </SocialBox>
            <MenuBox sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
                {MenuItems.map((item)=>(
                    <Typography sx={{cursor:'pointer', color:'#f2f3f5'}}>{item.Name}</Typography>
                ))}
            </MenuBox>

            <SearchBox>
                <InputBase sx={{color:"white"}} placeholder='search...'/>
                <MenuIcon sx={{color:'white',display:{xs:'block',sm:'block',md:'none'}}}
                onClick={()=>setOpen(!open)}/>
            </SearchBox>
        </StyledToolbar>

        <Menu
         id="demo-positioned-menu"
         aria-labelledby="demo-positioned-button"
         open={open}
         onClose ={()=>setOpen(!open)}
         anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350, height:'90vh'}}>
                {MenuItems.map((item)=>(
                    <MenuItem sx={{cursor:'pointer', color:'black'}}>{item.Name}</MenuItem>
                ))}
        </Box>
      </Menu>
      </AppBar>
    </div>
  )
}

export default Navabr
