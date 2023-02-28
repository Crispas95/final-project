import React from 'react'
import { Box, Stack, styled } from '@mui/material';
import { Typography } from '@mui/material';

const Categories = () => {
    const StyledBox =styled(Box)({
        height:200,
        width:'100%',
        cursor:'pointer'
    })
    const StyledTypography = styled(Typography)({
        margin:'25% 50px 25% 50px',
        background:'whight',
        opacity:'0.8'
    })
  return (
    <Box>
        <Stack direction={'row'} spacing={4}>
            <StyledBox>
                <StyledTypography align='center' variant='h3'>Girls</StyledTypography>
            </StyledBox>
            <StyledBox>
                <StyledTypography align='center' variant='h3'>Men</StyledTypography>
            </StyledBox>
            <StyledBox>
                <StyledTypography align='center' variant='h3'>Women</StyledTypography>
            </StyledBox>
            <StyledBox>Box1</StyledBox>
            <StyledBox>Box2</StyledBox>
            <StyledBox>Box3</StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories