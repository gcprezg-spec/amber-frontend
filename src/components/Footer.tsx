export default function Footer() {

  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* LOGO */}
          <div>

            <h2 className="text-4xl font-black text-gold mb-6">

              AMBER

            </h2>

            <p className="text-white/70 leading-relaxed">

              Crafted for confidence,
              identity and timeless
              luxury aesthetics.

            </p>

          </div>

          {/* MENU */}
          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-6 text-gold">

              Menu

            </h3>

            <div className="flex flex-col gap-4 text-white/80">

              <a href="/mens">Mens</a>

              <a href="/womens">Womens</a>

              <a href="/">Home</a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-6 text-gold">

              Contact

            </h3>

            <div className="flex flex-col gap-4 text-white/80">

              <p>amberluxury@gmail.com</p>

              <p>+94 77 123 4567</p>

              <p>Colombo, Sri Lanka</p>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-6 text-gold">

              Newsletter

            </h3>

            <div className="flex">

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/10 border border-white/10 px-5 py-4 outline-none"
              />

              <button className="bg-gold text-black px-6 font-bold">

                →

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">

          <p>

            2026 Amber. All Rights Reserved.

          </p>

          <p>

            Forge Your Aura

          </p>

        </div>

      </div>

    </footer>
  );
}