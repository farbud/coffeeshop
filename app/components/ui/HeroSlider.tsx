"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/app/data/products";

export default function HeroSlider() {
  const heroProducts = products.slice(0, 2); // ✅ فقط ۳ تا

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const product = heroProducts[index];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="object-contain mx-auto"
            priority
          />

          <h2 className="mt-4 text-xl font-bold">{product.title}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
