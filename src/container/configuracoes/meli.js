/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Cookies from 'js-cookie';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Meli() {
const [tokenTG, setTokenTG] = useState('');
const query = useQuery();
const myParam = query.get('code'); // Substitua 'myParam' pelo nome do seu parâmetro

  useEffect(() => {
    
  
    setTokenTG(myParam);
    buscaAccessToken(myParam); 

  }, [myParam]);



  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Meli',
    },
  ];

  function buscaAccessToken(tokenTG) {

  

      const myHeaders = new Headers();
      const accessToken = Cookies.get('access_token');
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${accessToken}`)

      const raw = JSON.stringify({
        "code": tokenTG
      });

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

console.log(requestOptions);

fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/code-to-token`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    
    const data = new Date().toISOString();

    console.log('DATASSSSS');
    console.log(data);
    console.log('RESULTADOS');
    console.log(result);

 
    localStorage.setItem('data_retorno_meli', data);
    localStorage.setItem('access_token_meli', result.postResponse.access_token);
    localStorage.setItem('token_type_meli', result.postResponse.token_type);
    localStorage.setItem('expires_in_meli', result.postResponse.expires_in);
    localStorage.setItem('scope_meli', result.postResponse.scope);
    localStorage.setItem('user_id_meli', result.postResponse.user_id);
    localStorage.setItem('refresh_token_meli', result.postResponse.refresh_token);
    localStorage.setItem('refresh_token_tg_meli', tokenTG);

    // Redireciona para a página de sucesso
    window.location.href = "/configuracoes/integracoes?status=sucesso&integracao=mercadolivre";

  })
  .catch((error) => {
    
    alert(error.error);
    console.error(error)
  
  });
}

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Meli" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
        <p>Valor do parâmetro: {tokenTG}</p> {/* Exibindo o valor do parâmetro na tela */}
      </Main>
    </>
  );
}

export default Meli;
