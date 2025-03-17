// src/App.js
import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* React Logo */}
      <img
        src="/logo.svg" // Replace with the correct path to your React logo
        alt="React Logo"
        className="w-32 h-32 mb-8 animate-spin"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My React App with Tailwind CSS!
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-gray-700">
        Start building your awesome application.
      </p>

      {/* Example Button */}
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
        Get Started
      </button>

      {/* Responsive Example */}
      <div className="mt-8 p-4 bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-red-500">
        <p className="text-white">
          This div changes color based on screen size.
        </p>
      </div>

      {/* Dark Mode Example */}
      <div className="mt-8 p-4 bg-white dark:bg-gray-800">
        <p className="text-black dark:text-white">
          This text changes color in dark mode.
        </p>
      </div>
    </div>
  );
}

export default App;