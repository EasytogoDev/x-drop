import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Expedicao() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/admin/estoque',
      breadcrumbName: 'Estoque',
    },
    {
      path: '',
      breadcrumbName: 'Expedição',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Expedição" routes={PageRoutes} />
      <Main>
        <p>Hello World Expedição</p>
      </Main>
    </>
  );
}

export default Expedicao;
