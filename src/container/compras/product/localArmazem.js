import React from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';

function localArmazem() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Local Armazem',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Local do Armazens" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default localArmazem;
