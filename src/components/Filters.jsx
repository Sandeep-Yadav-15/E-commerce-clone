import React, { useState } from "react";

function Filters({ categories, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleFilter = () => {
    onFilter({ category: selectedCategory, price: priceRange });
  };

  return (
    <div style={{ marginBottom: "16px", marginLeft: "70px" }}>
      <h3>Filters</h3>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <label style={{ marginRight: "16px" }}>
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ marginLeft: "8px", padding: "4px", border: "1px solid #ccc", borderRadius: "4px" }}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price Range:
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            style={{ marginLeft: "8px", padding: "4px", border: "1px solid #ccc", borderRadius: "4px" }}
          >
            <option value="">Any</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <div style={{ display: "flex", marginLeft: "130px" }}>
        <button onClick={handleFilter} style={{ marginTop: "8px", padding: "8px 16px", cursor: "pointer" }}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
