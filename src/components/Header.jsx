import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import useTheme
import "../styles/Header.css";

function Header() {
  const { theme = "light", toggleTheme = () => console.warn("toggleTheme not defined!") } = useTheme();

  return (
    <header className={`header ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="logo">
        <Link to="/">E-Shop</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}


export default Header;
