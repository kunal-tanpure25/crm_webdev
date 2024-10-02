import React, { useState } from "react";
import axios from "../../api/axiosConfig"; // Ensure your axios instance is imported

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // Default role can be 'admin'
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get the JWT token

    try {
      const response = await axios.post(
        "/register",
        {
          username,
          password,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token for authentication
          },
        }
      );

      if (response.status === 201) {
        setSuccess("User registered successfully!");
        setError("");
        // Optionally reset form fields
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setError(error.response?.data.message || "Failed to register user.");
      setSuccess("");
    }
  };

  return (
    <div>
      <h2>Register New User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Register User</button>
      </form>
    </div>
  );
};

export default RegisterUser;
