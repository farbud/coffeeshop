/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type CoffeeDrop = {
  left: string;
  duration: number;
  delay: number;
  scale: number;
  opacity: number;
};

export default function CoffeeRain() {
  const [drops, setDrops] = useState<CoffeeDrop[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      const generatedDrops: CoffeeDrop[] = Array.from({ length: 80 }).map(
        () => ({
          left: `${Math.random() * 100}%`,
          duration: 8 + Math.random() * 6,
          delay: Math.random() * 5,
          scale: 0.5 + Math.random() * 0.8,
          opacity: 0.3 + Math.random() * 0.5,
        })
      );
      setDrops(generatedDrops);
    }, 0);

    return () => clearTimeout(id);
  }, []);

  if (drops.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: drop.left,
            scale: drop.scale,
            opacity: drop.opacity,
          }}
          initial={{ y: -100 }}
          animate={{ y: "170vh" }} // پایین صفحه کامل
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        >
          <img
            src="/coffee.png" // تصویر شفاف واقعی
            alt="coffee bean"
            width={24}
            height={24}
            style={{ display: "block", background: "transparent" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
