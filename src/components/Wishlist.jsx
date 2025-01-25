import React from "react";

function Wishlist({ wishlist, onRemove }) {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: "0" }}>
          {wishlist.map((product) => (
            <li
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span>{product.title}</span>
              <button onClick={() => onRemove(product.id)} style={{ padding: "4px 8px", cursor: "pointer" }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
