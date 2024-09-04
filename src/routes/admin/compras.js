import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Product = lazy(() => import('../../container/compras/product/Products'));
const ProductAdd = lazy(() => import('../../container/compras/product/AddProduct'));
const ProductEdit = lazy(() => import('../../container/compras/product/EditProduct'));
const ProductDetails = lazy(() => import('../../container/compras/product/ProductDetails'));
const Compras = lazy(() => import('../../container/compras'));
const Solicitacoes = lazy(() => import('../../container/compras/solicitacoes'));
const Pedidos = lazy(() => import('../../container/compras/pedidos'));
const Fornecedores = lazy(() => import('../../container/compras/fornecedores'));
const NovoPedido = lazy(() => import('../../container/compras/novoPedido'));

function ComprasRoutes() {
  return (
    <Routes>
      <Route path="products/*" element={<Product />} />
      <Route exact path="add-product" element={<ProductAdd />} />
      <Route exact path="edit-product" element={<ProductEdit />} />
      <Route exact path="productDetails/:id" element={<ProductDetails />} />
      <Route path="compras" element={<Compras />} />
      <Route exact path="solicitacoes" element={<Solicitacoes />} />
      <Route exact path="pedidos" element={<Pedidos />} />
      <Route exact path="fornecedores" element={<Fornecedores />} />
      <Route exact path="novoPedido" element={<NovoPedido />} />
    </Routes>
  );
}

export default ComprasRoutes;
