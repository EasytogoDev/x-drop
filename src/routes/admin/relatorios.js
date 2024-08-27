/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Relatorios = lazy(() => import('../../container/relatorios'));
const RelatoriosCompras = lazy(() => import('../../container/relatorios/compras'));
const RelatoriosFiscal = lazy(() => import('../../container/relatorios/fiscal'));
const RelatoriosVendas = lazy(() => import('../../container/relatorios/vendas'));

function RelatoriosRoutes() {
  return (
    <Routes>
      <Route path="relatorios" element={<Relatorios />} />
      <Route path="compras" element={<RelatoriosCompras />} />
      <Route path="fiscal" element={<RelatoriosFiscal />} />
      <Route path="vendas" element={<RelatoriosVendas />} />
    </Routes>
  );
}

export default RelatoriosRoutes;
