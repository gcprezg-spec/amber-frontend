import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import { useRef } from 'react';

export default function Campaign() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale =
    useTransform(
      scrollYProgress,
      [0, 1],
      [1.1, 1]
    );

  return (
    <section
      ref={ref}
      className="relative h-[120vh] overflow-hidden"
    >

      {/* IMAGE */}
      <motion.img
        style={{ scale }}
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
        alt="Campaign"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="text-center px-6">

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-gold text-sm mb-8"
          >

            New Campaign

          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl lg:text-[8rem] font-black leading-none"
          >

            BUILT
            <br />
            DIFFERENT

          </motion.h2>

        </div>

      </div>

    </section>
  );
}