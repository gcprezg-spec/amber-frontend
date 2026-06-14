import {
  useState,
  useEffect,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { getProduct } from '../services/productService';

import { useCart } from '../components/CartContext';

import {
  ShoppingBag,
  Minus,
  Plus,
} from 'lucide-react';

import Header from '../components/Header';

import Footer from '../components/Footer';



export default function ProductPage() {

  const { id } = useParams();

  const navigate = useNavigate();

const [product, setProduct] =
  useState<any>(null);

useEffect(() => {

  if (!id) return;

  getProduct(Number(id))
    .then(setProduct)
    .catch(console.error);

}, [id]);

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] =
    useState('M');

  const [selectedColor, setSelectedColor] =
    useState('black');

  const [quantity, setQuantity] =
    useState(1);

    if (!product) {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      Product Not Found

    </div>

  );

}

  return (

    <>

      {/* NAVBAR */}
      <Header />

      <main className="bg-[#050505] text-white min-h-screen">

        {/* PRODUCT SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-44 pb-32">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* LEFT IMAGE */}
            <div
              className="
              rounded-[40px]
              overflow-hidden
              bg-[#111]
              border border-white/10
            "
            >

              <img
                src={product.image}
                alt={product.name}
                className="
                w-full
                h-[850px]
                object-cover
              "
              />

            </div>

            {/* RIGHT CONTENT */}
            <div className="pt-8">

              {/* CATEGORY */}
              <p
                className="
                uppercase
                tracking-[6px]
                text-[#d4b06a]
                text-sm
                mb-5
              "
              >

                {product.category}

              </p>

              {/* TITLE */}
              <h1
                className="
                text-5xl
                md:text-7xl
                font-semibold
                leading-[0.95]
                mb-6
              "
              >

                {product.name}

              </h1>

              {/* PRICE */}
              <p
                className="
                text-4xl
                text-[#d4b06a]
                font-medium
                mb-10
              "
              >

                ${product.price}.00

              </p>

              {/* DESCRIPTION */}
              <p
                className="
                text-white/60
                text-lg
                leading-relaxed
                mb-12
                max-w-xl
              "
              >

                {product.description}

              </p>

              {/* COLORS */}
              <div className="mb-10">

                <p className="uppercase tracking-[4px] text-sm mb-5">

                  Color

                </p>

                <div className="flex items-center gap-4">

                  <button

                    onClick={() =>
                      setSelectedColor('black')
                    }

                    className={`
                    w-12 h-12 rounded-full
                    bg-black border-2
                    ${
                      selectedColor === 'black'
                        ? 'border-[#d4b06a]'
                        : 'border-white/20'
                    }
                  `}
                  />

                  <button

                    onClick={() =>
                      setSelectedColor('white')
                    }

                    className={`
                    w-12 h-12 rounded-full
                    bg-white border-2
                    ${
                      selectedColor === 'white'
                        ? 'border-[#d4b06a]'
                        : 'border-white/20'
                    }
                  `}
                  />

                  <button

                    onClick={() =>
                      setSelectedColor('navy')
                    }

                    className={`
                    w-12 h-12 rounded-full
                    bg-blue-900 border-2
                    ${
                      selectedColor === 'navy'
                        ? 'border-[#d4b06a]'
                        : 'border-white/20'
                    }
                  `}
                  />

                </div>

              </div>

              {/* SIZES */}
              <div className="mb-12">

                <p className="uppercase tracking-[4px] text-sm mb-5">

                  Size

                </p>

                <div className="flex items-center gap-4 flex-wrap">

                  {[
                    'S',
                    'M',
                    'L',
                    'XL',
                    '2XL',
                  ].map((size) => (

                    <button

                      key={size}

                      onClick={() =>
                        setSelectedSize(size)
                      }

                      className={`
                      w-14 h-14 rounded-full
                      border uppercase text-sm
                      transition duration-300

                      ${
                        selectedSize === size
                          ? 'bg-[#d4b06a] text-black border-[#d4b06a]'
                          : 'border-white/20 text-white hover:border-[#d4b06a]'
                      }
                    `}
                    >

                      {size}

                    </button>

                  ))}

                </div>

              </div>

              {/* ACTIONS */}
              <div className="space-y-5">

                {/* QUANTITY + CART */}
                <div className="flex gap-5">

                  {/* QUANTITY */}
                  <div
                    className="
                    flex items-center
                    border border-white/10
                    rounded-full
                    overflow-hidden
                    bg-white/5
                  "
                  >

                    <button

                      onClick={() =>
                        setQuantity((prev) =>
                          prev > 1
                            ? prev - 1
                            : 1
                        )
                      }

                      className="
                      w-14 h-14
                      flex items-center justify-center
                    "
                    >

                      <Minus size={16} />

                    </button>

                    <span className="w-12 text-center">

                      {quantity}

                    </span>

                    <button

                      onClick={() =>
                        setQuantity((prev) =>
                          prev + 1
                        )
                      }

                      className="
                      w-14 h-14
                      flex items-center justify-center
                    "
                    >

                      <Plus size={16} />

                    </button>

                  </div>

                  {/* ADD TO CART */}
                  <button

  onClick={() => {

    addToCart({

      id: product.id,

      name: product.name,

      image: product.image,

      price: product.price,

      size: selectedSize,

      color: selectedColor,

      quantity,

    });

  }}

  className="
  flex-1
  h-14
  rounded-full
  bg-white
  text-black
  uppercase
  tracking-[3px]
  text-xs
  font-semibold
  flex items-center justify-center gap-3
  hover:bg-[#d4b06a]
  transition duration-300
"
>

  <ShoppingBag size={16} />

  Add To Cart

</button>

                </div>

                

                {/* BUY NOW */}
                <button

  onClick={() => {

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    navigate('/checkout');

  }}

  className="
  w-full
  bg-[#d4b06a]
  text-black
  py-5
  rounded-full
  uppercase
  tracking-[4px]
  font-semibold
"
>

  Buy Now

</button>

              </div>

            </div>

          </div>

        </section>

        

      </main>

      {/* FOOTER */}
      <Footer />

    </>

  );
}