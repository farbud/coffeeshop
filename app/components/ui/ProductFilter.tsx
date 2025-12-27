"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

type FiltersProps = {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
};

export default function ProductFilters({
  onFilterChange,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">همه محصولات</option>
        <option value="available">موجود</option>
        <option value="unavailable">ناموجود</option>
      </select>

      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="newest">تازه</option>
        <option value="oldest">قدیمی</option>
        <option value="price-asc">قیمت کم به زیاد</option>
        <option value="price-desc">قیمت زیاد به کم</option>
      </select>
    </div>
  );
}
