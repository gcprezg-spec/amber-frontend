import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import heroVideo from '../assets/hero.mp4';

import logo from '../assets/logo.png';

export default function Hero() {

  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source
          src={heroVideo}
          type="video/mp4"
        />

      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center pt-32">

        <div className="text-center px-6">

        

          <motion.img
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.2,
  }}
  src={logo}
  alt="Amber Logo"
  className="w-[220px] md:w-[340px] lg:w-[460px] mx-auto mb-8"
/>



          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
           className="text-gold/90 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10" 
          >

            Crafted for identity, confidence,
            and timeless luxury aesthetics.

          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >

            <Link
              to="/mens"
              className="px-10 py-5 bg-gold text-black uppercase tracking-[3px] text-sm font-bold rounded-full hover:scale-105 transition duration-300"
            >

              Mens Collection

            </Link>

            <Link
              to="/womens"
              className="px-10 py-5 border border-white text-white uppercase tracking-[3px] text-sm font-bold rounded-full hover:bg-white hover:text-black transition duration-300"
            >

              Womens Collection

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}