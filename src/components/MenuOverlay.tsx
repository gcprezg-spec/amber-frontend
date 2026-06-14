import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import {
  X,
} from 'lucide-react';

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuOverlay({
  isOpen,
  onClose,
}: MenuOverlayProps) {

  const links = [
    {
      name: 'Home',
      path: '/',
    },

    {
      name: 'Mens',
      path: '/mens',
    },

    {
      name: 'Womens',
      path: '/womens',
    },

    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>

      {/* BACKDROP */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]
          transition duration-300
          ${
            isOpen
              ? 'visible'
              : 'invisible'
          }
        `}
        onClick={onClose}
      />

      {/* SIDE PANEL */}
      <motion.div
        initial={{
          x: '100%',
        }}
        animate={{
          x: isOpen
            ? 0
            : '100%',
        }}
        transition={{
          type: 'tween',
          duration: 0.4,
        }}
        className="fixed top-0 right-0 w-full md:w-[450px] h-screen bg-black z-[100] border-l border-white/10"
      >

        <div className="p-8 flex items-center justify-between border-b border-white/10">

          <p className="text-gold uppercase tracking-[4px] text-sm">

            Navigation

          </p>

          <button
            onClick={onClose}
            className="text-white hover:text-gold transition duration-300"
          >

            <X size={24} />

          </button>

        </div>

        <div className="flex flex-col pt-16 px-10 gap-10">

          {links.map((link) => (

            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className="text-white text-3xl md:text-5xl font-black uppercase tracking-[6px] hover:text-gold transition duration-300"
            >

              {link.name}

            </Link>

          ))}

        </div>

      </motion.div>

    </>
  );
}