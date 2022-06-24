import * as React from 'react';
import Box from '@mui/material/Box';
import WorkCard from './WorkCard';
import Grid from '@mui/material/Grid';

export default function WorksCardsBox() {
  return (
    <React.Fragment>
        <Box sx={{ width: '80%', ml: '10%', mt: '-2%' }}>
            <Grid container spacing={4} sx={{ mt:'2%' }}>
                <Grid item xs={4}>
                    <WorkCard />
                </Grid>
                <Grid item xs={4} >
                    <WorkCard />
                </Grid>
                <Grid item xs={4} >
                    <WorkCard />
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt:'2%' }}>
                <Grid item xs={4}>
                    <WorkCard />
                </Grid>
                <Grid item xs={4} >
                    <WorkCard />
                </Grid>
                <Grid item xs={4} >
                    <WorkCard />
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  );
}
