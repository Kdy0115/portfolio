import * as React from 'react';
import Button from '@mui/material/Button';
import CustomTypograhy from '../atoms/CustomTypography';

CustomButton.defaultProps = {
    flexGrow: 0,
    color: 'inherit',
    href: '#',
    typography: 'Input text!'
};

export default function CustomButton(props) {
    const flexGrow   = Number(props.flexGrow);
    const href       = props.href;
    const color      = props.color;
    const typography = props.typography;
  return (
        <Button color={ color } sx={{ flexGrow: flexGrow }} onClick={() => {window.location.href = href }}>
            <CustomTypograhy typography={ typography } />
        </Button>
  );
}
