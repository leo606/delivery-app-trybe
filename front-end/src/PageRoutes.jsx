import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default PageRoutes;
