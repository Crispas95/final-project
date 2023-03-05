import { Avatar, Box, Card, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import firstPic from '../../static/firstPic.jpg'
import secondPic from '../../static/secondPic.jpg'
import thirdPic from '../../static/thirdPic.jpg'

const Rightbar = () => {
  return (
    <Box>
        <Typography align='center' bgcolor={'black'} color="white">
            Most Popular Post
        </Typography>
     <List sx={{ height:'100%',width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height: 80, width: 80}} variant='squaire' alt='Remy sharp' src={firstPic}/>
        </ListItemAvatar>
        <ListItemText
          secondary= {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>

      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height: 80, width: 80}} variant='squaire' alt='Remy sharp' src={secondPic}/>
        </ListItemAvatar>
        <ListItemText
          secondary= {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>

      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height: 80, width: 80}} variant='squaire' alt='Remy sharp' src={thirdPic}/>
        </ListItemAvatar>
        <ListItemText
          secondary= {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>


      <Divider variant='insert' component={'li'}></Divider>
     </List>
     <Typography align='center' bgcolor={'black'} color="white">
        About Us
    </Typography>
    <Card cardImage={secondPic}/>
    </Box>
  )
}

export default Rightbar