import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { theme } from '../BaseStyle';
import { ThemeProvider } from '@mui/material/styles';

CustomTypograhy.defaultProps = {
    variant: 'body1',
    align: 'inherit',
    typography: 'Input text!',
    pt: '0px',
    pr: '0px',
    pb: '0px',
    pl: '0px',
    mt: '0px',
    mr: '0px',
    mb: '0px',
    ml: '0px'
  };

export default function CustomTypograhy(props) {
    const variant    = props.variant;
    const align      = props.align;
    const typography = props.typography;

    const pt = props.pt;
    const pr = props.pr;
    const pb = props.pb;
    const pl = props.pl;

    const mt = props.mt;
    const mr = props.mr;
    const mb = props.mb;
    const ml = props.ml;      
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Typography color='text.main' variant={ variant } align={ align } paragraph sx={{ pt:pt, pr:pr, pb:pb, pl:pl, mt:mt, mr:mr, mb:mb, ml:ml }}>{ typography }</Typography>
        </React.Fragment>
    );
};