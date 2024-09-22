import React, { useState } from 'react';
import axios from 'axios';

const RegisterCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage

    try {
      const response = await axios.post('http://localhost:5000/customers', {
        name,
        email,
        phone,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        setSuccess('Customer registered successfully!');
        setError('');
      }
    } catch (error) {
      console.error(error.response.data); // Log the error response for debugging
      setError(error.response.data.message || 'Failed to register customer.');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Register Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
