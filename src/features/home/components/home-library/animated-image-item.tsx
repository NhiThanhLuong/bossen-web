import { Box, Grid, Typography, styled } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

type Props = MotionProps & {
  src: string;
  title: string;
  description: string;
};

const AnimatedImageItem: FC<Props> = ({
  initial,
  animate,
  src,
  title,
  description,
}) => {
  return (
    <ContainerGrid item xs={4}>
      <Box
        component={motion.div}
        bgcolor="white"
        {...{ initial, animate }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 3,
          delay: 0.3,
        }}
      >
        <Image src={src} alt="Image 1" priority width={1000} height={1000} />

        <Typography className="home-library__title !mx-2" color="primary.main">
          {title}
        </Typography>

        <Typography
          className="home-library__description !mx-2 !mb-2"
          color="#3D3D3D"
        >
          {description}
        </Typography>
      </Box>
    </ContainerGrid>
  );
};

export default AnimatedImageItem;

const ContainerGrid = styled(Grid)(({ theme }) => ({
  '& > .MuiBox-root': {
    borderRadius: theme.typography.pxToRem(8),
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.typography.pxToRem(16),
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.typography.pxToRem(8),
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.typography.pxToRem(16),
    },
  },

  '.home-library__title': {
    fontSize: theme.typography.pxToRem(12),
    marginLeft: 1,
  },
}));
