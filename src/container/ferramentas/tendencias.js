/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Cookies from 'js-cookie';

function PesquisarTendencias() {
  const [tendencias, setTendencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pesquisar Tendencias',
    },
  ];

  useEffect(() => {
    carregaTendencias();
  }, []);

  function carregaTendencias(){
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.mercadolibre.com/trends/MLB?seller=258324988&access_token=APP_USR-6836702047440130-090414-bb59ee72ef6ade22848d262cc8262b5f-1973956702", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const trends = result.map(product => ({
          name: product.keyword,
          meli: product.url
        }))

        console.log("CHEGANDO AQUI!!")

        setLoading(false);
        setTendencias(trends); 
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao buscar as tendências. Tente novamente mais tarde.');
        setLoading(false);
      });
  }

  console.log(tendencias)

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tendências" routes={PageRoutes} />
      <Main>
        <StyledHeader>Encontre As Melhores Tendências</StyledHeader>
        {loading ? (
          <StyledLoading>Carregando tendências...</StyledLoading>
        ) : error ? (
          <StyledError>{error}</StyledError>
        ) : (
          <TendenciasList as="ol">
            {tendencias.map((tendencia, index) => (
              <TendenciaItem key={index}>
                <a href={tendencia.meli} target="_blank" rel="noopener noreferrer">
                  {tendencia.name}
                </a>
              </TendenciaItem>
            ))}
          </TendenciasList>
        )}
      </Main>
    </>
  );
}

export default PesquisarTendencias;

// Estilos com styled-components
const StyledHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const StyledLoading = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const StyledError = styled.p`
  text-align: center;
  font-size: 18px;
  color: red;
`;

const TendenciasList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

const TendenciaItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #333;

  &:nth-child(even) {
    background-color: #ececec;
  }

  strong {
    color: #007bff;
    margin-right: 8px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
