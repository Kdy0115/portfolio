// Upper nav bar component by using chalk-ui

// Path: portfolio/src/components/navigation/navigation.tsx

import React from 'react';
import { Flex, Link, HStack, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionFlex = motion(Flex);

// nav items are four pages: about, skills, works, contact
const navItems = ['about', 'skills', 'works', 'contact'];

const homeUrl = process.env.PUBLIC_URL;
// nav bar component
const Navigation = () => {
  return (
    <Flex
      top="0"
      left="0"
      right="0"
      zIndex="1"
      // justifyContent="space-between"
      // alignItems="center"
      padding="1rem"
      bg="rgba(33,33,33,1)"
      width="100vw"
    >
      <Flex justifyContent="center" alignItems="center" width="100%">
        <HStack spacing={12}>
          <Center>
            <Link
              as={RouterLink}
              to="/about"
              key={0}
              // paddingRight="3rem"
              color="white"
            >
              About
            </Link>
          </Center>
          <Center>
            <Link
              as={RouterLink}
              to="/skills"
              key={1}
              // paddingRight="3rem"
              color="white"
            >
              Skills
            </Link>
          </Center>
          <Center>
            <Link
              as={RouterLink}
              to="/contact"
              key={2}
              // paddingRight="3rem"
              color="white"
            >
              Contact
            </Link>
          </Center>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navigation;
