import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
             <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
        </div>
    );
};

export default Error;