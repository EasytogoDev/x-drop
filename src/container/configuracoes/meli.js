/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Meli() {
  const query = useQuery();
  const myParam = query.get('code'); // Substitua 'myParam' pelo nome do seu parâmetro


  useEffect(() => {
    buscaAccessToken(); 
  }, []);



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

  function buscaAccessToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "grant_type": "authorization_code",
        "client_id": "6836702047440130",
        "client_secret": "y5nX6hZlL3G4tFLd3DIS90oJr2OGkDoc",
        "code": myParam,
        "redirect_uri": "https://app.xdrop.com.br/configuracoes/meli",
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://api.mercadolibre.com/oauth/token", requestOptions)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 400) {
                return response.json().then(error => {
                    // Redireciona com o payload do erro na URL
                    const errorDescription = encodeURIComponent(error.error_description);
                    window.location.href = `/configuracoes/integracoes?status=erro&integracao=mercadolivre&erro=${errorDescription}`;
                });
            } else {
                throw new Error("Unexpected response status: " + response.status);
            }
        })
        .then((result) => {
            if (result) {
                const data = new Date().toISOString();
                localStorage.setItem('data_retorno_meli', data);
                localStorage.setItem('access_token_meli', result.access_token);
                localStorage.setItem('token_type_meli', result.token_type);
                localStorage.setItem('expires_in_meli', result.expires_in);
                localStorage.setItem('scope_meli', result.scope);
                localStorage.setItem('user_id_meli', result.user_id);
                localStorage.setItem('refresh_token_meli', result.refresh_token);
                localStorage.setItem('refresh_token_tg_meli', TOKEN);

                // Redireciona para a página de sucesso
                window.location.href = "/configuracoes/integracoes?status=sucesso&integracao=mercadolivre";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            // Caso aconteça um erro inesperado
            window.location.href = `/configuracoes/integracoes?status=erro&integracao=mercadolivre&erro=${encodeURIComponent(error.message)}`;
        });
}

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Meli" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
        <p>Valor do parâmetro: {myParam}</p> {/* Exibindo o valor do parâmetro na tela */}
      </Main>
    </>
  );
}

export default Meli;
