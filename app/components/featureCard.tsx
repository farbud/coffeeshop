/* eslint-disable @next/next/no-img-element */
"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

type FeatureCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  available?: boolean;
};

export default function FeatureCard({
  id,
  title,
  price,
  image,
  available = true,
}: FeatureCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  if (!image) return null;

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover mb-2 rounded"
        onClick={() => router.push(`/product/${id}`)}
      />
      <h3 className="font-bold text-gray-900 text-lg text-center">{title}</h3>
      <p className="text-gray-700">{price.toLocaleString()} تومان</p>
      {available ? (
        <button
          onClick={() => addToCart({ id, title, price, qty: 1 })}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          افزودن به سبد
        </button>
      ) : (
        <p className="mt-2 text-red-500 font-bold">ناموجود</p>
      )}
    </div>
  );
}
