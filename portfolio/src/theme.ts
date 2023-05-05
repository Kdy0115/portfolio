import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'blackAlpha.700',
      },
    },
  },
  fonts: {
    // heading: 'Montserrat, serif',
    // body: 'Montserrat, serif',
    heading: 'Raleway, serif',
    body: 'Raleway, serif',
  },
});
export default theme;
