import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import MediaQuery from "react-responsive";


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#95BFFF',
      darker: '#053e85',
    },
    secondary: {
      main: '#5F5F5F'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    text:{
      main:'#8E8A8A'
    }
  },
});

export default function AboutCarrerModal(props) {
  const { year, content, detail } = props;

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MediaQuery query="(min-width: 520px)">
          <Timeline sx={{ ml:'-50%' }}>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h6"><strong>{ year }</strong></Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ height:'3vh', width:'3vh'}} />
                <TimelineConnector sx={{ height:'20vh' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6"><strong>{ content }</strong></Typography>
                <Typography><strong>{ detail }</strong></Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </MediaQuery>
        <MediaQuery query="(max-width: 520px)">
          <Timeline sx={{ ml:'-90%' }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ height:'2vh', width:'2vh'}} />
                <TimelineConnector sx={{ height:'20vh' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ fontSize:'14px' }}><strong>{ year }</strong></Typography>
                <Typography sx={{ fontSize:'15sx'}}><strong>{ content }</strong></Typography>
                <Typography sx={{ fontSize:'12px'}}><strong>{ detail }</strong></Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </MediaQuery>
      </ThemeProvider>
    </React.Fragment>
  );
}