import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ParticlesBg from 'particles-bg'
import Album from '../Components/HomeComponents/HomeComponent';

export default function HomeContent() {
  return (
    <>
      <CssBaseline />
        <Container maxWidth="xl">
            <Album>
              <ParticlesBg type="polygon" bg={true} num={3}/>
            </Album>
        </Container>
    </>
  );
};