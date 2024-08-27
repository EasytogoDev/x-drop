/* eslint-disable */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Aprendizado = lazy(() => import('../../container/aprendizado'));
const VideoAulas = lazy(() => import('../../container/aprendizado/pages/videoAula/videoAula'));

function AprendizadoRoutes() {
  return (
    <Routes>
      <Route path="aprendizado" element={<Aprendizado />} />
        <Route path="video-aulas" element={<VideoAulas />} />
    </Routes>
  );
}

export default AprendizadoRoutes;
