import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

function LinearProgressWithLabel(props) {
    const { value } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <ThemeProvider theme={theme}>
            <LinearProgress variant="determinate" {...props} sx={{ bgcolor:'white', height:'1.3vh'}} color='primary'/>
        </ThemeProvider>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize:'20px'}}>{`${Math.round(
          value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
    const { skill, sup } = props;
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if(progress < sup) {
                setProgress((prevProgress) => (prevProgress >= sup ? prevProgress : prevProgress + 10));
            }
        }, 50);
        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    return (
      <Box sx={{ "@media screen and (min-width:520px)" : {mb: '3%'},
                 "@media screen and (max-width:520px)" : {mb: '0%'}
       }}>
        <Typography 
          sx={{ "@media screen and (min-width:520px)" : {fontSize:'18px', color:'#767676'},
                "@media screen and (max-width:520px)" : {fontSize:'12px', color:'#767676'}
         }}>
          {skill}
        </Typography>
          <LinearProgressWithLabel value={progress} />
      </Box>
    );
}
