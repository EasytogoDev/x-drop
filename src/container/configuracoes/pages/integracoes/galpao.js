/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID do fornecedor da URL
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main } from '../../../styled';
import Cookies from 'js-cookie';

function Galpao() {
  const [fornecedor, setFornecedor] = useState(null);
  const { id } = useParams(); // Pega o ID do fornecedor da URL
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Galpão',
    },
  ];

  useEffect(() => {
    carregaFornecedor();
  }, [id]);

  function carregaFornecedor() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setFornecedor(result);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Galpão" routes={PageRoutes} />
      <Main>
        {fornecedor ? (
          <div>
            <h3>Escolhido: {fornecedor.nome}</h3>
            <p>{fornecedor.endereco}</p>
            <p>{fornecedor.cidade}</p>
            <p>{fornecedor.estado}</p>
            <p>{fornecedor.cep}</p>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </Main>
    </>
  );
}

export default Galpao;
