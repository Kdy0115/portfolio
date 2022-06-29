import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MediaQuery from "react-responsive";

export default function ContactWelcomeMessage() {
  return (
    <React.Fragment>
        <Box>
          <MediaQuery query="(min-width: 520px)">
            <Typography variant="h4" align="center" sx={{ color:'#767676'}}>Please fell free to contact me!</Typography>
          </MediaQuery>
          <MediaQuery query="(max-width: 520px)">
            <Typography variant="h6" align="center" sx={{ color:'#767676'}}>Please fell free to contact me!</Typography>
          </MediaQuery>          
        </Box>
    </React.Fragment>
  );
}
