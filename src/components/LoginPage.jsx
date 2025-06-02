import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage("Invalid username or password");
      
    } else {
      setMessage("Welcome, user!");
      setIsLoggedIn(true); // Hide form
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login Page</h1>

      {/* Only show form if not logged in */}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Message shown in all cases */}
      {message && (
        <div
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "18px",
            color: message === "Welcome, user!" ? "green" : "red",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
