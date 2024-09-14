/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../../../components/page-headers/page-headers.js';
import { Main } from '../../../styled.js';
import {
  AssinaturasWrapper,
  AssinaturaCard,
  AssinaturaInfo,
  AssinaturaNome,
  AssinaturaData,
  Status,
} from './styles.ts';

function MinhasAssinaturas() {
  const [assinaturas, setAssinaturas] = useState([]);

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

  function carregaAssinatura() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    // Chama a API que retorna os produtos cadastrados
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/produtos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.map((product) => ({
          
        }));
        setProducts(mappedProducts);
        setIsLoadingProducts(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingProducts(false);
      });
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Minhas Assinaturas" routes={PageRoutes} />
      <Main>
        <AssinaturasWrapper>
          {assinaturas.map((assinatura) => (
            <AssinaturaCard key={assinatura.id}>
              <AssinaturaInfo>
                <AssinaturaNome>{assinatura.nome}</AssinaturaNome>
                <AssinaturaData>Ativada em: {assinatura.dataAtivacao}</AssinaturaData>
                <AssinaturaData>Fornecedor: {assinatura.fornecedor}</AssinaturaData>
              </AssinaturaInfo>
              <Status active={assinatura.ativo}>{assinatura.ativo ? 'Ativa' : 'Inativa'}</Status>
            </AssinaturaCard>
          ))}
        </AssinaturasWrapper>
      </Main>
    </>
  );
}

export default MinhasAssinaturas;
