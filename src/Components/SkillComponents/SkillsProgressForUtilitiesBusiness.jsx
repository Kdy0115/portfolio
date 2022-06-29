import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearWithValueLabel from './SkillProgressComponent';
import MediaQuery from "react-responsive";

export default function SkillsProgressForBusiness() {
  return (
    <>
        <MediaQuery query="(min-width: 520px)">
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
        </MediaQuery> 
        <MediaQuery query="(max-width: 520px)">
            <LinearWithValueLabel skill="Excel" sup="80"  />
            <LinearWithValueLabel skill="PowerPoint" sup="70" />
            <LinearWithValueLabel skill="Word" sup="60" />
            <LinearWithValueLabel skill="SpreadSheet" sup="75" />   
            <LinearWithValueLabel skill="GoogleDocs" sup="60" />
            <LinearWithValueLabel skill="GoogleSlides" sup="75" />      
            <LinearWithValueLabel skill="GAS" sup="60" />        
        </MediaQuery> 
    </>
  );
}
