import { Box, Grid, Typography, styled } from '@mui/material';
import { FC } from 'react';
import AnimatedImages from './animated-images';
import Image from 'next/image';

const HomeLibrary: FC = () => {
  return (
    <ContainerBox bgcolor="myColor.main" className="w-full">
      <Box className="container py-16">
        <Typography className="title" component="span" color="primary.main">
          Thư viện
        </Typography>
        <Grid
          container
          spacing={{
            xs: 10,
            md: 2,
          }}
        >
          <Grid item xs={12} md={6}>
            <Image
              src="/home/img_lib_main.svg"
              alt=""
              width={466}
              height={379}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedImages />
          </Grid>
        </Grid>
      </Box>
    </ContainerBox>
  );
};

export default HomeLibrary;

const ContainerBox = styled(Box)(({ theme }) => ({
  '.title': {
    fontSize: theme.typography.pxToRem(39),
    fontWeight: 500,
  },
}));
