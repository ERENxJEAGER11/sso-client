import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // server
  };

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='mb-[220px]'>
          <Link to='/' className='p-6 bg-blue-600 text-black mb-[250px]'>
            Back
          </Link>
        </div>
        <div>
          <form
            className='p-8 bg-white shadow-lg rounded'
            onSubmit={handleSubmit}
          >
            <h2 className='text-2xl mb-4'>Login</h2>

            <input
              className='mb-4 w-full p-2 border rounded'
              type='email'
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
      </div>
    </>
  );
}

export default Login;
