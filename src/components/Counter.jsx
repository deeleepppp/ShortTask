import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Counter</h2>
      <p className="text-2xl font-bold text-blue-600 mb-4">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;