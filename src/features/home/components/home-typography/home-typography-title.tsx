import { Typography, TypographyProps, styled } from '@mui/material';
import React from 'react';

const HomeTypographyTitle = styled((props: TypographyProps) => (
  <Typography color="primary.main" {...props} />
))(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1,
  fontSize: theme.typography.pxToRem(16),
}));

export default HomeTypographyTitle;
