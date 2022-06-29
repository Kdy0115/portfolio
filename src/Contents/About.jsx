import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileItemInAbout from '../Components/AboutComponents/AboutItem';
import ProfileButtonInAbout from '../Components/AboutComponents/AboutButton';
import DetailProfileInAbout from '../Components/AboutComponents/AboutDetail';
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Typography } from '@mui/material';
import ProfileImageInAbout from '../Components/AboutComponents/AboutProfile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MediaQuery from "react-responsive";

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#95BFFF',
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

export default function AboutContent() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-150px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
        <Box sx={{  "@media screen and (min-width:520px)" : {height: '100vh'},
                    "@media screen and (max-width:520px)" : {height: '125vh'},
        }}>
          <Box sx={{ "@media screen and (min-width:520px)" : {height: '15vh', ml:'0%', textAlign:'center', mt:'3%', mb:'-4%'},
                     "@media screen and (max-width:520px)" : {height: '8vh', ml:'0%', textAlign:'center', mt:'3%', mb:'-4%'},
          }} ref={ ref } >
            <Typography sx={{ fontSize:'40px', "@media screen and (max-width:520px)": {fontSize: "28px", },}} color='text.main'>About</Typography>
          </Box>
          <Box sx={{ "@media screen and (min-width:520px)" : {height:'0.5vh', width: '10%', bgcolor:'#95CCFF', mb:'3%', ml:'45%'},
                     "@media screen and (max-width:520px)": { height:'0.5vh', width: '25%', bgcolor:'#95CCFF', ml:'37.5%', mb:'5%' },
                    }} />
          {inView && (
            <FadeIn transitionDuration="1600">
              <MediaQuery query="(min-width: 520px)">
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <Box sx={{ height:'40vh', ml: '25%'}}><ProfileImageInAbout /></Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box sx={{ height:'50vh', ml: '10%'}} color='text.main'>
                      <ProfileItemInAbout title="Name" content="村上 嵩大 (Murakami Kodai)" />
                      <ProfileItemInAbout title="Birthday" content="1996/01/31" />
                      <ProfileItemInAbout title="Education" content="M.S. in Computer Science" />
                      <ProfileItemInAbout title="Occupation" content="Software Developer" />
                      <ProfileButtonInAbout />
                    </Box>
                  </Grid>
                </Grid>
                <DetailProfileInAbout />
              </MediaQuery>

              <MediaQuery query="(max-width: 520px)">
                  <Box sx={{ height:'25%', mb:'3%' }}><ProfileImageInAbout /></Box>
                    <Box sx={{ height:'30vh', ml:'10%'}} color='text.main'>
                      <ProfileItemInAbout title="Name" content="村上 嵩大 (Murakami Kodai)" />
                      <ProfileItemInAbout title="Birthday" content="1996/01/31" />
                      <ProfileItemInAbout title="Education" content="M.S. in Computer Science" />
                      <ProfileItemInAbout title="Occupation" content="Software Developer" />
                      <ProfileButtonInAbout />
                    </Box>
                <DetailProfileInAbout />
              </MediaQuery>              
            </FadeIn>
          )}
        </Box>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
};