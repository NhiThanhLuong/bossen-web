import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import PetStack from './pet-stack';

const BossenProduct: FC = () => {
  return (
    <ContainerBox bgcolor="myColor.main" className="w-full">
      <Box className="container py-16">
        <Box className="title">
          <Typography
            className="title_1"
            variant="body1"
            component="span"
            color="myColor.text"
          >
            Sản phẩm của{' '}
          </Typography>

          <Typography
            className="title_2"
            variant="body1"
            component="span"
            color="primary.main"
          >
            Bossen
          </Typography>
        </Box>

        <Box
          className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1"
          gap={2}
        >
          <Image
            className="main_image"
            src="/home/img_4.png"
            alt=""
            priority
            width={1000}
            height={1000}
          />
          <Box className="grid grid-cols-2 grid-rows-2" gap={2}>
            <Stack justifyContent="space-between" className="box_1">
              <Typography className="text_1" variant="body1" color="#535353">
                Bossen chuyên phát triển các sản phẩm chăm sóc thú cưng.
              </Typography>
              <Typography className="text_2" variant="body1" color="#8A8A8A">
                Chúng tôi chuyên cung cấp các sản phẩm chăm sóc thú cưng từ A
                đến Z (Đồ ăn, phụ kiện) tiện dụng nhất cho “bé yêu” của bạn.
              </Typography>
            </Stack>

            <PetStack src="/home/img_dog.svg" text="Cún cưng" />

            <PetStack src="/home/img_cat.svg" text="Mèo cưng" />

            <PetStack src="/home/img_bird.svg" text="Thú cưng khác" />
          </Box>
        </Box>
      </Box>
    </ContainerBox>
  );
};

export default BossenProduct;

const ContainerBox = styled(Box)(({ theme }) => ({
  '.title': {
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    '& .title_1': {
      fontSize: theme.typography.pxToRem(39),
      fontWeight: 500,
      color: '#535353',

      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    '& .title_2': {
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(49),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(28),
      },
    },
  },

  '.main_image': {
    width: '100%',
    height: 'auto',
  },

  '.box_1': {
    '& .text_1': {
      lineHeight: 1,
      fontSize: theme.typography.pxToRem(24),

      [theme.breakpoints.down('lg')]: {
        fontSize: theme.typography.pxToRem(18),
      },
    },

    '& .text_2': {
      lineHeight: 1,
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.typography.pxToRem(14),
      },
    },
  },

  // '.stack_pet': {
  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   img: {
  //     width: '50%',
  //     height: 'auto',
  //   },

  //   '.MuiTypography-root': {
  //     fontWeight: 500,
  //     fontSize: theme.typography.pxToRem(32),
  //     [theme.breakpoints.down('lg')]: {
  //       fontSize: theme.typography.pxToRem(24),
  //     },
  //     [theme.breakpoints.down('md')]: {
  //       fontSize: theme.typography.pxToRem(22),
  //     },
  //   },

  //   [`@media (hover: hover)`]: {
  //     cursor: 'pointer',
  //     transition: 'background-color 0.5s ease',
  //     '&:hover': {
  //       backgroundColor: '#F8EBD1',
  //     },
  //   },
  // },

  // [theme.breakpoints.down('lg')]: {
  // '.box_1': {
  // '& .text_1': {
  //   fontSize: theme.typography.pxToRem(18),
  // },
  // '& .text_2': {
  //   fontSize: theme.typography.pxToRem(14),
  // },
  // },

  // '.stack_pet': {
  //   '.MuiTypography-root': {
  //     fontSize: theme.typography.pxToRem(24),
  //   },
  // },
  // },

  // [theme.breakpoints.down('sm')]: {
  //   '.title': {
  //     '& .title_1': {
  //       fontSize: theme.typography.pxToRem(20),
  //     },
  //     '& .title_2': {
  //       fontSize: theme.typography.pxToRem(28),
  //     },
  //   },
  // },
}));
