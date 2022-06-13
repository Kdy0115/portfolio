import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ContactContent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#FFFFFF', height: '100vh'}}>
            あいうえお
            <Box sx={{ flexGrow: 1, height: '100vh' }}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Item>xs=8</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>xs=4</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>xs=4</Item>
                  </Grid>
                  <Grid item xs={8}>
                    <Item>xs=8</Item>
                  </Grid>
                </Grid>
            </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};