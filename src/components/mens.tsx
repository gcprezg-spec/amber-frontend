import { motion, AnimatePresence } from 'framer-motion';

import QuickAddModal from './QuickAddModal';

import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { products } from '../data/products';

export default function MensCollection() {


  
  const [quickOpen, setQuickOpen] =
  useState(false);

const [selectedProduct, setSelectedProduct] =
  useState<any>(null);

  const [startIndex, setStartIndex] =
    useState(0);

  const nextSlide = () => {

    setStartIndex((prev) =>
      prev === 0 ? 4 : 0
    );

  };

  const prevSlide = () => {

    setStartIndex((prev) =>
      prev === 0 ? 4 : 0
    );

  };

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  const mensProducts =
  products.filter(
    (p) => p.gender === 'mens'
  );

const visibleProducts =
  mensProducts.slice(
    startIndex,
    startIndex + 4
  );

  return (

    <section className="bg-[#151515] py-32 overflow-hidden">

      {/* TOP */}
      <div className="text-center mb-10 px-6">

        <p className="uppercase tracking-[8px] text-gold text-sm mb-6">

          Mens Collection

        </p>

        <h2 className="text-white text-5xl md:text-7xl font-semibold leading-none">

          Explore Our Menswear Collection

        </h2>

      </div>

      {/* CONTROLS */}
      <div className="max-w-[1600px] mx-auto flex items-center justify-end gap-4 px-10 mb-6">

        <button
          onClick={prevSlide}
          className="
          w-16 h-16 rounded-full
          border border-white/10
          text-white
          bg-white/5
          backdrop-blur-xl
          flex items-center justify-center
          hover:bg-gold hover:text-black
          transition duration-300
        "
        >

          <ChevronLeft size={24} />

        </button>

        <button
          onClick={nextSlide}
          className="
          w-16 h-16 rounded-full
          border border-white/10
          text-white
          bg-white/5
          backdrop-blur-xl
          flex items-center justify-center
          hover:bg-gold hover:text-black
          transition duration-300
        "
        >

          <ChevronRight size={24} />

        </button>

      </div>

      {/* PRODUCTS */}
      <div className="max-w-[1600px] mx-auto px-10 overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.div
            key={startIndex}

            initial={{
              x: 200,
              opacity: 0,
            }}

            animate={{
              x: 0,
              opacity: 1,
            }}

            exit={{
              x: -200,
              opacity: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
          >

            {visibleProducts.map((product) => (

              <div
  key={product.id}
  className="group min-w-0"
>

                {/* IMAGE */}
                <div
                  className="
                  overflow-hidden
                  bg-[#111]
                  mb-6
                  relative
                  rounded-[32px]
                  border border-white/10
                "
                >

                  <Link to={`/product/${product.id}`}>

  <img
    src={product.image}
    alt={product.name}
    className="
      w-full
      h-[600px]
      object-cover
      group-hover:scale-105
      transition duration-700
      cursor-pointer
    "
  />

</Link>

                  {/* OVERLAY */}
                 <div
  className="
  absolute inset-0
  bg-black/10
  group-hover:bg-black/30
  transition duration-500
  pointer-events-none
"
/>

                  <button
  onClick={(e) => {

    e.preventDefault();

    setSelectedProduct({
  id: product.id,
  name: product.name,
  image: product.image,
  price: product.price,
});

    setQuickOpen(true);

  }}

  className="
  absolute bottom-6 left-1/2
  -translate-x-1/2

  bg-gold text-black

  px-8 py-4

  uppercase
  tracking-[3px]
  text-xs
  font-semibold

  opacity-0
  translate-y-5

  group-hover:opacity-100
  group-hover:translate-y-0

  transition duration-500

  rounded-full

  flex items-center gap-2

  hover:bg-white

  whitespace-nowrap
"
>

  <ShoppingBag size={15} />

  Quick Add

</button>

                </div>

                {/* INFO */}
                <div className="px-1">

                  <h3
                    className="
                    text-[28px]
                    leading-tight
                    font-semibold
                    text-white
                    mb-2
                  "
                  >

                    {product.name}

                  </h3>

                  <p className="text-gray-400 mb-4 text-lg">

                    {product.category}

                  </p>

                  <p className="text-2xl font-medium text-gold">

                      Rs. {product.price.toLocaleString()}


                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </AnimatePresence>

      </div>


<QuickAddModal
  isOpen={quickOpen}
  onClose={() => setQuickOpen(false)}
  product={selectedProduct}
/>

    </section>
  );
}