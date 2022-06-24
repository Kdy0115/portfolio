import { createTheme } from '@mui/material/styles';
import AlefRegular from '../Alef-Regular.ttf';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(250, 255, 255, 0.625)',
    },
    text: { primary: '#5F5F5F' },
  },
  typography: {
    fontFamily: 'Alef',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Alef';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Alef'), local('Alef-Regular'), url(${AlefRegular}) format('Alef');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },  
});

export default theme;