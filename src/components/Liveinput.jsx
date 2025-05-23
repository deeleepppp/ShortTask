import React, { useState } from 'react';

const LiveInput = () => {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Input</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-xs p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />
      <p className="text-lg text-gray-700">{input || 'Start typing to see your input here'}</p>
    </div>
  );
};

export default LiveInput;