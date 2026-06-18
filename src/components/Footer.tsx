import { Link } from 'react-router-dom';

import {
  ArrowRight,
} from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../assets/footer-logo.png';



export default function Footer() {

  return (

<footer className="relative bg-primary text-white overflow-hidden">

  {/* BACKGROUND AMBER TEXT */}
  <div
    className="
      absolute inset-0
      flex items-center justify-center
      pointer-events-none
      select-none
    "
  >

    <h1
      className="
        text-[120px]
        md:text-[220px]
        lg:text-[320px]
        font-black
        text-white/[0.03]
        tracking-wider
      "
    >

      AMBER

    </h1>

  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-24">

    {/* TOP BRAND SECTION */}
    <div className="text-center">

      <img
        src={logo}
        alt="Amber"
        className="
          h-28
           md:h-36
          w-auto
          mx-auto
          mb-6
        "
      />

      <p
        className="
          text-gold
          uppercase
          tracking-[6px]
          text-xs
          mb-6
        "
      >


      </p>

      <p
        className="
          max-w-2xl
          mx-auto
          text-white/70
          text-lg
          leading-relaxed
        "
      >

        Crafted for confidence,
        identity and timeless
        luxury aesthetics.

      </p>

      {/* SOCIALS */}
      <div
        className="
          flex
          justify-center
          gap-6
          mt-10
        "
      >

        <a
          href="#"
          className="
            w-12 h-12
            rounded-full
            border border-white/10
            flex items-center justify-center
            hover:bg-gold
            hover:text-black
            hover:-translate-y-1
            transition-all duration-300
          "
        >

          <FaInstagram size={18} />


        </a>

        <a
          href="#"
          className="
            w-12 h-12
            rounded-full
            border border-white/10
            flex items-center justify-center
            hover:bg-gold
            hover:text-black
            hover:-translate-y-1
            transition-all duration-300
          "
        >

          <FaFacebookF size={18} />

        </a>

        <a
          href="#"
          className="
            w-12 h-12
            rounded-full
            border border-white/10
            flex items-center justify-center
            hover:bg-gold
            hover:text-black
            hover:-translate-y-1
            transition-all duration-300
          "
        >

              <FaWhatsapp size={18} />
        </a>

      </div>

    </div>

    {/* DIVIDER */}
    <div className="my-20">

      <div className="h-px bg-white/10" />

    </div>

    {/* MIDDLE SECTION */}
    <div
      className="
        grid
        md:grid-cols-3
        gap-16
      "
    >

      {/* SHOP */}
      <div>

        <h3
          className="
            text-gold
            uppercase
            tracking-[4px]
            text-sm
            mb-8
          "
        >

          Shop

        </h3>

        <div className="flex flex-col gap-5">

          <Link
            to="/mens"
            className="
              group
              flex items-center
              justify-between
              text-white/80
              hover:text-gold
              transition
            "
          >

            Mens

            <ArrowRight
              size={16}
              className="
                opacity-0
                group-hover:opacity-100
                translate-x-[-10px]
                group-hover:translate-x-0
                transition-all
              "
            />

          </Link>

          <Link
            to="/womens"
            className="
              group
              flex items-center
              justify-between
              text-white/80
              hover:text-gold
              transition
            "
          >

            Womens

            <ArrowRight
              size={16}
              className="
                opacity-0
                group-hover:opacity-100
                translate-x-[-10px]
                group-hover:translate-x-0
                transition-all
              "
            />

          </Link>

        </div>

      </div>

      {/* CONTACT */}
      <div>

        <h3
          className="
            text-gold
            uppercase
            tracking-[4px]
            text-sm
            mb-8
          "
        >

          Contact

        </h3>

        <div className="space-y-5 text-white/80">

          <p>amberluxury@gmail.com</p>

          <p>+94 77 123 4567</p>

          <p>Colombo, Sri Lanka</p>

        </div>

      </div>

      {/* NEWSLETTER */}
      <div>

        <h3
          className="
            text-gold
            uppercase
            tracking-[4px]
            text-sm
            mb-5
          "
        >

          Join The Amber Circle

        </h3>

        <p
          className="
            text-white/60
            mb-6
            leading-relaxed
          "
        >

          Get early access to
          collections, exclusive
          drops and future releases.

        </p>

        <div className="flex">

          <input
            type="email"
            placeholder="Your Email"
            className="
              flex-1
              bg-white/5
              border border-white/10
              px-5 py-4
              outline-none
              focus:border-gold
            "
          />

          <button
            className="
              bg-gold
              text-black
              px-6
              hover:opacity-90
              transition
            "
          >

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div
      className="
        border-t border-white/10
        mt-20
        pt-8
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        text-white/40
        text-sm
      "
    >

      <p>

        © 2026 Amber.
        All Rights Reserved.

      </p>

      <p>

        Forge Your Aura

      </p>

    </div>

  </div>

</footer>

);
}