/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Configuracao() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Configuracao',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Configuracao" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default Configuracao;
