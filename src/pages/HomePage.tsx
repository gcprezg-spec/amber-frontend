import MainLayout from '../layout/MainLayout';

import Hero from '../components/Hero';

import SplitShowcase from '../components/SplitShowcase';

import BestSellers from '../components/BestSellers';


import FashionBanner from '../components/FashionBanner'
import MensCollection from '../components/mens';

export default function HomePage() {

  return (
    <MainLayout>

      <Hero />

<SplitShowcase />
      <BestSellers />

      <FashionBanner />

<MensCollection />
    </MainLayout>
  );
}