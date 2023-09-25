import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [formData, setFormData] = useState({
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
    // server
    try {
      const response = await axios.post('http://localhost:3002/api/signin', {
        username: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        setLoggedInUser(response.data.user);
        setLoginSuccess(true);
        console.log('Login successful', response.data.user);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='mb-[220px]'>
          <Link to='/' className='p-6 bg-blue-600 text-black mb-[250px]'>
            Back
          </Link>
        </div>
        {!loginSuccess ? (
          <div>
            <form
              className='p-8 bg-white shadow-lg rounded'
              onSubmit={handleSubmit}
            >
              <h2 className='text-2xl mb-4'>Login</h2>
              <input
                className='mb-4 w-full p-2 border rounded'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className='mb-4 w-full p-2 border rounded'
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />

              <button className='w-full px-4 py-2 bg-green-500 text-white rounded'>
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className='p-8 bg-white shadow-lg rounded'>
            <h2 className='text-2xl mb-4'>Login Successful!</h2>
            <p>{`You are now logged in ${loggedInUser.userName}.`}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
