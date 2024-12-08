import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL when deployed

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
