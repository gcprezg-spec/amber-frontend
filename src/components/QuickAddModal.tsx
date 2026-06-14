import { useState } from 'react';

import { X, Minus, Plus } from 'lucide-react';

import { useCart } from './CartContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

export default function QuickAddModal({
  isOpen,
  onClose,
  product,
}: Props) {

  const { addToCart } = useCart();

  const [size, setSize] =
    useState('M');

  const [color, setColor] =
    useState('Black');

  const [qty, setQty] =
    useState(1);

  if (!isOpen || !product) return null;

  const handleAdd = () => {

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size,
      color,
      quantity: qty,
    });

    onClose();

  };

  return (

    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">

      <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] w-full max-w-5xl overflow-hidden relative grid md:grid-cols-2">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20"
        >
          <X className="text-white" />
        </button>

        {/* IMAGE */}
        <div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />

        </div>

        {/* CONTENT */}
        <div className="p-10">

          <p className="text-gold uppercase tracking-[6px] text-xs mb-4">

            Amber Collection

          </p>

          <h2 className="text-white text-5xl font-bold mb-6">

            {product.name}

          </h2>

          <p className="text-gold text-4xl mb-8">

            ${product.price}

          </p>

          {/* COLORS */}
          <h3 className="text-white uppercase tracking-[4px] text-sm mb-4">

            Color

          </h3>

          <div className="flex gap-3 mb-10">

            {['Black', 'White', 'Navy'].map((c) => (

              <button
                key={c}
                onClick={() => setColor(c)}
                className={`px-5 py-3 rounded-full border ${
                  color === c
                    ? 'bg-gold text-black border-gold'
                    : 'border-white/10 text-white'
                }`}
              >

                {c}

              </button>

            ))}

          </div>

          {/* SIZE */}
          <h3 className="text-white uppercase tracking-[4px] text-sm mb-4">

            Size

          </h3>

          <div className="flex gap-3 mb-10">

            {['S', 'M', 'L', 'XL', '2XL'].map((s) => (

              <button
                key={s}
                onClick={() => setSize(s)}
                className={`w-14 h-14 rounded-full border ${
                  size === s
                    ? 'bg-gold text-black border-gold'
                    : 'border-white/10 text-white'
                }`}
              >

                {s}

              </button>

            ))}

          </div>

          {/* QTY */}
          <div className="flex items-center gap-4 mb-10">

            <button
              onClick={() =>
                setQty(Math.max(1, qty - 1))
              }
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center"
            >

              <Minus size={18} />

            </button>

            <span className="text-white text-2xl">

              {qty}

            </span>

            <button
              onClick={() =>
                setQty(qty + 1)
              }
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center"
            >

              <Plus size={18} />

            </button>

          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-gold text-black py-5 rounded-full uppercase tracking-[4px] font-semibold"
          >

            Add To Cart

          </button>

        </div>

      </div>

    </div>

  );

}