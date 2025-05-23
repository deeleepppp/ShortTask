import React from 'react';
import { Link } from 'react-router-dom';
import  ROUTES  from '../constant/routes';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">React Component Navigator</h1>
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Link to={ROUTES.COUNTER}>
          <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-lg font-semibold">
            Counter
          </button>
        </Link>
        <Link to={ROUTES.LIVE_INPUT}>
          <button className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg font-semibold">
            Live Input
          </button>
        </Link>
        <Link to={ROUTES.GREETING}>
          <button className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-lg font-semibold">
            Greeting
          </button>
        </Link>
        <Link to={ROUTES.USER_LIST}>
          <button className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-lg font-semibold">
            User List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;