import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearWithValueLabel from './SkillProgressComponent';
import MediaQuery from "react-responsive";

export default function SkillsProgressForDevOps() {
  return (
    <>
        <MediaQuery query="(min-width: 520px)">
            <Grid container spacing={3} sx={{ mt:'2%' }}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Docker" sup="80"  />
                </Grid>
                <Grid item xs={6} >
                    <LinearWithValueLabel skill="Docker Compose" sup="70" />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Git" sup="60" />
                </Grid>
                <Grid item xs={6}>
                    <LinearWithValueLabel skill="Vagrant" sup="75" />
                </Grid>
            </Grid>        
        </MediaQuery>   
        <MediaQuery query="(max-width: 520px)">
            <LinearWithValueLabel skill="Docker" sup="80"  />
            <LinearWithValueLabel skill="Docker Compose" sup="70" />
            <LinearWithValueLabel skill="Git" sup="60" />
            <LinearWithValueLabel skill="Vagrant" sup="75" />
        </MediaQuery>                            
    </>
  );
}
