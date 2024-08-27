import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Gerador() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Gerador de QrCode',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Gerador de QrCode" routes={PageRoutes} />
      <Main>
        <p>Gerador de QrCode</p>
      </Main>
    </>
  );
}

export default Gerador;
