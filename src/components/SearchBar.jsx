import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return ( 
  
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px", justifyContent: "center" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={{ padding: "8px", width: "250px", border: "1px solid #ccc", borderRadius: "4px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
