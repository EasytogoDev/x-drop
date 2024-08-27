import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Vendas = lazy(() => import('../../container/vendas')); // Fixed the casing here
const Pedidos = lazy(() => import('../../container/vendas/pages/pedidos/pedidos')); // Fixed the casing here
const PedidosManuais = lazy(() => import('../../container/vendas/pages/pedidoManual/pedidosManual')); // Fixed the casing here
const Devolucao = lazy(() => import('../../container/vendas/pages/devolucao/devolucao')); // Fixed the casing here

function VendasRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Vendas />} />
      <Route path="pedidos/" element={<Pedidos />} />
      <Route path="pedido-manual/" element={<PedidosManuais />} />
      <Route path="devolucao/" element={<Devolucao />} />
    </Routes>
  );
}

export default VendasRoutes;
