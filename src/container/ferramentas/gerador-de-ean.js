import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Ean() {
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
      <PageHeader className="ninjadash-page-header-main" title="Gerador de Ean" routes={PageRoutes} />
      <Main>
        <p>Gerador de Ean</p>
      </Main>
    </>
  );
}

export default Ean;
