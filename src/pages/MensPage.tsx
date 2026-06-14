import { useState } from 'react';

import QuickAddModal from '../components/QuickAddModal';

import { motion } from 'framer-motion';

import {
  ShoppingBag,
  ChevronDown,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import Header from '../components/Header';

import Footer from '../components/Footer';

import { products } from '../data/products';

export default function MensPage() {

  const [quickOpen, setQuickOpen] =
  useState(false);

const [selectedProduct, setSelectedProduct] =
  useState<any>(null);

  const [showFilters, setShowFilters] =
    useState(false);

  const [sortOrder, setSortOrder] =
    useState('');

  const [selectedType, setSelectedType] =
    useState('All');

  const [inStockOnly, setInStockOnly] =
    useState(false);

  // FILTER PRODUCTS
  let filteredProducts = products.filter(
  (product) => product.gender === 'mens'
);
  // TYPE FILTER
  if (selectedType !== 'All') {

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.type === selectedType
    );

  }

  // STOCK FILTER
  if (inStockOnly) {

    filteredProducts = filteredProducts.filter(
      (product) => product.inStock
    );

  }

  // PRICE SORT
  if (sortOrder === 'low') {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  if (sortOrder === 'high') {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  }

  return (

    <>

      {/* NAVBAR */}
      <Header />

      <main className="bg-[#050505] text-white overflow-hidden">

        {/* HERO */}
        <section
          className="
          relative
          h-screen
          flex items-center
          overflow-hidden
        "
        >

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000"
            alt="Mens Hero"
            className="
            absolute inset-0
            w-full h-full
            object-cover
          "
          />

          {/* OVERLAY */}
          <div
            className="
            absolute inset-0
            bg-black/60
          "
          />

          {/* CONTENT */}
          <div
            className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6
            w-full
          "
          >

            <div className="max-w-2xl">

              <p
                className="
                uppercase
                tracking-[8px]
                text-[#d4b06a]
                text-sm
                mb-8
              "
              >

                Mens Collection

              </p>

              <h1
                className="
                text-6xl
                md:text-8xl
                font-semibold
                leading-[0.9]
                mb-8
              "
              >

                Elevate
                <br />
                Your Style.

              </h1>

              <p
                className="
                text-white/70
                text-lg
                max-w-xl
                mb-10
              "
              >

                Crafted for confidence,
                movement, and timeless
                luxury aesthetics.

              </p>

            </div>

          </div>

        </section>

        {/* FILTER BAR */}
        <section className="px-6 py-20">

          <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-5 flex-wrap">

              {/* FILTER BUTTON */}
              <button

                onClick={() =>
                  setShowFilters(!showFilters)
                }

                className="
                px-8 py-4
                rounded-full
                bg-[#d4b06a]
                text-black
                uppercase
                tracking-[3px]
                text-xs
                font-semibold
                hover:scale-105
                transition
                flex items-center gap-3
              "
              >

                Filter

                <ChevronDown size={16} />

              </button>

              {/* FILTER OPTIONS */}
              {showFilters && (

                <motion.div

                  initial={{
                    opacity: 0,
                    x: -40,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 0.4,
                  }}

                  className="
                  flex items-center
                  gap-4
                  flex-wrap
                "
                >

                  {/* PRICE */}
                  <div className="relative group">

                    <button
                      className="
                      px-7 py-3
                      rounded-full
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-white
                      uppercase
                      tracking-[3px]
                      text-xs
                      hover:bg-white
                      hover:text-black
                      transition
                    "
                    >

                      Price

                    </button>

                    {/* DROPDOWN */}
                    <div
                      className="
                      absolute top-16 left-0
                      bg-[#111]
                      border border-white/10
                      rounded-3xl
                      overflow-hidden
                      opacity-0 invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all duration-300
                      min-w-[240px]
                      z-50
                    "
                    >

                      <button

                        onClick={() =>
                          setSortOrder('low')
                        }

                        className="
                        w-full text-left
                        px-6 py-4
                        text-white/80
                        hover:bg-white
                        hover:text-black
                        transition
                      "
                      >

                        Lowest To Highest

                      </button>

                      <button

                        onClick={() =>
                          setSortOrder('high')
                        }

                        className="
                        w-full text-left
                        px-6 py-4
                        text-white/80
                        hover:bg-white
                        hover:text-black
                        transition
                      "
                      >

                        Highest To Lowest

                      </button>

                    </div>

                  </div>

                  {/* STOCK */}
                  <button

                    onClick={() =>
                      setInStockOnly(
                        !inStockOnly
                      )
                    }

                    className={`
                    px-7 py-3
                    rounded-full
                    uppercase
                    tracking-[3px]
                    text-xs
                    transition
                    border

                    ${
                      inStockOnly
                        ? 'bg-[#d4b06a] text-black border-[#d4b06a]'
                        : 'bg-white/5 text-white border-white/10'
                    }
                  `}
                  >

                    In Stock

                  </button>

                  {/* TYPE */}
                  <div className="relative group">

                    <button
                      className="
                      px-7 py-3
                      rounded-full
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-white
                      uppercase
                      tracking-[3px]
                      text-xs
                      hover:bg-white
                      hover:text-black
                      transition
                    "
                    >

                      Type

                    </button>

                    {/* DROPDOWN */}
                    <div
                      className="
                      absolute top-16 left-0
                      bg-[#111]
                      border border-white/10
                      rounded-3xl
                      overflow-hidden
                      opacity-0 invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all duration-300
                      min-w-[240px]
                      z-50
                    "
                    >

                      {[
                        'All',
                        'Polo',
                        'Hoodie',
                        'Shirt',
                        'Trouser',
                      ].map((item) => (

                        <button

                          key={item}

                          onClick={() =>
                            setSelectedType(item)
                          }

                          className="
                          w-full text-left
                          px-6 py-4
                          text-white/80
                          hover:bg-white
                          hover:text-black
                          transition
                        "
                        >

                          {item}

                        </button>

                      ))}

                    </div>

                  </div>

                </motion.div>

              )}

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section className="px-6 pb-32">

          <div
            className="
            max-w-7xl mx-auto
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
          >

            {filteredProducts.map((product) => (

              <div
  key={product.id}
  className="block"
>

                <motion.div

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                  }}

                  viewport={{
                    once: true,
                  }}

                  className="group"
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative overflow-hidden
                    rounded-[32px]
                    bg-[#111]
                    border border-white/10
                  "
                  >

                    <Link
  to={`/product/${product.id}`}
  className="block relative z-20"
>

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

                    {/* ADD TO CART */}
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

z-30

bg-[#d4b06a]
text-black

px-8 py-4

rounded-full

uppercase
tracking-[3px]
text-xs
font-semibold

flex items-center gap-2

opacity-0
translate-y-6

group-hover:opacity-100
group-hover:translate-y-0

transition duration-500

hover:bg-white
"
>

  <ShoppingBag size={16} />

  Quick Add

</button>

                  </div>

                  {/* INFO */}
                  <div className="pt-6">

                    <h3 className="text-3xl font-semibold mb-2">

                      {product.name}

                    </h3>

                    <p className="text-white/50 mb-4">

                      {product.category}

                    </p>

                    <p className="text-[#d4b06a] text-2xl font-medium">

                       Rs. {product.price.toLocaleString()}


                    </p>

                  </div>

                </motion.div>

              </div>

            ))}

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />

<QuickAddModal
  isOpen={quickOpen}
  onClose={() => setQuickOpen(false)}
  product={selectedProduct}
/>
    </>

  );
}