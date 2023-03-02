import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Receents from '../../static/recents/Receents';
import Categories from '../category/Categories';
import Hero from '../hero/Hero';
import Rightbar from '../rigthbar/Rightbar';

const Home = () => {
  return (
    <Box>
        <Hero />
        <Container>
            <Categories/>
            <hr />
           <Stack direction={'row'} spacing={2} mt={8}>
            <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                <Receents/>
            </Box>
            <Box flex={1}>
                <Rightbar />
            </Box>
           </Stack>
        </Container>
        
    </Box>
  )
}

export default Home