import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div className="flex justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Hello, {name || 'Guest'}</h2>
    </div>
  );
};

export default Greeting;