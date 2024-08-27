import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function NovoPedido() {
  const PageRoutes = [
    // {
    //   path: '/admin',
    //   breadcrumbName: 'Dashboard',
    // },
    {
      path: '/admin/compras',
      breadcrumbName: 'Vendas',
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
        <p>Hello World Criar Pedido</p>
      </Main>
    </>
  );
}

export default NovoPedido;
