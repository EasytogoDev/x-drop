import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function PesquisarTendencias() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pesquisar Tendencias',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tendências" routes={PageRoutes} />
      <Main>
        <p>Encontre As Melhores Tendências</p>
      </Main>
    </>
  );
}

export default PesquisarTendencias;
