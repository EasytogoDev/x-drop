import React from 'react';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

function Aprendizado() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Aprendizado',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Aprendizado" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default Aprendizado;
