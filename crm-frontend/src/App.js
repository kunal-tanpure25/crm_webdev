import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Customers from './Customers';
import RegisterCustomer from './RegisterCustomer';
import RegisterUser from './RegisterUser'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/register" element={<RegisterCustomer />} />
        <Route path="/register-user" element={<RegisterUser />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
