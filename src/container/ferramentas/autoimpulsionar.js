/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function AutoImpulsionar() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Auto Impulsionar',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Ferramentas" routes={PageRoutes} />
      <Main>
        <p>Hello World Autoimpulsionar</p>
      </Main>
    </>
  );
}

export default AutoImpulsionar;