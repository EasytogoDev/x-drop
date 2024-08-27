import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function newOrder() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Financeiro',
    },
    {
      path: '',
      breadcrumbName: 'Criar Pedido',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Criar" routes={PageRoutes} />
      <Main>
        <p>Hello World Criar Pedido</p>
      </Main>
    </>
  );
}

export default newOrder;
