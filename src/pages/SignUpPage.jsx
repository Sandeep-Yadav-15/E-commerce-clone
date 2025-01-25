import React, { useState } from "react";
import { signup } from "../hooks/useAuth";
import "../styles/Auth.css";


function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert("Signup successful! Welcome to E-Shop.");
      // Optionally clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="auth-page">
  <div className="auth-container">
    <h1>Sign Up</h1>
    <form onSubmit={handleSignup}>
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
      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>

  );
}

export default SignUpPage;
