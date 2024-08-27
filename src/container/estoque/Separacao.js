import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Separacao() {
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
      breadcrumbName: 'Separação',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Separação" routes={PageRoutes} />
      <Main>
        <p>Hello World Separação</p>
      </Main>
    </>
  );
}

export default Separacao;
