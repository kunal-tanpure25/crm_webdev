import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import Customers from './Customers';
import RegisterCustomer from './RegisterCustomer';
import Login from './Login';
import RegisterUser from './RegisterUser';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/register" element={<RegisterCustomer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
