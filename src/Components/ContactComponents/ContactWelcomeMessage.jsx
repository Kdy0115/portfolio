import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ContactWelcomeMessage() {
  return (
    <React.Fragment>
        <Box>
            <Typography variant="h4" align="center" sx={{ color:'#767676'}}>Please fell free to contact me!</Typography>
        </Box>
    </React.Fragment>
  );
}
