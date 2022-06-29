import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MediaQuery from "react-responsive";

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#FF9595',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      text:{
        main:'#767676'
      }
    },
  });

export default function Album(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div style={{backgroundColor:"transparent", position:"relative"}}>
          <MediaQuery query="(max-width: 520px)">
            <Container maxWidth="sm" sx={{ height:'100vh'}}>
                <ThemeProvider theme={theme}>
                    <Typography sx={{ pt:'60%'}} variant="h4" align="center" color="text.main" paragraph>Kodai Murakami</Typography>
                    <Typography variant="h5" align="center" color="text.main" paragraph>Software Developer</Typography>
                </ThemeProvider>
            </Container>            
            {props.children}
          </MediaQuery>
          <MediaQuery query="(min-width: 521px)">
            <Container maxWidth="sm" sx={{ height:'100vh'}}>
                <ThemeProvider theme={theme}>
                    <Typography sx={{ pt:'60%'}} variant="h3" align="center" color="text.main" paragraph>Kodai Murakami</Typography>
                    <Typography variant="h4" align="center" color="text.main" paragraph>Software Developer</Typography>
                </ThemeProvider>
            </Container>
            {props.children}
          </MediaQuery>
          </div>
        </main>
      </React.Fragment>
    );
  }