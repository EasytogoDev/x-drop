/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Cookies from 'js-cookie';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Shopee() {
  const [tokenTG, setTokenTG] = useState('');
  const query = useQuery();
  const myParam = query.get('code'); // Pega o parâmetro 'code' da URL

  useEffect(() => {
    if (myParam) {
      setTokenTG(myParam);
      buscaAccessToken(myParam); // Busca o token de acesso com o valor do parâmetro
    }
  }, [myParam]);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Shopee',
    },
  ];

  function buscaAccessToken(tokenTG) {
    const myHeaders = new Headers();
    const accessToken = Cookies.get('access_token');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const raw = JSON.stringify({
      code: tokenTG,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    console.log('Request Options:', requestOptions);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/shopee/token`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          console.log('Resposta da API (Status 200): Token gerado com sucesso');
          return response.json();
        } else {
          throw new Error(`Erro: ${response.status}`);
        }
      })
      .then((result) => {
        const data = new Date().toISOString();

        console.log('Data de Retorno:', data);
        console.log('Resultado da API:', result);

        // Tratando o retorno padrão { message: "string", token: "string" }
        if (result && result.token) {
          localStorage.setItem('data_retorno_shopee', data);
          localStorage.setItem('access_token_shopee', result.token); // Salvando o token corretamente
          console.log('Token recebido:', result.token);
        } else {
          throw new Error('Formato de resposta inesperado');
        }

        // Redireciona para a página de sucesso
        window.location.href = '/configuracoes/integracoes?status=sucesso&integracao=shopee';
      })
      .catch((error) => {
        console.error('Erro ao buscar o token:', error);
        alert(`Erro ao buscar o token: ${error.message}`);
      });
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Shopee" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
        <p>Valor do parâmetro: {tokenTG}</p> {/* Exibindo o valor do parâmetro na tela */}
      </Main>
    </>
  );
}

export default Shopee;
