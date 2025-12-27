"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // مقدار اولیه از localStorage گرفته می‌شود بدون استفاده از useEffect
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist)
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)!;
