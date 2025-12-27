"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-72 h-full bg-white z-50 p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
          >
            <button onClick={onClose} className="mb-8 text-xl">
              ✕
            </button>

            <nav className="flex text-gray-900 flex-col gap-6 text-lg font-medium">
              <Link onClick={onClose} href="/">
                خانه
              </Link>
              <Link onClick={onClose} href="/product">
                فروشگاه
              </Link>
              <Link onClick={onClose} href="/about">
                درباره ما
              </Link>
              <Link onClick={onClose} href="/content">
                تماس
              </Link>
              <Link onClick={onClose} href="/cartpage">
                🛒 سبد خرید
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
