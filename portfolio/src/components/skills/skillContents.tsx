import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Center,
  Fade,
} from '@chakra-ui/react';
import SkillTabPanel from './skillTabPanel';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { changeSkillTab } from '../../store/skillSlice';

const SkillContents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const aboutState = useSelector((state: RootState) => state.skill);

  const { currentSkillTabIndex, isShownTab } = aboutState;

  const dummyDataSet = {
    develop: [
      { score: 90, skillName: 'python' },
      { score: 70, skillName: 'Java' },
      { score: 60, skillName: 'C/C++' },
      { score: 85, skillName: 'JavaScript' },
      { score: 80, skillName: 'PHP' },
      { score: 80, skillName: 'ReactJS' },
      { score: 90, skillName: 'GAS' },
      { score: 80, skillName: 'Django' },
    ],
    cicd: [
      { score: 80, skillName: 'Docker/Compose' },
      { score: 70, skillName: 'githubActions' },
      { score: 60, skillName: 'Vagrant' },
      { score: 50, skillName: 'Terraform' },
      { score: 70, skillName: 'AWS' },
      { score: 50, skillName: 'Azure' },
      { score: 60, skillName: 'Linux' },
      { score: 70, skillName: 'Postgres' },
      { score: 60, skillName: 'MySQL' },
    ],
    others: [
      { score: 90, skillName: 'Slack' },
      { score: 70, skillName: 'Studio' },
      { score: 60, skillName: 'Figma' },
      { score: 80, skillName: 'GoogleWorkSpace' },
      { score: 70, skillName: 'Notion' },
      { score: 50, skillName: 'WordPress' },
    ],
  };

  return (
    <Box width="100%" mt={['10%', '7%', '5%', '3%']}>
      <Center width="100%" height="100%">
        <Tabs
          variant="soft-rounded"
          onChange={index => dispatch(changeSkillTab(index))}
          index={currentSkillTabIndex}
          width="100%"
        >
          <Center width="100%" height="100%">
            <TabList>
              <Tab>Develoop</Tab>
              <Tab>CI/CD Infra</Tab>
              <Tab>Others</Tab>
            </TabList>
          </Center>

          <TabPanels mt={['10%', '7%', '5%', '2%']}>
            <TabPanel width="100%">
              <Fade in={isShownTab}>
                <SkillTabPanel skills={dummyDataSet.develop} color="pink" />
              </Fade>
            </TabPanel>
            <TabPanel>
              <Fade in={isShownTab}>
                <SkillTabPanel skills={dummyDataSet.cicd} color="blue" />
              </Fade>
            </TabPanel>
            <TabPanel>
              <Fade in={isShownTab}>
                <SkillTabPanel skills={dummyDataSet.others} color="green" />
              </Fade>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Box>
  );
};

export default SkillContents;
