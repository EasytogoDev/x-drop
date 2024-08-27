import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function AssinaturasOpen() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Assinaturas',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Assinaturas em Aberto" routes={PageRoutes} />
      <Main>
        <p>Hello World vamboraaaa</p>
      </Main>
    </>
  );
}

export default AssinaturasOpen;
