import * as React from 'react';
import Container from '@mui/material/Container';
import CustomTypograhy from '../atoms/CustomTypography';
import UnderLine from '../atoms/UnderLine';

export default function PageHeadTitle(props) {
    const typography = props.typography;

    return (
        <Container>
            <CustomTypograhy variant='h3' align='center' typography={ props.typography } />
            <UnderLine />
        </Container>
    );
  };