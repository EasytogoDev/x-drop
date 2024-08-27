import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Estoque = lazy(() => import('../../container/estoque'));
const Armazens = lazy(() => import('../../container/estoque/Armazens'));
const LocaisArmazens = lazy(() => import('../../container/estoque/LocaisArmazens'));
const Lotes = lazy(() => import('../../container/estoque/Lotes'));
const Separacao = lazy(() => import('../../container/estoque/Separacao'));
const Checkout = lazy(() => import('../../container/estoque/Checkout'));
const Etiquetas = lazy(() => import('../../container/estoque/Etiquetas'));
const Expedicao = lazy(() => import('../../container/estoque/Expedicao'));
const Recebimento = lazy(() => import('../../container/estoque/Recebimento'));
const Devolucao = lazy(() => import('../../container/estoque/Devolucao'));

function EstoqueRoute() {
  return (
    <Routes>
      <Route path="estoque" element={<Estoque />} />
      <Route exact path="armazens" element={<Armazens />} />
      <Route exact path="locais-armazens" element={<LocaisArmazens />} />
      <Route exact path="lotes" element={<Lotes />} />
      <Route exact path="separacao" element={<Separacao />} />
      <Route exact path="checkout" element={<Checkout />} />
      <Route exact path="etiquetas" element={<Etiquetas />} />
      <Route exact path="expedicao" element={<Expedicao />} />
      <Route exact path="recebimento" element={<Recebimento />} />
      <Route exact path="devolucao" element={<Devolucao />} />
    </Routes>
  );
}

export default EstoqueRoute;
