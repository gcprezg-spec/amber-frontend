import { motion } from 'framer-motion';

import banner from '../assets/look1.jpg';

export default function FashionBanner() {

  return (

    <section className="relative h-screen overflow-hidden bg-black">

      {/* IMAGE */}
      <motion.img
        src={banner}
        alt="Fashion Banner"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="px-8 md:px-24 max-w-4xl">

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="uppercase tracking-[10px] text-gold text-sm md:text-base mb-6"
          >

            Luxury Streetwear

          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-white font-black leading-[0.9] text-6xl md:text-8xl lg:text-[10rem]"
          >

            Forge Your Aura

          </motion.h2>

        </div>

      </div>

    </section>
  );
}