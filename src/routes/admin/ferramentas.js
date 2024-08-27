/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Ferramentas = lazy(() => import('../../container/ferramentas'));
const Tendencias = lazy(() => import('../../container/ferramentas/tendencias'));
const Encurtador = lazy(() => import('../../container/ferramentas/encurtador-de-link'));
const Gerador = lazy(() => import('../../container/ferramentas/gerador-de-qrcode'));
const Ean = lazy(() => import('../../container/ferramentas/gerador-de-ean'));
const AutoImpulsionar = lazy(() => import('../../container/ferramentas/autoimpulsionar'));


function FerramentasRoutes() {
    return (
        <Routes>
            <Route path="ferramentas" element={<Ferramentas />} />
            <Route path="tendencias" element={<Tendencias />} />
            <Route path="encurtador-de-link" element={<Encurtador />} />
            <Route path="gerador-de-qrcode" element={<Gerador />} />
            <Route path="gerador-de-ean" element={<Ean />} />
            <Route path="autoimpulsionar" element={<AutoImpulsionar />} />
        </Routes>
    );
}

export default FerramentasRoutes;
