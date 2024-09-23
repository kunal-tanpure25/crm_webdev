import axios from 'axios';

// Set the base URL for all API requests
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  // Flask backend running on port 5000
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
