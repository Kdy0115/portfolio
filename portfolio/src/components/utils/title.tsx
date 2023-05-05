import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

interface title {
  title: string;
}

const Title: React.FC<title> = ({ title }) => {
  return (
    <Box mt="3%">
      <Center>
        <Heading color="white">{title}</Heading>
      </Center>
    </Box>
  );
};

export default Title;
