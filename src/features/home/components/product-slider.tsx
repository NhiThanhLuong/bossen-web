import { Box, Typography, styled, useTheme } from '@mui/material';
import { FC } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

SwiperCore.use([Autoplay]);

const items = [
  '/home/img_slider1.png',
  '/home/img_slider2.png',
  '/home/img_slider3.png',
  '/home/img_slider4.png',
  '/home/img_slider5.png',
  '/home/img_slider6.png',
];

const ProductSlider: FC = () => {
  const theme = useTheme();
  return (
    <ContainerBox className="container py-16">
      <Typography className="title" component="span" color="primary.main">
        Sản phẩm nổi bật
      </Typography>

      <Swiper
        modules={[Autoplay]}
        loop
        scrollbar={false}
        allowTouchMove={false} // Disable touch movement
        freeMode={false}
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={2}
        spaceBetween={4}
        breakpoints={{
          [theme.breakpoints.values.md]: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          [theme.breakpoints.values.lg]: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
      >
        {items.concat(items).map((item) => (
          <SwiperSlide key={item}>
            <Image src={item} alt="" priority width={900} height={900} />

            <Typography className="swiper-slide__title" color="primary.main">
              Best Cure - Xịt thảo
            </Typography>
            <Typography className="swiper-slide__description" color="black">
              Best Cure - Xịt thảo
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerBox>
  );
};

export default ProductSlider;

const ContainerBox = styled(Box)(({ theme }) => ({
  '.title': {
    fontSize: theme.typography.pxToRem(39),
    fontWeight: 500,
  },

  '.swiper-slide': {
    // textAlign: 'center',

    img: {
      width: '100%',
      height: 'auto',
    },

    '&__title': {
      fontSize: theme.typography.pxToRem(30),
      fontWeight: 600,
      [theme.breakpoints.down('xl')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    '&__description': {
      fontSize: theme.typography.pxToRem(24),
      [theme.breakpoints.down('xl')]: {
        fontSize: theme.typography.pxToRem(18),
      },
    },
  },
}));
