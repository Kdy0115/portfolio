import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import Navigation from '../navigation/navigation';
import Title from '../utils/title';
import SnsContacts from './snsContacts';
import ContactMessage from './contactMessage';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
from { opacity: 0; transform: translateX(-100%); }
to { opacity: 1; transform: translateX(0); }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

const Contact = () => {
  const customTransition = {
    enter: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    exit: { duration: 1, ease: [0.4, 0, 0.2, 1] },
  };

  return (
    <React.Fragment>
      <Box w="100%" h="100vh">
        <Navigation />
        <Box as={motion.div} animation={animation}>
          <Title title="Contact" />
          <ContactMessage />
          <SnsContacts />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
