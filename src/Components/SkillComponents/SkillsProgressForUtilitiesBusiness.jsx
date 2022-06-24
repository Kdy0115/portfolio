import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearWithValueLabel from './SkillProgressComponent';

export default function SkillsProgressForBusiness() {
  return (
    <>
        <Grid container spacing={3} sx={{ mt:'2%' }}>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="Excel" sup="80"  />
            </Grid>
            <Grid item xs={6} >
                <LinearWithValueLabel skill="PowerPoint" sup="70" />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="Word" sup="60" />
            </Grid>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="SpreadSheet" sup="75" />
            </Grid>
        </Grid>   
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="GoogleDocs" sup="60" />
            </Grid>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="GoogleSlides" sup="75" />
            </Grid>
        </Grid>      
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="GAS" sup="60" />
            </Grid>
            <Grid item xs={6}>
                <LinearWithValueLabel skill="test" sup="75" />
            </Grid>
        </Grid>              
    </>
  );
}
