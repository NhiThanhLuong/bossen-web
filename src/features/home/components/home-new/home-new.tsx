import { Box } from '@mui/material';
import { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeTypographyTitle from '../home-typography/home-typography-title';

SwiperCore.use([Pagination]);

const HomeNew: FC = () => {
  return (
    <Box className="container py-16">
      <HomeTypographyTitle>Tin tức</HomeTypographyTitle>

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

      <HomeTypographyTitle className="text-center">
        “The Best Choice For Your Pets”
      </HomeTypographyTitle>
    </Box>
  );
};

export default HomeNew;
