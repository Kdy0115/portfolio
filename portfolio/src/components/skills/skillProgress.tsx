import React from 'react';
import { Box, Text, Flex, Progress } from '@chakra-ui/react';

interface Props {
  skillName: string;
  score: number;
  color: string;
}

const CustomProgressBar: React.FC<Props> = ({ skillName, score, color }) => {
  return (
    <Box width="100%">
      <Flex width="100%" justifyContent="space-between">
        <Text fontWeight="bold" color="white" fontSize={[10, 14, 18, 20]}>
          {skillName}
        </Text>
        <Text fontWeight="bold" color="white" fontSize={[10, 14, 18, 20]}>
          {score}%
        </Text>
      </Flex>
      <Box width="100%">
        <Progress value={score} colorScheme={color} hasStripe isAnimated />
      </Box>
    </Box>
  );
};

export default CustomProgressBar;
