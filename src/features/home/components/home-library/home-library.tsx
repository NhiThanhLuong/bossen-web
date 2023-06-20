import { CommonImage } from '@/components';
import { theme } from '@/theme/theme';
import { Box, Grid, SxProps, Theme } from '@mui/material';
import { FC } from 'react';
import HomeTypographyTitle from '../home-typography/home-typography-title';
import AnimatedImages from './animated-images';

const HomeLibrary: FC = () => {
  return (
    <Box bgcolor="myColor.main" className="w-full" sx={styles.container}>
      <Box className="container py-16">
        <HomeTypographyTitle>Thư viện</HomeTypographyTitle>
        <Grid
          container
          spacing={{
            xs: 2,
            md: 2,
          }}
        >
          <Grid item xs={12} md={6}>
            <CommonImage
              src="/home/img_lib_main.svg"
              alt=""
              width={466}
              height={379}
              priority
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedImages />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeLibrary;

const styles: Record<string, SxProps<Theme> | undefined> = {
  container: {
    paddingBottom: theme.typography.pxToRem(200),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.typography.pxToRem(280),
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.typography.pxToRem(80),
    },
  },
};
