import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function AutoImpulsionar() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Configurações',
    },
    {
      path: '',
      breadcrumbName: 'Auto-Impulsionar',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Auto-Impulsionar" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default AutoImpulsionar;
