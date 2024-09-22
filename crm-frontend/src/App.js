import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Customers from './Customers';
import RegisterCustomer from './RegisterCustomer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/register" element={<RegisterCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
