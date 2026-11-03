import React from "react";

interface EventFilterProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
  categories: string[];
}

export default function EventFilter({
  searchQuery,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div className="event-filter">
      <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Tüm Kategoriler</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}