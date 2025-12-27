"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  if (cart.length === 0)
    return <p className="text-center mt-24">سبد خرید شما خالی است</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">سبد خرید</h1>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div>{item.title}</div>
            <div>
              {item.qty} × {item.price.toLocaleString()}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <p className="text-xl font-bold mt-4">
        مجموع: {total.toLocaleString()} تومان
      </p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          خالی کردن سبد
        </button>
        <Link
          href="/checkoutpage"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          پرداخت
        </Link>
      </div>
    </div>
  );
}
