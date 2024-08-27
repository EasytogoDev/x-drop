/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Suporte = lazy(() => import('../../container/suporte'));
const Chamados = lazy(() => import('../../container/suporte/chamados'));

function SuporteRoutes() {
  return (
    <Routes>
      <Route path="suporte" element={<Suporte />} />
      <Route path="chamados" element={<Chamados />} />

    </Routes>
  );
}

export default SuporteRoutes;
