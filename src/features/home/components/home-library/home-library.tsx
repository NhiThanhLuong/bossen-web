import { CommonImage } from '@/components';
import { theme } from '@/theme/theme';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import AnimatedImages from './animated-images';

const HomeLibrary: FC = () => {
  return (
    <Box bgcolor="myColor.main" className="w-full" sx={styles.container}>
      <Box className="container py-16">
        <Typography
          className="title"
          component="span"
          color="primary.main"
          sx={styles.title}
        >
          Thư viện
        </Typography>
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
  title: {
    fontSize: theme.typography.pxToRem(39),
    fontWeight: 500,
  },
};
