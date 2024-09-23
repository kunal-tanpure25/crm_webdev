import React, { useEffect, useState } from 'react';
import axios from './api/axiosConfig';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage

      try {
        const response = await axios.get('/customers', {
          headers: {
            Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
          },
        });
        setCustomers(response.data);  // Set the customers in the state
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError('Failed to fetch customers.');
        }
      }
    };

    fetchCustomers();  // Fetch the customers when the component mounts
  }, []);  // Empty dependency array to run only on component mount

  return (
    <div>
      <h2>Customers</h2>
      {error && <p>{error}</p>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name} - {customer.email} - {customer.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
