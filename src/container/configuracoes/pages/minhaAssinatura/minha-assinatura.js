/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../../../components/page-headers/page-headers.js';
import { Main } from '../../../styled.js';
import { AssinaturasWrapper, AssinaturaCard, AssinaturaInfo, AssinaturaNome, AssinaturaData, Status } from './styles.ts';

function MinhasAssinaturas() {
  const [assinaturas, setAssinaturas] = useState([]);

  useEffect(() => {
    // Simulando uma chamada à API para obter as assinaturas
    const fetchAssinaturas = async () => {
      const data = [
        { id: 1, nome: 'Assinatura Premium', dataAtivacao: '2023-01-15', ativo: true, fornecedor: 'Spotify' },
        { id: 2, nome: 'Assinatura Básica', dataAtivacao: '2022-08-23', ativo: false, fornecedor: 'Netflix' },
      ];
      setAssinaturas(data);
    };

    fetchAssinaturas();
  }, []);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'X-Drop',
    },
    {
      path: '',
      breadcrumbName: 'Minhas Assinaturas',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Minhas Assinaturas" routes={PageRoutes} />
      <Main>
        <AssinaturasWrapper>
          {assinaturas.map(assinatura => (
            <AssinaturaCard key={assinatura.id}>
              <AssinaturaInfo>
                <AssinaturaNome>{assinatura.nome}</AssinaturaNome>
                <AssinaturaData>Ativada em: {assinatura.dataAtivacao}</AssinaturaData>
                <AssinaturaData>Fornecedor: {assinatura.fornecedor}</AssinaturaData>
              </AssinaturaInfo>
              <Status active={assinatura.ativo}>
                {assinatura.ativo ? 'Ativa' : 'Inativa'}
              </Status>
            </AssinaturaCard>
          ))}
        </AssinaturasWrapper>
      </Main>
    </>
  );
}

export default MinhasAssinaturas;
