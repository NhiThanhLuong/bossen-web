'use client';

import { useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const TestPage = () => {
  const target = useRef<HTMLDivElement>(null);
  //   const train = useParallax<HTMLDivElement>({
  //     speed: 500,
  //     rotateX: [0, 290],
  //     translateY: [-50, 50],
  //     targetElement: target.current,
  //   });

  //   const cloud = useParallax({
  //     speed: 200,
  //     targetElement: target.current ?? undefined,
  //   });
  return (
    <ParallaxProvider
      scrollContainer={target.current as HTMLElement | undefined}
    >
      <div style={{ height: '100vh', overflowY: 'scroll' }} ref={target}>
        <div style={{ height: '200vh' }}>
          <Parallax translateY={[-20, 10]}>
            <div
              style={{
                height: '50vh',
                background: 'url(/home/img_1.png) no-repeat',
              }}
            />
          </Parallax>

          <Parallax translateY={[-50, 50]}>
            <div
              style={{
                height: '50vh',
                background: 'url(/home/img_2.png) no-repeat',
              }}
            />
          </Parallax>

          {/* <div ref={train.ref}>
            <div
              style={{
                height: '50vh',
                background: 'url(/home/img_2.png) no-repeat',
              }}
            />
          </div> */}

          {/* <Parallax speed={-20} translateY={[-40, 40]}>
          <div
            style={{
              height: '50vh',
              background: 'url(/home/img_3.png) no-repeat',
            }}
          />
        </Parallax> */}
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default TestPage;
