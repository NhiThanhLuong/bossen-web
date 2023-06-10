'use client';

import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const FirstLoading: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          component={motion.div}
          // initial={{ opacity: 1 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          style={{
            opacity: 1,
          }}
          // initial={{ opacity: 1, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 1 }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
          }}
        >
          <Image
            src="/loading-page.svg"
            alt=""
            fill
            // width={1000}
            // height={200}
            // style={{ height: 'auto' }} // priority
            className="object-cover inset-0 z-50"
          />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default FirstLoading;
