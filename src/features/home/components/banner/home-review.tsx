import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import ThreeImageAnimation from './three-image-animation';
import Image from 'next/image';

const HomeReview: FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      className="container my-8 md:my-12 xl:my-16"
      spacing={{
        xs: -2,
        sm: -7,
      }}
    >
      <Grid
        item
        // xs={12}
        xs={6}
      >
        <Box className="flex rounded-bl-3xl h-[20vw]" bgcolor="primary.main">
          <div className="w-2/3 h-2/3 m-auto">
            <Image
              src="/home/text-review.svg"
              alt=""
              fill
              className="!static object-contain"
            />
          </div>
        </Box>
      </Grid>

      <Grid
        item
        // xs={12}
        xs={6}
      >
        <ThreeImageAnimation />
      </Grid>
    </Grid>
  );
};

export default HomeReview;
