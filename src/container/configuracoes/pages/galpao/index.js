/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import Cookies from 'js-cookie';

function Galpao() {
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get('id');
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Supondo que você precise carregar dados específicos com base no ID
  //   const accessToken = Cookies.get('access_token');
  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer ${accessToken}`);

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/galpao/${id}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error));
  // }, [id]);

  // if (!data) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Galpão`} />
      {/* <div>
        <h1>Detalhes do Galpão {id}</h1>
        <p>Nome: {data.nome}</p>
        <p>Localização: {data.localizacao}</p>
      </div> */}
      <p>Hello World</p>
    </>
  );
}

export default Galpao;
