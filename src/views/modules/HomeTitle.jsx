import * as React from 'react';
import Container from '@mui/material/Container';
import CustomTypograhy from '../atoms/CustomTypography';

HomeTitle.defaultProps = {
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

export default function HomeTitle(props) {
    const pt = props.pt;
    const pr = props.pr;
    const pb = props.pb;
    const pl = props.pl;

    const mt = props.mt;
    const mr = props.mr;
    const mb = props.mb;
    const ml = props.ml;    
    
    return(
        <Container maxWidth="xl" sx={{ pt:pt, pr:pr, pb:pb, pl:pl, mt:mt, mr:mr, mb:mb, ml:ml }}>
            <CustomTypograhy variant='h3' align='center' typography='Kodai Murakami' />
            <CustomTypograhy variant='h4' align='center' typography='Software Developer'/>
        </Container>
    );
};