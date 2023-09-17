import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-8 bg-white shadow-lg rounded'>
        <h1 className='text-2xl mb-4'>Welcome to SSO Demo</h1>
        <Link
          to='/register'
          className='mr-4 px-4 py-2 bg-blue-500 text-white rounded'
        >
          Register
        </Link>
        <Link to='login' className='px-4 py-2 bg-green-500 text-white rounded'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
