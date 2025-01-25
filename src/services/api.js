// src/services/api.js

const API_URL = "https://api.escuelajs.co/api/v1";

// Helper function to handle API calls
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "API Error");
  }
  return response.json();
};

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch products with dynamic filters (category, price range, search query)
export const fetchProductsWithFilters = async ({ category, price, search } = {}) => {
  try {
    const params = new URLSearchParams();

    // Add filters to query parameters if provided
    if (category) params.append("category", category);
    if (price) params.append("price", price);
    if (search) params.append("search", search);

    const response = await fetch(`${API_URL}/products?${params.toString()}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching products with filters:", error);
    throw error;
  }
};
