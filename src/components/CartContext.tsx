import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  cartCount: number;
  subtotal: number;
}

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cartItems, setCartItems] =
    useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {

    setCartItems((prev) => {

      const existing =
        prev.find(
          (p) =>
            p.id === item.id &&
            p.size === item.size &&
            p.color === item.color
        );

      if (existing) {

        return prev.map((p) =>
          p.id === item.id &&
          p.size === item.size &&
          p.color === item.color
            ? {
                ...p,
                quantity:
                  p.quantity + 1,
              }
            : p
        );

      }

      return [...prev, item];

    });

  };

  const removeFromCart = (
    id: number
  ) => {

    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };

  const increaseQty = (
    id: number
  ) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  const decreaseQty = (
    id: number
  ) => {

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );

  };

  const cartCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  const subtotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartCount,
        subtotal,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  const context =
    useContext(CartContext);

  if (!context) {

    throw new Error(
      'useCart must be used inside CartProvider'
    );

  }

  return context;

}