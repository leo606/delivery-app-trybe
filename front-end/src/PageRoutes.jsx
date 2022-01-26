import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Register from './pages/register/Register';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default PageRoutes;
