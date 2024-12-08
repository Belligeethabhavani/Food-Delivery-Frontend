// frontend/src/components/Register.js
/*import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL when deployed

// API function for registering a user
const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    address: '',
  });

  const { name, email, password, phonenumber, address } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the registerUser function to submit the form data
      const res = await registerUser(formData);
      console.log(res);
      // Handle successful registration (e.g., redirect or show success message)
    } catch (err) {
      console.error('Registration error:', err);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Mobile Number"
          name="phonenumber"
          value={phonenumber}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Address"
          name="address"
          value={address}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;

*/

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    address: '',
  });

  const { name, email, password, phonenumber,address  } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={onSubmit} >
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Mobile Number"
          name="phonenumber"
          value={phonenumber}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Address"
          name="address"
          value={address}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
