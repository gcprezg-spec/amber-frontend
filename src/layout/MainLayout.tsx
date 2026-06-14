import { ReactNode } from 'react';

import Header from '../components/Header';

import Footer from '../components/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {

  return (
    <div className="bg-cream min-h-screen overflow-hidden">

      <Header />

      <main>

        {children}

      </main>

      <Footer />

    </div>
  );
}