import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../components/CartContext';




export default function CheckoutPage() {

  const { cartItems, subtotal } = useCart();

  return (

    <>
      <Header />

      <main className="bg-[#050505] text-white min-h-screen pt-36 pb-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#d4b06a] text-sm mb-4">
              Checkout
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold">
              Complete Your Order
            </h1>

          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">

            {/* LEFT SIDE */}
            <div>

              {/* CONTACT */}
              <div className="bg-[#111] border border-white/10 rounded-[32px] p-8 mb-8">

                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>

                <input
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4"
                />

              </div>

              {/* SHIPPING */}
              <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

                <h2 className="text-2xl font-semibold mb-6">
                  Shipping Address
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    placeholder="First Name"
                    className="bg-black border border-white/10 rounded-xl px-5 py-4"
                  />

                  <input
                    placeholder="Last Name"
                    className="bg-black border border-white/10 rounded-xl px-5 py-4"
                  />

                </div>

                <input
                  placeholder="Address"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 mt-4"
                />

                <input
                  placeholder="Apartment (Optional)"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 mt-4"
                />

                <div className="grid md:grid-cols-2 gap-4 mt-4">

                  <input
                    placeholder="City"
                    className="bg-black border border-white/10 rounded-xl px-5 py-4"
                  />

                  <input
                    placeholder="Postal Code"
                    className="bg-black border border-white/10 rounded-xl px-5 py-4"
                  />

                </div>

                <input
                  placeholder="Phone Number"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 mt-4"
                />

              </div>

              {/* PAYMENT */}
              <div className="bg-[#111] border border-white/10 rounded-[32px] p-8 mt-8">

                <h2 className="text-2xl font-semibold mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4">

                  <label className="flex items-center justify-between border border-white/10 rounded-xl p-5 cursor-pointer">

                    <div className="flex items-center gap-4">

                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                      />

                      <span>
                        Visa / Mastercard
                      </span>

                    </div>

                  </label>

                  <label className="flex items-center justify-between border border-white/10 rounded-xl p-5 cursor-pointer">

                    <div className="flex items-center gap-4">

                      <input
                        type="radio"
                        name="payment"
                      />

                      <span>
                        Koko Pay
                      </span>

                    </div>

                  </label>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <div className="sticky top-32 bg-[#111] border border-white/10 rounded-[32px] p-8">

                <div className="space-y-6">

  {cartItems.map((item) => (

    <div
      key={`${item.id}-${item.size}-${item.color}`}
      className="
      flex gap-4
      border-b border-white/10
      pb-5
    "
    >

      <img
        src={item.image}
        alt={item.name}
        className="
        w-20 h-20
        rounded-xl
        object-cover
      "
      />

      <div className="flex-1">

        <h3 className="font-medium">
          {item.name}
        </h3>

        <p className="text-white/50 text-sm">
          Color: {item.color}
        </p>

        <p className="text-white/50 text-sm">
          Size: {item.size}
        </p>

        <p className="text-white/50 text-sm">
          Qty: {item.quantity}
        </p>

      </div>

      <div className="text-[#d4b06a]">

        Rs. {(item.price * item.quantity).toLocaleString()}

      </div>

    </div>

  ))}

</div>

                <div className="space-y-6">

                  <div className="flex justify-between">

                    <span>
                      Subtotal
                    </span>

                    <span>
                      Rs. {subtotal.toLocaleString()}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>
                      Shipping
                    </span>

                    <span>
                      Rs. 500
                    </span>

                  </div>

                  <div className="border-t border-white/10 pt-6 flex justify-between text-xl font-semibold">

                    <span>
                      Total
                    </span>

                    <span className="text-[#d4b06a]">
  Rs. {subtotal.toLocaleString()}
</span>

                  </div>

                </div>

                <button
                  className="
                  w-full
                  mt-10
                  bg-[#d4b06a]
                  text-black
                  py-5
                  rounded-full
                  uppercase
                  tracking-[4px]
                  text-sm
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
                >

                  Complete Order

                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>

  );

}