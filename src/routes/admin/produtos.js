/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Produtos = lazy(() => import('../../container/produtos')); 
const PainelAnalitico = lazy(() => import('../../container/produtos/pages/painelAnalitico/painel')); 
const CriarKits = lazy(() => import('../../container/produtos/pages/criarKits/criarKits'));
const MeusProdutos = lazy(() => import('../../container/produtos/pages/meusProdutos/meusProdutos'));

function ProdutosRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Produtos />} />
      <Route path="painel/" element={<PainelAnalitico />} />
      <Route path="criar-kits/" element={<CriarKits />} />
      <Route path="meus-produtos/" element={<MeusProdutos />} />
    </Routes>
  );
}

export default ProdutosRoutes;
