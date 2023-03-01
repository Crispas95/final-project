import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import fourthPic from '../../static/fourthPic.jpg'
import React from 'react'

const Card = () => {
  return (
    <Box>
            <CardMedia 
            component='img' 
            alt="green iguana" 
            height='100%' 
            image={fourthPic}/>

            <CardContent>
                <Typography gutterBottom variant='body1' component='div' align='center' color="tomato">
                    PERFUMES
                </Typography>
                <Typography gutterBottom variant='h5' component='div' align='center'>
                    Wearing this will make everyone love you
                </Typography>
                <Typography gutterBottom variant='body2' component='div' align='center' color="tomato">
                    Its women love
                </Typography>
                <Typography variant='body2' color='text.secondary' align='center'>
                    Love is the most beautiful thing ever happen to humanity
                    with love people can stay a happy life.Good thing is 
                    Love is you can find love everywhere.
                </Typography>
            </CardContent>
    </Box>
  )
}

export default Card