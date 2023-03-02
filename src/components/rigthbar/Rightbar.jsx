import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box>
        <Typography align='center' bgcolor={'black'} color="white">
            Most Popular Post
        </Typography>
     <List sx={{ height:'100%',width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
     </List>
    </Box>
  )
}

export default Rightbar