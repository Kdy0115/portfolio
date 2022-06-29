import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkillsProgressForApplication from './SkillsProgressForApplication';
import SkillsProgressForDevOps from './SkillsProgressForDevOps';
import SkillsProgressForUtilities from './SkillsProgressForUtilities';
import SkillsProgressForBusiness from './SkillsProgressForUtilitiesBusiness';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MediaQuery from "react-responsive";

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#FF9595',
        darker: '#053e85',
      },
      neutral: {
        main: '#5F5F5F',
        contrastText: '#fff',
      },
      text:{
        main:'#767676'
      }
    },
  });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SkillsTabComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ width: '80%', ml: '10%', mt: '-2%' }}>
          <Box sx={{ borderColor: 'divider' }}>
            <MediaQuery query="(min-width: 520px)">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" color='primary' centered='true' textColor='text.main'>
                <Tab label="Application" {...a11yProps(0)} sx={{ width: '25%', fontSize: '20px', color:'#767676' }} />
                <Tab label="DevOps" {...a11yProps(1)} sx={{ width: '25%', fontSize: '20px', color:'#767676' }} />
                <Tab label="Utilities" {...a11yProps(2)} sx={{ width: '25%', fontSize: '20px', color:'#767676' }} />
                <Tab label="Business" {...a11yProps(3)} sx={{ width: '25%', fontSize: '20px', color:'#767676' }} />
              </Tabs>
            </MediaQuery>
            <MediaQuery query="(max-width: 520px)">
              <Tabs value={value} scrollButtons={false} variant="scrollable" onChange={handleChange} aria-label="basic tabs example" color='primary' centered='true' textColor='text.main'>
                <Tab label="Application" {...a11yProps(0)} sx={{ fontSize: '12px', color:'#767676', width:'30%' }} />
                <Tab label="DevOps" {...a11yProps(1)} sx={{ fontSize: '12px', color:'#767676' ,width:'30%'}} />
                <Tab label="Utilities" {...a11yProps(2)} sx={{ fontSize: '12px', color:'#767676',width:'30%' }} />
                <Tab label="Business" {...a11yProps(3)} sx={{ fontSize: '12px', color:'#767676' ,width:'30%'}} />
              </Tabs>
            </MediaQuery>            
          </Box>
          <TabPanel value={value} index={0}>
            <SkillsProgressForApplication />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SkillsProgressForDevOps />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SkillsProgressForUtilities />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <SkillsProgressForBusiness />
          </TabPanel>
        </Box>
    </ThemeProvider>
  );
}
