/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Fiscal() {
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
      <PageHeader className="ninjadash-page-header-main" title="Fiscal" routes={PageRoutes} />
      <Main>
        <p>Hello World Fiscal</p>
      </Main>
    </>
  );
}

export default Fiscal;
