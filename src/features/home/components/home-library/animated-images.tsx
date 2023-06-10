import { Grid } from '@mui/material';
import { LayoutGroup } from 'framer-motion';
import { FC } from 'react';
import AnimatedImageItem from './animated-image-item';

const AnimatedImages: FC = () => {
  return (
    <LayoutGroup>
      <Grid
        container
        spacing={{
          xs: 1,
        }}
      >
        <AnimatedImageItem
          src="/home/img_lib_1.svg"
          title="Sức khỏe các"
          description="Trị các bệnh đường hô hấp trên chó"
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
        />

        <AnimatedImageItem
          src="/home/img_lib_1.svg"
          title="Sức khỏe các"
          description="Trị các bệnh đường hô hấp trên chó"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
        />

        <AnimatedImageItem
          src="/home/img_lib_1.svg"
          title="Sức khỏe các"
          description="Trị các bệnh đường hô hấp trên chó"
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
        />
      </Grid>
    </LayoutGroup>
  );
};
export default AnimatedImages;
