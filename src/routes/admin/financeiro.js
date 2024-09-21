/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Financeiro = lazy(() => import('../../container/financeiro'));
const Geral = lazy(() => import('../../container/financeiro/geral'));
const Painel = lazy(() => import('../../container/financeiro/painel'));
const Entradas = lazy(() => import('../../container/financeiro/entradas'));
const Saidas = lazy(() => import('../../container/financeiro/saidas'));
const Fluxo = lazy(() => import('../../container/financeiro/fluxo'));
const Lançamentos = lazy(() => import('../../container/financeiro/lancamentos'));

function FinanceiroRoutes() {
  return (
    <Routes>
      <Route path="fiscal" element={<Financeiro />} />
      <Route path="geral" element={<Geral />} />
      <Route path="painel" element={<Painel />} />
      <Route path="entradas" element={<Entradas />} />
      <Route path="saidas" element={<Saidas />} />
      <Route path="fluxo" element={<Fluxo />} />
      <Route path="lancamentos" element={<Lançamentos />} />
    </Routes>
  );
}

export default FinanceiroRoutes;
