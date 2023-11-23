import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
      const response = await axios.post('http://localhost:3001/register', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <p className='label'>Username: </p>
      <input type="text" id="username" name="username" className="input" value={formData.username} onChange={handleChange} />
      <p className='label'>Email: </p>
      <input type="email" id="email" name="email" className="input" value={formData.email} onChange={handleChange} />
      <p className='label'>Password: </p>
      <input type="password" id="password" name="password" className="input" value={formData.password} onChange={handleChange} />
      <br />
      <br />
      <br />
      <button className='button' onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
