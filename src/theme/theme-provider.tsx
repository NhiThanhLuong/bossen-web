'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
import { theme } from './theme';

interface PropsType {
  children?: ReactNode;
}

const ThemeProviderWrapper: FC<PropsType> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <ParallaxProvider> */}
      <CssBaseline />
      {children}
      {/* </ParallaxProvider> */}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
