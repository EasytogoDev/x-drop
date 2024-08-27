import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Recebimento() {
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
      breadcrumbName: 'Recebimento',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Recebimento" routes={PageRoutes} />
      <Main>
        <p>Hello World Recebimento</p>
      </Main>
    </>
  );
}

export default Recebimento;
