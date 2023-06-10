import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    myColor: Palette['primary'];
  }

  interface PaletteOptions {
    myColor: PaletteOptions['primary'] & {
      text: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#DE9C16',
    },
    myColor: {
      main: '#f4f4f4',
      text: '#767676',
    },
  },

  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  },
  // breakpoints: {
  //   values: {

  //   }
  // }
});
