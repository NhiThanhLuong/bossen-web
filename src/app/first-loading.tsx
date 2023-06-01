'use client';

import { Box, Button } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useState } from 'react';

const FirstLoading: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => setIsVisible(!isVisible)}>Change</Button>
      <AnimatePresence>
        {isVisible && (
          <Box
            component={motion.div}
            // initial={{ opacity: 1 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/loading-page.svg"
              alt=""
              // fill
              width={1000}
              height={200}
              style={{ height: 'auto' }} // priority
              // className="object-cover"
            />
          </Box>
        )}
      </AnimatePresence>
    </main>
  );
};

export default FirstLoading;
