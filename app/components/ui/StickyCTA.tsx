"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => router.push("/cart")}
      className="fixed bottom-4 right-4 bg-yellow-500 text-white py-3 px-6 rounded shadow-lg z-50 hover:bg-yellow-600 transition"
    >
      رفتن به سبد خرید 🛒
    </button>
  );
}
