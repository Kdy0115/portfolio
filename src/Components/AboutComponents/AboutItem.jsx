import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ProfileItemInAbout(props) {
    const { title, content } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ mb:'10%', fontSize: '28px' }}>{ title }</Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ fontSize:'28px' }}>{ content }</Box>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};