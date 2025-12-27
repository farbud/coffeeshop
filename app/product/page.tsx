"use client";

import { useState, useMemo } from "react";
import FeatureCard from "@/app/components/featureCard";
import ProductFilters from "@/app/components/ui/ProductFilter";
import { products } from "@/app/data/products"; // ← اینو اضافه کن

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filter === "available") filtered = filtered.filter((p) => p.available);
    if (filter === "unavailable")
      filtered = filtered.filter((p) => !p.available);

    if (sort === "newest")
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    if (sort === "oldest")
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [filter, sort]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">فروشگاه</h1>
      <ProductFilters onFilterChange={setFilter} onSortChange={setSort} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <FeatureCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}
