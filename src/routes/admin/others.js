/* eslint-disable no-unused-vars */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Outros = lazy(() => import('../../container/others'));
const MySubscriptions = lazy(() => import('../../container/others/mySubscriptions'));
const PerfilVini = lazy(() => import('../../container/others/perfilVini'));
const Integracoes = lazy(() => import('../../container/others/integracoes'));
const AutoImpulsionar = lazy(() => import('../../container/others/autoimpulsionar'));

function OtherRoutes() {
  return (
    <Routes>
      <Route path="others" element={<Outros />} />
      <Route exact path="mySubscriptions" element={<MySubscriptions />} />
      <Route exact path="perfilVini" element={<PerfilVini />} />
      <Route exact path="integracoes" element={<Integracoes />} />
      <Route exact path="autoimpulsionar" element={<AutoImpulsionar />} />
    </Routes>
  );
}

export default OtherRoutes;
