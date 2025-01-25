import React, { useState } from "react";
import { login } from "../hooks/useAuth";
import "../styles/Auth.css";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful! Welcome back to E-Shop.");
      // Optionally clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="auth-page">
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  
  );
};

export default LoginPage;
