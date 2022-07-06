import { createTheme } from '@mui/material/styles';

export var theme = createTheme({
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
      text:{
        main:'#767676',
        menuText: '#5F5F5F'
      },
      background: {
        default: '#FCFCFC',
      }
    },
  });