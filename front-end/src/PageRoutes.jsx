import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login /> } />
    </Routes>
  );
}

export default PageRoutes;
