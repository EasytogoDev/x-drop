import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Checkout() {
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
      breadcrumbName: 'Checkout',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Checkout" routes={PageRoutes} />
      <Main>
        <p>Hello World Checkout</p>
      </Main>
    </>
  );
}

export default Checkout;
