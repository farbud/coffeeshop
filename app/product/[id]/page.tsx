/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

export default function ProductPage() {
  const params = useParams();
  const product = products.find(
    (p: { id: number }) => p.id === Number(params.id)
  );
  const { addToCart } = useCart();

  if (!product) return <p className="text-center mt-24">محصول پیدا نشد</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-cover rounded"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">
            {product.price.toLocaleString()} تومان
          </p>
          {!product.available && (
            <p className="text-red-500 font-bold mb-4">ناموجود</p>
          )}
        </div>
        {product.available && (
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1,
              })
            }
            className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition"
          >
            افزودن به سبد
          </button>
        )}
      </div>
    </div>
  );
}
