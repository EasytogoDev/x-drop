/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Suporte() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Fiscal',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Suporte" routes={PageRoutes} />
      <Main>
        <p>Hello World Suporte</p>
      </Main>
    </>
  );
}

export default Suporte;
