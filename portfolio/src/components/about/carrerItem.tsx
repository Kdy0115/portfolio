import React from 'react';
import { Text, Box, Center } from '@chakra-ui/react';

interface CareerItemProps {
  name: string;
  description: string;
}

const CareerItem: React.FC<CareerItemProps> = ({ name, description }) => {
  return (
    <Center>
      <Box
        h={['8vh', '10vh', '10vh', '10vh']}
        width={['85%', '80%', '75%', '70%']}
        mt={['5%', '3%', '2%', '0%']}
      >
        <Text fontSize={[12, 16, 18, 20]} fontFamily="Raleway" as="b">
          {name}
        </Text>
        <Text fontSize={[10, 10, 12, 14]} mt="1%" ml="2%" fontFamily="Raleway">
          {description}
        </Text>
      </Box>
    </Center>
  );
};

export default CareerItem;
