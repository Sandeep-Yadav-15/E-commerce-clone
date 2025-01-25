import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import ErrorBoundary from "../components/ErrorBoundary";
//plz import Contact us form
import ContactUs from "../components/ContactUs";


function HomePage() {
  const [products, setProducts] = useState([]); // Full list of products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products to display
  const [categories] = useState(["Electronics", "Fashion", "Home"]); // Available categories
  const [filters, setFilters] = useState({ category: "", price: "" }); // Applied filters
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  // Fetch products from API or mock data
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = [
        { id: 1, title: "Laptop", price: 800, category: "Electronics" },
        { id: 2, title: "Smartphone", price: 600, category: "Electronics" },
        { id: 3, title: "T-Shirt", price: 30, category: "Fashion" },
        { id: 4, title: "Sofa", price: 200, category: "Home" },
      ];
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Show all products initially
    };
    fetchData();
  }, []);

  // Handle Filter functionality
  const handleFilter = (selectedFilters) => {
    let filteredData = [...products];

    // Filter by category
    if (selectedFilters.category) {
      filteredData = filteredData.filter(
        (product) =>
          product.category.toLowerCase() === selectedFilters.category.toLowerCase()
      );
    }

    // Filter by price
    if (selectedFilters.price) {
      const priceRange =
        selectedFilters.price === "low"
          ? [0, 50]
          : selectedFilters.price === "medium"
          ? [51, 100]
          : [101, Infinity];
      filteredData = filteredData.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    setFilteredProducts(filteredData); // Update filtered products
    setFilters(selectedFilters); // Store the selected filters
  };

  // Handle Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filteredData); // Update filtered products
  };

  return (
    <div>
      {/* Center the title */}
      <style>
        {`
        h1 {
          text-align: center;
        }
        `}
      </style>
      <h1>Welcome to E-Shop</h1>

      {/* Search and Filter */}
      <SearchBar onSearch={handleSearch} />
      <Filters categories={categories} onFilter={handleFilter} />

      {/* Wrap Product List in ErrorBoundary */}
      <ErrorBoundary>
        <ProductList products={filteredProducts} searchQuery={searchQuery} filters={filters} />
      </ErrorBoundary>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Amazing shopping experience! The products arrived quickly and were just as described."</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The customer service was fantastic. I will definitely shop here again!"</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="../assets/image/featured-product1.webp" alt="Featured Product 1" />
            <h3>Featured Product 1</h3>
            <p>$120</p>
            <button>View Details</button>
          </div>
          <div className="product-card">
            <img src="../assets/image/featured-product2.webp" alt="Featured Product 2" />
            <h3>Featured Product 2</h3>
            <p>$85</p>
            <button>View Details</button>
          </div>
        </div>
      </div>

      {/* Sale Section */}
      <div className="sale">
        <h2>Big Sale - Up to 50% Off</h2>
        <p>Don't miss out on our biggest sale of the season! Shop now and save big on select items.</p>
        <button className="sale-button" onClick={() => window.open('https://www.flipkart.com', '_blank')}>Shop Sale</button>
      </div>
      <ContactUs />
    </div>
  );
}

export default HomePage;
