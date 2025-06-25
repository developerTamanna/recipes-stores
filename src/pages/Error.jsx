import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-5xl font-bold mb-4 text-[#c59d5f]">404</h1>
        <p className="text-xl mb-6 text-gray-300">Oops! The page you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#c59d5f] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
