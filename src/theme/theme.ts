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

  interface BreakpointOverrides {
    '2xl': true;
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

  // typography: {
  //   fontFamily:
  //     '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  // },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
