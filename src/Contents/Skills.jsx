import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SkillsTabComponent from '../Components/SkillComponents/SkillsTabComponent';
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in/lib/FadeIn';



export default function SkillsContent() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-150px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: '100vh'}}>
          <Box sx={{ "@media screen and (min-width:520px)" : {height: '15vh', ml:'0%', textAlign:'center', fontSize:'40px', mt:'3%', mb:'-4%', color:'#767676' },
                     "@media screen and (max-width:520px)" : {height: '8vh', ml:'0%', textAlign:'center', fontSize:'28px', mt:'3%', mb:'-4%', color:'#767676' },
          }} ref={ ref } >Skills</Box>
          <Box sx={{ "@media screen and (min-width:520px)" : {height:'0.5vh', width: '10%', bgcolor:'#FF9595', mb:'5%', ml:'45%'},
                     "@media screen and (max-width:520px)" : {height:'0.5vh', width: '10%', bgcolor:'#FF9595', width: '25%', ml:'37.5%', mb:'5%'},
          }} />
          {inView && (
            <FadeIn transitionDuration="1600">
              <SkillsTabComponent />
            </FadeIn>
          )}
        </Box>
      </Container>
    </>
  );
};