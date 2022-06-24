import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SkillsTabComponent from '../Components/SkillComponents/SkillsTabComponent';
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in/lib/FadeIn';
import WorksCardsBox from '../Components/WorksComponents/WorksCardsBox';
import BasicPagination from '../Components/WorksComponents/WorkPage';



export default function WorksContent() {
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
          <Box sx={{ height: '15vh', ml:'0%', textAlign:'center', fontSize:'40px', mt:'3%', mb:'-4%', color:'#767676' }} ref={ ref } >Works</Box>
          <Box sx={{ height:'0.5vh', width: '10%', bgcolor:'#FFE895', mb:'3%', ml:'45%'}} />
          {inView && (
            <FadeIn transitionDuration="1600">
              <WorksCardsBox />
              <BasicPagination />
            </FadeIn>
          )}
        </Box>
      </Container>
    </>
  );
};