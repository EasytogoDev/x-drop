import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Estoque() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Estoque',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Estoque" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default Estoque;
