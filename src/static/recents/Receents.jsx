import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from '../../components/card/Card'


const Receents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={1}>

        <Grid item>
            <Card/>
        </Grid>
        <Grid item xs={6} >
            <Card/>
        </Grid>
        <Grid item xs={6} >
            <Card/>
        </Grid>
        <Grid item xs={6} >
            <Card/>
        </Grid>
        <Grid item xs={6} >
            <Card/>
        </Grid>


        <Grid item  sx={{background:'green'}}>Item3</Grid>
      </Grid>
    </Box>
  )
}

export default Receents

