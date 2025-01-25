import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img
        src={product.image || product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.name || product.title}
        className="product-image"
      />

      {/* Product Name */}
      <h3 className="product-name">{product.name || product.title}</h3>

      {/* Product Price */}
      {product.price && <p className="product-price">${product.price}</p>}

      {/* Details Link */}

      {product.id && (
        <Link to={`/product/${product.id}`} className="details-link">
          View Details
        </Link>

      )}
    </div>
  );
};

export default ProductCard;
