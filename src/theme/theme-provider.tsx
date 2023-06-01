"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { theme } from "./theme";

interface PropsType {
  children?: ReactNode;
}

const ThemeProviderWrapper: FC<PropsType> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
