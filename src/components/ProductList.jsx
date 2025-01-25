import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/api"; // API service to fetch products
import ProductCard from "./ProductCard"; // Component to display individual product

const ProductList = ({ searchQuery = "", filters = {} }) => {
  const [products, setProducts] = useState([]); // Original product list
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products from API
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(); // Fetch all products
        setProducts(data); // Set original product list
        setFilteredProducts(data); // Initially show all products
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products."); // Set error message
      } finally {
        setLoading(false); // Stop loading state
      }
    };
    getProducts();
  }, []);

  // Apply filters: Search, Category, and Price
  useEffect(() => {
    let filteredData = [...products];

    // Apply search filter
    if (searchQuery) {
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      filteredData = filteredData.filter(
        (product) =>
          product.category?.name?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply price filter
    if (filters.price) {
      const priceRange =
        filters.price === "low"
          ? [0, 50]
          : filters.price === "medium"
          ? [51, 100]
          : [101, Infinity];

      filteredData = filteredData.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    setFilteredProducts(filteredData); // Update filtered products
  }, [searchQuery, filters, products]);

  // Graceful fallback for loading, error, or no products
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
  if (filteredProducts.length === 0)
    return <p>No products found. Try adjusting the filters or search query!</p>;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
