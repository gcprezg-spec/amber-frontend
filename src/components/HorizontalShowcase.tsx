import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/look1.jpg';
import img2 from '../assets/look2.jpg';
import img3 from '../assets/look3.jpg';
import img4 from '../assets/look4.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalFashion() {

  const sectionRef = useRef<HTMLDivElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const section = sectionRef.current;

    const track = trackRef.current;

    if (!section || !track) return;

    const totalScroll =
      track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {

      x: -totalScroll,

      ease: 'none',

      scrollTrigger: {

        trigger: section,

        start: 'top top',

        end: () => `+=${totalScroll}`,

        scrub: 1,

        pin: true,

        anticipatePin: 1,
      },
    });

    return () => {

      tween.kill();

      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };

  }, []);

  const slides = [

    {
      image: img1,
      title: 'Forge Your Aura',
      subtitle: 'Luxury Streetwear',
    },

    {
      image: img2,
      title: 'Modern Elegance',
      subtitle: 'Timeless Fashion',
    },

    {
      image: img3,
      title: 'Minimal Energy',
      subtitle: 'Crafted Identity',
    },

    {
      image: img4,
      title: 'Luxury Redefined',
      subtitle: 'Amber Essentials',
    },
  ];

  return (

    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >

      <div
        ref={trackRef}
        className="flex h-screen"
        style={{
          width: `${slides.length * 100}vw`,
        }}
      >

        {slides.map((slide, index) => (

          <div
            key={index}
            className="relative w-screen h-screen flex-shrink-0 overflow-hidden"
          >

            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-24">

              <div className="max-w-3xl">

                <p className="uppercase tracking-[8px] text-gold text-sm mb-6">

                  {slide.subtitle}

                </p>

                <h2 className="text-white text-6xl md:text-8xl font-black leading-none">

                  {slide.title}

                </h2>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}