import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  AppBar,
  Toolbar
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="Dashboard-root">
      {/* Navbar */}
      <AppBar position="static" className="Dashboard-navbar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            SK-Craft CRM
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/customers">Customers</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom align="center" color="white">
          Welcome to the CRM Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <Avatar style={{ margin: 'auto', backgroundColor: '#3f51b5' }}>
                <AccountCircleIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom color="white">Login</Typography>
              <Typography variant="body2" color="grey.400" style = {{paddingBottom : '12px' }}>
                Access your account and manage your customers.
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/login" className="Dashboard-button">
                Go to Login
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <Avatar style={{ margin: 'auto', backgroundColor: '#3f51b5' }}>
                <PeopleIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom color="white">Customers</Typography>
              <Typography variant="body2" color="grey.400" style = {{paddingBottom : '12px' }}>
                View and manage your customer database.
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/customers" className="Dashboard-button">
                View Customers
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <Avatar style={{ margin: 'auto', backgroundColor: '#3f51b5' }}>
                <AddCircleIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom color="white">Add Customer</Typography>
              <Typography variant="body2" color="grey.400" style = {{paddingBottom : '12px' }}>
                Register a new customer easily in the system.
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/register" className="Dashboard-button">
                Add New Customer
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box my={5} textAlign="center">
          <Typography variant="h5" gutterBottom color="white">Get Started with Your CRM</Typography>
          <Typography variant="body1" color="grey.400">
            Sign up today and discover the power of managing your customer relationships seamlessly.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/register" style={{ marginTop: '20px'}}className='Dashboard-button'>
            Sign Up Now
          </Button>
        </Box>
      </Container>

      {/* Footer Section */}
      <footer className="Dashboard-footer">
        <div className="Dashboard-footerContent">
          <Typography variant="body1">
            SuiteCRM is the world's #1 open source CRM platform that gives you ultimate control over your data and customer relationships.
          </Typography>
          <Box mt={2}>
            <Typography variant="body2">Quick Links:</Typography>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>About</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Contact Us</Link>
            <Link to="/news" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>News & Press</Link>
          </Box>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
