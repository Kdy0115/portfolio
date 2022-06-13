import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {jsx, css} from '@emotion/react';
import ProfileItemInAbout from '../Components/AboutComponents/AboutItem';
import ProfileButtonInAbout from '../Components/AboutComponents/AboutButton';
import ProfileImageInAbout from '../Components/AboutComponents/AboutProfile';
import DetailProfileInAbout from '../Components/AboutComponents/AboutDetail';

export default function AboutContent() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: '100vh'}}>
          <Box sx={{ height: '15vh', ml:'0%', textAlign:'center', fontSize:'40px', mt:'3%' }} >About</Box>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box sx={{ height:'40vh', ml: '10%', bgcolor:'#EEEEEE' }}></Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={{ height:'50vh', ml: '10%'}}>
                  <ProfileItemInAbout title="Name" content="村上嵩大 (Murakami Kodai)" />
                  <ProfileItemInAbout title="Birthday" content="1996/01/31" />
                  <ProfileItemInAbout title="Education" content="M.S. in Computer Science" />
                  <ProfileItemInAbout title="Occupation" content="Software Developer" />
                  <ProfileButtonInAbout />
                </Box>
              </Grid>
            </Grid>
            <DetailProfileInAbout />
        </Box>
      </Container>
    </React.Fragment>
  );
};