import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Financeiro() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Financeiro',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Financeiro" routes={PageRoutes} />
      <Main>
        <p>Hello World Financeiro</p>
      </Main>
    </>
  );
}

export default Financeiro;
