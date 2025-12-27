import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";
import { CartProvider } from "./context/CartContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Store",
  description: "Specialty Coffee Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-neutral-50 text-neutral-900">
        <CartProvider>
          <Header />
          <main className="pt-20">{children}</main>
  
        </CartProvider>
      </body>
    </html>
  );
}
