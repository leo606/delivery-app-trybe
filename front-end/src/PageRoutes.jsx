import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Register from './pages/register/Register';
import Orders from './pages/orders/Orders';
import Checkout from './pages/checkout/Checkout';
import OrderDetails from './pages/orderDetails/OrderDetails';
import Manage from './pages/manage/Manage';
import Seller from './pages/seller/Seller';

function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/orders/:saleId" element={ <OrderDetails /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/seller/orders" element={ <Seller /> } />
      <Route exact path="/seller/orders/:saleId" element={ <p>Detalhes</p> } />
      <Route exact path="/admin/manage" element={ <Manage /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default PageRoutes;
