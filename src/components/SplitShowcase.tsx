import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

import { motion } from 'framer-motion';

import leftImage from '../assets/showcase-left.jpg';

import rightImage from '../assets/showcase-right.jpg';

export default function SplitShowcase() {

  return (
    <section className="bg-[#151515] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-gold text-sm mb-6">

            Editorial Collection

          </p>

          <h2 className="text-white text-4xl md:text-6xl font-light uppercase tracking-[6px] leading-tight mb-8">

            The Polo Built For
            <br />
            Every Journey.

          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">

            It's a whole new vibe 
            clean lines, premium fabric,
            and a bold look that turns heads.

          </p>

        </div>

        {/* SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden  rounded-[20px]"
        >

          <ReactCompareSlider

            itemOne={
              <ReactCompareSliderImage
                src={leftImage}
                alt="Left"
              />
            }

            itemTwo={
              <ReactCompareSliderImage
                src={rightImage}
                alt="Right"
              />
            }

            

            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
            }}

          />

          {/* LEFT CONTENT */}
          <div className="absolute bottom-12 left-12 z-20">

            <p className="text-white uppercase tracking-[4px] text-sm mb-5">

              Destination X

            </p>

            <button className="border border-white text-white px-8 py-4 uppercase tracking-[3px] text-xs hover:bg-white hover:text-black transition duration-300">

              Explore

            </button>

          </div>

          {/* RIGHT CONTENT */}
          <div className="absolute bottom-12 right-12 z-20 text-right">

            <p className="text-white uppercase tracking-[4px] text-sm mb-5">

              Conqueror

            </p>

            <button className="border border-white text-white px-8 py-4 uppercase tracking-[3px] text-xs hover:bg-white hover:text-black transition duration-300">

              Explore

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}