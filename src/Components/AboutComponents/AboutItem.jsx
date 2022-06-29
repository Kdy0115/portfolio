import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ProfileItemInAbout(props) {
    const { title, content } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box sx={{ "@media screen and (min-width:520px)" : {mb:'10%', fontSize: '28px'},
                       "@media screen and (max-width:520px)" : {mb:'10%', fontSize: '16px'},
             }}>{ title }</Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ "@media screen and (min-width:520px)" : {fontSize:'28px'},
                       "@media screen and (max-width:520px)" : {fontSize:'16px'},
             }}>{ content }</Box>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};