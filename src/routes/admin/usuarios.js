import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Usuarios = lazy(() => import('../../container/usuarios/Usuarios'));
const Adicionar = lazy(() => import('../../container/usuarios/Adicionar'));
const DataTable = lazy(() => import('../../container/usuarios/UserListDataTable'));
const Lista = lazy(() => import('../../container/usuarios/Lista'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Usuarios />} />
      <Route path="adicionar/*" element={<Adicionar />} />
      <Route path="dataTable" element={<DataTable />} />
      <Route path="lista" element={<Lista />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
