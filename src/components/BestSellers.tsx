import { motion, AnimatePresence } from 'framer-motion';

import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';

import { useEffect, useState } from 'react';

import QuickAddModal from './QuickAddModal';

import { Link } from 'react-router-dom';

import { getProducts } from '../services/productService';

export default function BestSellers() {

  const [startIndex, setStartIndex] =
    useState(0);

    const [quickOpen, setQuickOpen] =
  useState(false);

const [selectedProduct, setSelectedProduct] =
  useState<any>(null);

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

 const [products, setProducts] =
  useState<any[]>([]);

useEffect(() => {

  getProducts()
    .then(setProducts)
    .catch(console.error);

}, []);

const visibleProducts =
  products.slice(startIndex, startIndex + 4);
  return (

    <section className="bg-[#151515] py-32 overflow-hidden">

      {/* TOP */}
      <div className="text-center mb-20 px-6">

        <p className="uppercase tracking-[8px] text-gold text-sm mb-6">

          Best Sellers

        </p>

        <h1 className="text-white text-5xl md:text-7xl font-semibold leading-none">

          Explore Our Most
          <br />
          Trending Pieces

        </h1>

      </div>

      {/* CONTROLS */}
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-4 px-6 mb-10">

        <button
          onClick={prevSlide}
          className="
          w-14 h-14 rounded-full
          border border-white/20
          text-white
          bg-white/5
          backdrop-blur-xl
          flex items-center justify-center
          hover:bg-gold hover:text-black
          transition duration-300
        "
        >

          <ChevronLeft size={22} />

        </button>

        <button
          onClick={nextSlide}
          className="
          w-14 h-14 rounded-full
          border border-white/20
          text-white
          bg-white/5
          backdrop-blur-xl
          flex items-center justify-center
          hover:bg-gold hover:text-black
          transition duration-300
        "
        >

          <ChevronRight size={22} />

        </button>

      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">

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
            gap-6
          "
          >

            {visibleProducts.map((product) => (

              <div
  key={product.id}
  className="group block"
>

                {/* IMAGE */}
                <div
                  className="
                  overflow-hidden
                  bg-[#111]
                  mb-5
                  relative
                  rounded-3xl
                  border border-white/10
                "
                >

                  <Link to={`/product/${product.id}`}>

  <img
    src={product.image}
    alt={product.name}
    className="
    w-full
    h-[520px]
    object-cover
    group-hover:scale-105
    transition duration-700
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
  absolute bottom-5 left-1/2
  -translate-x-1/2

  bg-gold text-black

  px-7 py-4

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
"
>

  <ShoppingBag size={15} />

  Quick Add

</button>

                </div>

                {/* INFO */}
                <div>

                  <h3 className="text-2xl font-semibold text-white mb-1">

                    {product.name}

                  </h3>

                  <p className="text-gray-400 mb-3">

                    {product.category}

                  </p>

                  <p className="text-xl font-medium text-gold">

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