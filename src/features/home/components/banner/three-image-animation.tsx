'use client';

import { LayoutGroup, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useElementSize } from 'usehooks-ts';

const images = ['/home/img_1.png', '/home/img_2.png', '/home/img_3.png'];

const ThreeImageAnimation: FC = () => {
  const [sizeRef, { height }] = useElementSize();
  const [round, setRound] = useState(0);

  const handleAnimationComplete = () => {
    setTimeout(() => setRound((round + 1) % 3), 2000);
  };

  return (
    <div
      className="relative w-full max-w-[90vw]"
      style={{
        height,
      }}
    >
      <LayoutGroup>
        {images.map((src, index) => {
          const zIndex = transferObj[round][index];
          return (
            <motion.img
              className="absolute top-0"
              key={src}
              src={src}
              ref={images[0] === src ? sizeRef : undefined}
              layoutId={src}
              initial={{ rotate: 10, zIndex: zIndex * 10 }}
              animate={{
                rotate: [10, 10 * (1 - zIndex)],
                zIndex: zIndex * 10,
              }}
              transition={{
                duration: 0.5,
              }}
              alt={`Image ${index + 1}`}
              onAnimationComplete={
                index === 2 ? handleAnimationComplete : undefined
              }
            />
          );
        })}
      </LayoutGroup>
    </div>
  );
};

export default ThreeImageAnimation;

const transferObj = [
  [0, 1, 2],
  [2, 0, 1],
  [1, 2, 0],
];
