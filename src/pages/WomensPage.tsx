import { motion } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WomensPage() {

  return (

    <>

      <Header />

      <main className="bg-[#050505] text-white min-h-screen">

        {/* HERO */}
        <section
          className="
          min-h-screen
          flex items-center
          justify-center
          relative
          overflow-hidden
        "
        >

          {/* BACKGROUND */}
          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000"
              alt="Women's Collection"
              className="
              w-full
              h-full
              object-cover
              opacity-20
            "
            />

            <div className="absolute inset-0 bg-black/80" />

          </div>

          {/* CONTENT */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="
            relative z-10
            text-center
            px-6
            max-w-4xl
            mx-auto
          "
          >

            <p
              className="
              uppercase
              tracking-[8px]
              text-[#d4b06a]
              text-sm
              mb-8
            "
            >

              Amber Womens

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

              Coming
              <br />
              Soon

            </h1>

            <p
              className="
              text-white/60
              text-lg
              md:text-xl
              max-w-2xl
              mx-auto
              mb-12
            "
            >

        
            </p>

            <div
              className="
              inline-flex
              items-center
              px-8 py-4
              rounded-full
              border border-[#d4b06a]/30
              bg-[#d4b06a]/10
              text-[#d4b06a]
              uppercase
              tracking-[4px]
              text-xs
            "
            >

              Launching Soon

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />

    </>

  );

}