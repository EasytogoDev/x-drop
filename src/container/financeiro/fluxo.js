import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Fluxo() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Financeiro',
    },
    {
      path: '',
      breadcrumbName: 'Fluxo de Caixa',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Fluxo de Caixa" routes={PageRoutes} />
      <Main>
        <p>Hello World Fluco de Caixa</p>
      </Main>
    </>
  );
}

export default Fluxo;
