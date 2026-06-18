import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Menu,
  Search,
  User,
  ShoppingBag,
} from 'lucide-react';

import { motion } from 'framer-motion';

import MenuOverlay from './MenuOverlay';

import CartDrawer from './CartDrawer';

import { useCart } from './CartContext';

import logo from '../assets/nav-logo.png';

export default function Header() {

  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [cartOpen, setCartOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  return (

    <>
    
      <motion.header

        initial={{
          y: -100,
        }}

        animate={{
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className="fixed top-0 left-0 w-full z-50"
      >

        <div className="px-4 md:px-8 pt-4">

          <div
            className={`
              max-w-7xl mx-auto
              transition-all duration-500
              rounded-full
              border
              ${
                scrolled
                  ? 'bg-black/50 backdrop-blur-2xl border-white/10'
                  : 'bg-black/20 backdrop-blur-xl border-white/10'
              }
            `}
          >

            <div className="h-16 px-6 md:px-8 flex items-center justify-between">

              {/* LOGO */}
              <Link to="/">

                <img
                  src={logo}
                  alt="Amber"
                  className="
  h-7
  sm:h-8
  md:h-10
  lg:h-12
  w-auto
  object-contain
  flex-shrink-0
"
                />

              </Link>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-6 text-white">

                {/* SEARCH */}
                <button className="hover:text-gold transition duration-300">

                  <Search size={18} />

                </button>

                {/* USER */}
                <button className="hover:text-gold transition duration-300">

                  <User size={18} />

                </button>

                {/* CART */}
                <button

                  onClick={() =>
                    setCartOpen(true)
                  }

                  className="
                  hover:text-gold
                  transition duration-300
                  relative
                "
                >

                  <ShoppingBag size={18} />

                  <span
                    className="
                    absolute
                    -top-2
                    -right-2
                    bg-gold
                    text-black
                    text-[10px]
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                  >

                    {cartCount}

                  </span>

                </button>

                {/* MENU */}
                <button

                  onClick={() =>
                    setMenuOpen(true)
                  }

                    className="
                    flex items-center
                    justify-center
                    hover:text-gold
                    transition duration-300
                  "
                >

                  

                  <Menu size={20} />

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* MENU OVERLAY */}
        <MenuOverlay
          isOpen={menuOpen}
          onClose={() =>
            setMenuOpen(false)
          }
        />

      </motion.header>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
      />

    </>

  );
}