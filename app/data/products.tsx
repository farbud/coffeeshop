import { ReactNode } from "react";

export type Product = {
  description: ReactNode;
  id: number;
  title: string;
  price: number;
  image: string;
  available: boolean;
  createdAt: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Nescafe",
    price: 120000,
    image: "/images/product1.png",
    available: true,
    createdAt: "2025-12-01",
    description: undefined,
  },

  {
    id: 3,
    title: "Lvaz",
    price: 220000,
    image: "/images/product3.png",
    available: false,
    createdAt: "2025-10-20",
    description: undefined,
  },
  {
    id: 5,
    title: "Gold",
    price: 300000,
    image: "/images/product5.png",
    available: true,
    createdAt: "2025-10-23",
    description: undefined,
  },
  {
    id: 6,
    title: "Chocolate",
    price: 250000,
    image: "/images/product6.png",
    available: true,
    createdAt: "2025-10-23",
    description: undefined,
  },
  {
    id: 7,
    title: "delicious",
    price: 70000,
    image: "/images/product7.png",
    available: false,
    createdAt: "2025-9-20",
    description: undefined,
  },
];
