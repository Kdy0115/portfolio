import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomButton from '../molecules/CustomButton';
import { Container } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Container maxWidth="xl" >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor:'background.default' }}>
                <Toolbar>
                    <CustomButton flexGrow='1' href='#home' typography='Home' />
                    <CustomButton flexGrow='1' href='#About' typography='About' />
                    <CustomButton flexGrow='1' href='#Skills' typography='Skills' />
                    <CustomButton flexGrow='1' href='#Works' typography='Works' />
                    <CustomButton flexGrow='1' href='#Contact' typography='Contact' />
                </Toolbar>'
            </AppBar>
        </Box>
    </Container>
  );
}