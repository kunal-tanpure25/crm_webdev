// Customers.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/customers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCustomers(response.data);
      } catch (error) {
        setError("Failed to fetch customers");
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="customers-container">
      <h1>Customers</h1>
      {error && <p className="error">{error}</p>}
      <ul className="customers-list">
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
