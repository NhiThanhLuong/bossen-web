import { theme } from '@/theme/theme';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

const HomeNew: FC = () => {
  return (
    <Box className="container py-16">
      <Typography component="span" color="primary.main" sx={styles.title}>
        Tin tức
      </Typography>

      <Swiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        <SwiperSlide>A1</SwiperSlide>
        <SwiperSlide>A2</SwiperSlide>
        <SwiperSlide>A3</SwiperSlide>
        <SwiperSlide>A4</SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeNew;

const styles: Record<string, SxProps<Theme> | undefined> = {
  title: {
    fontSize: theme.typography.pxToRem(39),
    fontWeight: 500,
  },
};
