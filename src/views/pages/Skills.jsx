import * as React from 'react';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import PageHeadTitle from '../modules/PageHeadTitle';

export default function PageSkills() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container  maxWidth="xl" sx={{ height:"100vh", mt:'10%' }}>
            <PageHeadTitle typography='Skills'/>
          </Container>
      </React.Fragment>
    );
  };