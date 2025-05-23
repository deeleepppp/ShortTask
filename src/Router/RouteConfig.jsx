import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Counter from '../components/Counter';
import LiveInput from '../components/LiveInput';
import Greeting from '../components/Greeting';
import UserList from '../components/UserList';
import  ROUTES  from '../constant/routes';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COUNTER} element={<Counter />} />
      <Route path={ROUTES.LIVE_INPUT} element={<LiveInput />} />
      <Route path={ROUTES.GREETING} element={<Greeting name="Alice" />} />
      <Route path={ROUTES.USER_LIST} element={<UserList />} />
    </Routes>
  );
};

export default RouteConfig;