import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function PerfilVini() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Configurações',
    },
    {
      path: '',
      breadcrumbName: 'Meu Perfil',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Meu Perfil" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default PerfilVini;
