/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Fiscal = lazy(() => import('../../container/fiscal'));
const NotasEntradas = lazy(() => import('../../container/fiscal/notas-entradas'));
const GerenciadorNfe = lazy(() => import('../../container/fiscal/gerenciador-Nfe'));
const NotasSaida = lazy(() => import('../../container/fiscal/notas-saida'));

function FiscalRoutes() {
  return (
    <Routes>
      <Route path="fiscal" element={<Fiscal />} />
      <Route exact path="notas-entradas" element={<NotasEntradas />} />
      <Route exact path="gerenciador-Nfe" element={<GerenciadorNfe />} />
      <Route exact path="notas-saida" element={<NotasSaida />} />
    </Routes>
  );
}

export default FiscalRoutes;
