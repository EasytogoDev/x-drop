import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Assinaturas = lazy(() => import('../../container/assinaturas'));
const AssinaturasOpen = lazy(() => import('../../container/assinaturas/assinaturasOpen'));

function FinanceiroRoutes() {
  return (
    <Routes>
      <Route path="assinaturas" element={<Assinaturas />} />
      <Route path="assinaturasOpen" element={<AssinaturasOpen />} />
    </Routes>
  );
}

export default FinanceiroRoutes;
