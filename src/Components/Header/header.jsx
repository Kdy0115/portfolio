import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';	


const theme = createTheme({
  palette: {
    background: {
      default: '#FCFCFC',
    },
    text: { primary: '#5F5F5F' },
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor:'#FCFCFC' }}>
          <Toolbar>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => {window.location.href = "#home"}}><Typography color='text.primary'>Home</Typography></Button>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => {window.location.href = "#about"}}><Typography color='text.primary'>About</Typography></Button>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => {window.location.href = "#skills"}}><Typography color='text.primary'>Skills</Typography></Button>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => {window.location.href = "#works"}}><Typography color='text.primary'>Works</Typography></Button>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => {window.location.href = "#contact"}}><Typography color='text.primary'>Contact</Typography></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
