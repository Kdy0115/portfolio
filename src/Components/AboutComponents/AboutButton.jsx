import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function ProfileButtonInAbout() {

  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined">Carrer</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined">Certifications</Button>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};