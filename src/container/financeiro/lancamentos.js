/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Lancamentos() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Lançamentos',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Financeiro" routes={PageRoutes} />
      <Main>
        <p>Hello World Lançamentos</p>
      </Main>
    </>
  );
}

export default Lancamentos;
