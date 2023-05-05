import React from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import CustomProgressBar from './skillProgress';

interface Skills {
  skillName: string;
  score: number;
}

interface SkillTabPanelProps {
  skills: Skills[];
  color: string;
}

const SkillTabPanel: React.FC<SkillTabPanelProps> = ({ skills, color }) => {
  const pairs = [];
  for (let i = 0; i < skills.length; i += 2) {
    if (i === skills.length - 1) {
      pairs.push([skills[i]]);
    } else {
      pairs.push([skills[i], skills[i + 1]]);
    }
  }

  return (
    <React.Fragment>
      {pairs.map((pair, index) => (
        <Center
          key={index}
          width="100%"
          height="100%"
          mb={['10%', '7%', '5%', '3%']}
        >
          <Flex width="70%" justify="space-between">
            {pair.map((data, dataIndex) => (
              <Box key={dataIndex} width="45%">
                <CustomProgressBar
                  score={data.score}
                  skillName={data.skillName}
                  color={color}
                />
              </Box>
            ))}
          </Flex>
        </Center>
      ))}
    </React.Fragment>
  );
};

export default SkillTabPanel;
