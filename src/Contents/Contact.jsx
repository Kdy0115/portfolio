import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ContactWelcomeMessage from '../Components/ContactComponents/ContactWelcomeMessage';
import ContactForm from '../Components/ContactComponents/ContactForm';
import ContactShareLink from '../Components/ContactComponents/ContactShareLink';
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#B8FFD4',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

export default function ContactContent() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-150px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <>
      <CssBaseline />
      {/* <ThemeProvider theme={theme}> */}
        <Container maxWidth="xl">
          <Box sx={{ height: '100vh'}}>
            <Box sx={{ height: '15vh', ml:'0%', textAlign:'center', fontSize:'40px', mt:'3%', mb:'-4%', color:'#767676' }} ref={ ref } >Contact</Box>
            <Box sx={{ height:'0.5vh', width: '10%', mb:'3%', ml:'45%', bgcolor:'#99FFC2'}} />
            {inView && (
              <FadeIn transitionDuration="1600">
                <ContactWelcomeMessage />
                <ContactForm />
                <ContactShareLink />
              </FadeIn>
            )}
          </Box>
        </Container>
      {/* </ThemeProvider> */}
    </>
  );
};