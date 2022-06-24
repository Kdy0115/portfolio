import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#5F5F5F'
      },
      text: {
        main: '#5F5F5F'
      },
    },
  });

export default function ContactShareLink() {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ml:'22.5%', mt:'-4%'}}>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Button href="#text-buttons">
                            <FacebookIcon fontSize="large"/>
                        </Button>
                        <Typography sx={{ ml:'-1%'}} color='text.main'>FaceBook</Typography>
                    </Grid> 
                    <Grid item xs={4} >
                        <Button href="#text-buttons">
                            <InstagramIcon fontSize="large"/>
                        </Button>
                        <Typography sx={{ ml:'-1%'}} color='text.main'>Instagram</Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Button>
                            <GitHubIcon fontSize="large"/>
                        </Button>
                        <Typography sx={{ ml:'2%'}} color='text.main'>GitHub</Typography>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
  }