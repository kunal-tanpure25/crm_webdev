import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Update if your backend URL is different

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
};

export const getCustomers = async (token) => {
    return await axios.get(`${API_URL}/customers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Add more functions as needed
