"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cart, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `خرید انجام شد!\nنام: ${name}\nآدرس: ${address}\nجمع کل: ${total} تومان`
    );
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="آدرس"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded"
        >
          پرداخت
        </button>
      </form>
    </div>
  );
}
