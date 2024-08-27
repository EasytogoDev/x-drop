import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Assinaturas() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Assinaturas',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Assinaturas" routes={PageRoutes} />
      <Main>
        <p>Hello World Assinaturas</p>
      </Main>
    </>
  );
}

export default Assinaturas;
