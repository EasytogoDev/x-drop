import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Produtos() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Produtos',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Produtos" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default Produtos;
