'use client';

import {
  BossenProduct,
  HomeLibrary,
  HomeNew,
  HomeReview,
  ProductSlider,
} from '@/features/home';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-20 pb-40">
      <HomeReview />
      <BossenProduct />
      <ProductSlider />
      <HomeLibrary />
      <HomeNew />
    </main>
  );
}
