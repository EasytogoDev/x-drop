import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function CriarPedido() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Criar Pedido',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Criar Pedido" routes={PageRoutes} />
      <Main>
        <p>Hello World CriarPedido</p>
      </Main>
    </>
  );
}

export default CriarPedido;
