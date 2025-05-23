import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './Router/RouteConfig';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <RouteConfig />
      </div>
    </Router>
  );
};

export default App;