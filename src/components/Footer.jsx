import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
      <p>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
