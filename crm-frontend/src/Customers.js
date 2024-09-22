import React, { useEffect, useState } from 'react';
import axios from './api/axiosConfig';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/customers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setCustomers(response.data);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError('Failed to fetch customers.');
        }
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      {error && <p>{error}</p>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name} - {customer.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
