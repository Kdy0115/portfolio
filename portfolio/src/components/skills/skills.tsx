import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import SkillContents from './skillContents';
import Navigation from '../navigation/navigation';
import Title from '../utils/title';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
from { opacity: 0; transform: translateX(-100%); }
to { opacity: 1; transform: translateX(0); }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;
const Skills = () => {
  return (
    <React.Fragment>
      <Box w="100%" h="100vh">
        <Navigation />
        <Box as={motion.div} animation={animation}>
          <Title title="Skills" />
          <SkillContents />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Skills;
