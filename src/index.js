import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import { CartProvider } from "./context/CartContext"; // Ensure CartProvider is also wrapped

import reportWebVitals from './reportWebVitals';
import './styles/style.css';  // Ensure you are importing your custom styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Optional: If you want to start measuring performance, you can pass a function to reportWebVitals
reportWebVitals();
