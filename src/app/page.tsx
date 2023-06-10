'use client';

import {
  BossenProduct,
  HomeLibrary,
  HomeReview,
  ProductSlider,
} from '@/features/home';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-20">
      <HomeReview />
      <BossenProduct />
      <ProductSlider />
      <HomeLibrary />
    </main>
  );
}
