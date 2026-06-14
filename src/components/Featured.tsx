import { motion } from 'framer-motion';

export default function Featured() {

  return (
    <section className="bg-cream py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Editorial Fashion"
              className="w-full h-[800px] object-cover rounded-[40px]"
            />

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[8px] text-primary text-sm mb-8 font-semibold">

              Editorial Collection

            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-10 text-dark">

              Crafted
              <br />
              For Presence

            </h2>

            <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-xl">

              Amber blends modern luxury aesthetics
              with timeless silhouettes, creating
              garments designed to elevate identity,
              confidence, and individuality.

            </p>

            <button className="px-10 py-5 bg-primary text-white uppercase tracking-[3px] text-sm font-bold rounded-full hover:scale-105 transition duration-300">

              Discover Collection

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}