import './Login.css'
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);

      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <p className='label'>Username: </p>
      <input type="text" id="username" name="username" className="input" value={formData.username} onChange={handleChange} />
      <p className='label'>Password: </p>
      <input type="password" id="password" name="password" className="input" value={formData.password} onChange={handleChange} />
      <br />
      <br />
      <br />
      <button className='button' onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
