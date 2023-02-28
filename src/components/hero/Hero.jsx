import { Box, Typography } from '@mui/material'
import React from 'react'
import heroImage from '../../static/heroImage.jpg'

const Hero = () => {
  return (
    <Box>
        <Typography align='center' variant='h3' s
        x={{fontWeight: 900}}>Love<b style={{color:"red"}}>Blog</b></Typography>

        <Typography align='center' variant='body2' s
        x={{fontWeight: 100}}>
            We Make you look the better of you!
        </Typography>
        
        <Box 
        sx={{
            backgroundImage:`url(${heroImage})`,
            backgroundRepeat:'no-repeat',
            backgroundColor:'black',
            backgroundPosition:'center',
            backgroundSize:'cover',
            height:600,
            width:"100%",
            display:'flex',
            justifyContent:'center'}}>

            <Box sx={{width:{xs:'100%',sm:"50%",md:'40%'},padding:{xs:3,sm:2,md:20}}}>

                <Box sx={{background:'white',opacity:'0.7'}}>
                    <Typography variant='h6' color='tomato' align='center' pt={8}>
                        Trending Pictures
                    </Typography>
                    <Typography variant='h4' align='center'>
                        Life is boring without love.
                    </Typography>
                    <Typography variant='body1' align='center' pb={8}>
                        we love to see people falling in love
                    </Typography>
                </Box>
                </Box>
            </Box>
    </Box>
  )
}

export default Hero