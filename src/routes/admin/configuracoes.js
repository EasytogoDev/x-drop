/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Configuracao = lazy(() => import('../../container/configuracoes'));
const Assinatura = lazy(() => import('../../container/configuracoes/pages/minhaAssinatura/minha-assinatura'));
const Integracoes = lazy(() => import('../../container/configuracoes/pages/integracoes/integracoes'));
const Galpao = lazy(() => import(`../../container/configuracoes/pages/galpao/index.js`));
const Meli = lazy(() => import(`../../container/configuracoes/meli.js`));

function ConfiguracaoRoutes() {
    return (
        <Routes>
            <Route path="configuracoes" element={<Configuracao />} />
            <Route path="minha-assinatura" element={<Assinatura />} />
            <Route path="integracoes" element={<Integracoes />} />
            <Route path="meugalpao" element={<Galpao />} />
            <Route path="meli" element={<Meli />} />
        </Routes>
    );
}

export default ConfiguracaoRoutes;