import React from 'react'
import { Box, Stack, styled } from '@mui/material';
import { Typography } from '@mui/material';
import firstPic from '../../static/firstPic.jpg'
import secondPic from '../../static/secondPic.jpg'
import thirdPic from '../../static/thirdPic.jpg'

const Categories = () => {
    const StyledBox =styled(Box)({
        height:200,
        width:'100%',
        cursor:'pointer',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        backgroundSize: 'cover'
    })
    const StyledTypography = styled(Typography)({
        margin:'25% 50px 25% 50px',
        background:'white',
        opacity:'0.8'
    })
  return (
    <Box>
        <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2, md: 4}} mt={5}>
            <StyledBox sx={{backgroundImage:`url(${firstPic})`}}>
                <StyledTypography align='center' variant='h3'>Girls</StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:`url(${secondPic})`}}>
                <StyledTypography align='center' variant='h3'>Men</StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:`url(${thirdPic})`}}>
                <StyledTypography align='center' variant='h3'>Women</StyledTypography>
            </StyledBox>
            {/* <StyledBox>Box1</StyledBox>
            <StyledBox>Box2</StyledBox>
            <StyledBox>Box3</StyledBox> */}
        </Stack>
    </Box>
  )
}

export default Categories