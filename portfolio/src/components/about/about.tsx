import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import Navigation from '../navigation/navigation';
import AboutIntroduction from './aboutIntroduction';
import Career from './career';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
from { opacity: 0; transform: translateX(-100%); }
to { opacity: 1; transform: translateX(0); }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

const About = () => {
  return (
    <React.Fragment>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Navigation />
      </div>
      <Box w="100%" h="220vh" as={motion.div} animation={animation}>
        <AboutIntroduction />
        <Career />
      </Box>
    </React.Fragment>
  );
};

export default About;
