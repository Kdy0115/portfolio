import * as React from 'react';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import HomeTitle from '../modules/HomeTitle';
import HomeBackground from '../atoms/HomeBackground';

export default function PageHome() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container  maxWidth="xl" sx={{ height:"100vh" }}>
            <HomeTitle  pt='20%'/>
            <HomeBackground />
          </Container>
      </React.Fragment>
    );
  };