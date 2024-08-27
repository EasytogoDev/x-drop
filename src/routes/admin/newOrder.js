import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const CriarPedido = lazy(() => import('../../container/orders'));
const NewOrders = lazy(() => import('../../container/orders/newOrder'));

function FinanceiroRoutes() {
  return (
    <Routes>
      <Route path="orders" element={<CriarPedido />} />
      <Route path="newOrder" element={<NewOrders />} />
    </Routes>
  );
}

export default FinanceiroRoutes;
