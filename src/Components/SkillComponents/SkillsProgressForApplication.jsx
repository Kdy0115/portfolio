import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearWithValueLabel from './SkillProgressComponent';
import MediaQuery from "react-responsive";

export default function SkillsProgressForApplication() {
  return (
    <>
        <MediaQuery query="(min-width: 520px)">
            <Grid container spacing={3} sx={{ mt:'2%' }}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="HTML/CSS" sup="80"  />
                </Grid>
                <Grid item xs={6} >
                    <LinearWithValueLabel skill="JavaScript" sup="70" />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="ReactJS" sup="60" />
                </Grid>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="PHP" sup="75" />
                </Grid>
            </Grid>    
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Laravel" sup="55" />
                </Grid>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Python" sup="85" />
                </Grid>
            </Grid>    
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Django" sup="70" />
                </Grid>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="C/C++" sup="50" />
                </Grid>
            </Grid>  
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Java" sup="60" />
                </Grid>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Spring" sup="50" />
                </Grid>
            </Grid>          
        </MediaQuery>    
        <MediaQuery query="(max-width: 520px)">
            <LinearWithValueLabel skill="HTML/CSS" sup="80"  />
            <LinearWithValueLabel skill="JavaScript" sup="70" />
            <LinearWithValueLabel skill="ReactJS" sup="60" />
            <LinearWithValueLabel skill="PHP" sup="75" />
            <LinearWithValueLabel skill="Laravel" sup="55" />
            <LinearWithValueLabel skill="Python" sup="85" />
            <LinearWithValueLabel skill="Django" sup="70" />
            <LinearWithValueLabel skill="C/C++" sup="50" />
            <LinearWithValueLabel skill="Java" sup="60" />
            <LinearWithValueLabel skill="Spring" sup="50" />
        </MediaQuery>            
    </>
  );
}
