import { X, Trash2, Plus, Minus } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import { useCart } from './CartContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
}: Props) {

  const {
    cartItems,
    subtotal,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  return (

    <AnimatePresence>

      {isOpen && (

        <>

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          {/* DRAWER */}
          <motion.div

            initial={{ x: 450 }}

            animate={{ x: 0 }}

            exit={{ x: 450 }}

            transition={{
              duration: 0.35,
            }}

            className="
            fixed
            top-0
            right-0
            h-screen
            w-[420px]
            bg-[#050505]
            text-white
            border-l border-white/10
            z-[100]
            flex
            flex-col
          "
          >

            {/* HEADER */}
            <div className="p-6 border-b border-white/10">

              <div className="flex justify-between items-center mb-3">

                <div>

                  <p className="uppercase tracking-[6px] text-xs text-[#d4b06a] font-semibold">

                    Amber Cart

                  </p>

                  <h2 className="text-5xl font-bold mt-2 text-white">

                    Shopping Cart

                  </h2>

                </div>

                <button
                  onClick={onClose}
                  className="text-white hover:text-[#d4b06a] transition"
                >

                  <X size={30} />

                </button>

              </div>

            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto">

              {cartItems.length === 0 ? (

                <div className="p-10 text-center text-white/50">

                  Cart is empty

                </div>

              ) : (

                cartItems.map((item) => (

                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="p-6 border-b border-white/10"
                  >

                    <div className="flex gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-3xl object-cover"
                      />

                      <div className="flex-1">

                        <div className="flex justify-between">

                          <div>

                            <h3 className="font-bold text-xl text-white">

                              {item.name}

                            </h3>

                            <p className="text-white/50 text-sm mt-1">

                              Size: {item.size}

                            </p>

                            <p className="text-white/50 text-sm">

                              Color: {item.color}

                            </p>

                            <p className="text-[#d4b06a] text-3xl font-bold mt-3">

                              ${item.price}

                            </p>

                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                          >

                            <Trash2
                              size={18}
                              className="text-white/40 hover:text-red-400 transition"
                            />

                          </button>

                        </div>

                        {/* QTY */}
                        <div className="flex items-center gap-4 mt-5">

                          <button
                            onClick={() =>
                              decreaseQty(item.id)
                            }
                            className="
                            w-9 h-9
                            rounded-full
                            border border-white/10
                            bg-white/5
                            text-white
                            flex items-center justify-center
                            hover:bg-[#d4b06a]
                            hover:text-black
                            transition
                          "
                          >

                            <Minus size={14} />

                          </button>

                          <span className="font-bold text-lg">

                            {item.quantity}

                          </span>

                          <button
                            onClick={() =>
                              increaseQty(item.id)
                            }
                            className="
                            w-9 h-9
                            rounded-full
                            border border-white/10
                            bg-white/5
                            text-white
                            flex items-center justify-center
                            hover:bg-[#d4b06a]
                            hover:text-black
                            transition
                          "
                          >

                            <Plus size={14} />

                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 p-6">

              <div className="flex justify-between mb-8">

                <span className="uppercase tracking-[4px] text-white/50">

                  Subtotal

                </span>

                <span className="text-5xl font-bold text-[#d4b06a]">

                  ${subtotal}

                </span>

              </div>

              <button
  onClick={() => {

    onClose();

    navigate('/checkout');

  }}

  className="
  w-full
  bg-[#d4b06a]
  text-black
  py-4
  rounded-full
  uppercase
  tracking-[4px]
  text-sm
  font-semibold
  hover:scale-[1.02]
  transition
"
>

  Checkout

</button>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}