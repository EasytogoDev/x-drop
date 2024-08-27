/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from 'js-cookie';

// Estilos usando styled-components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Acoes = styled.div`
  display: flex;
  gap: 10px;
`;

const AdicionarButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004494;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;


const FornecedoresLista = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FornecedorCardWrapper = styled.div`
  width: 350px;
  height: 350px; /* Ajuste a altura para acomodar a imagem */
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  overflow: hidden; /* Para evitar que o conteúdo saia dos limites do card */
`;

const CapaImagem = styled.img`
  width: 100%;
  height: 150px; /* Altura da imagem de capa */
  object-fit: cover; /* Para garantir que a imagem se encaixe bem */
  border-radius: 8px 8px 0 0; /* Arredonda os cantos superiores */
`;

const FornecedorNome = styled.h3`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const FornecedorInfo = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #666;
  text-align: left;
`;

const FornecedorLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  &:active {
    color: #004494;
  }
`;


// Componente FornecedorCard
function FornecedorCard({ fornecedor }) {
  const caminhoLogo = process.env.REACT_APP_API_ENDPOINT;
  const imagem = fornecedor.logo;
  const caminhoCompleto = imagem === "" ? "" : caminhoLogo + imagem;
  return (
    <FornecedorCardWrapper>
      <CapaImagem src={caminhoCompleto} alt="Capa" /> 
      <div style={{ marginTop: 10 }}>
        <FornecedorNome>{fornecedor.nome}</FornecedorNome>
        <FornecedorInfo>Email: {fornecedor.login}</FornecedorInfo>
        <FornecedorInfo>App: {fornecedor.app}</FornecedorInfo>
        <FornecedorLink href="/admin/ecommerce/products/ProdutosFornecedor">Ver Produtos</FornecedorLink>
      </div>
    </FornecedorCardWrapper>
  );
}

export default function TelaFornecedores() {
  const [fornecedores, setFornecedores] = useState([]);

  // Busca os fornecedores do backend
  useEffect(() => {
    carregaFornecedor();
  }, []);

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
      `${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/lista`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setFornecedores(result);
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <Header>
        <h1>Lista de Fornecedores</h1>
        <Acoes>
          {/* Botão para adicionar um novo fornecedor */}
          <AdicionarButton>Adicionar Fornecedor</AdicionarButton>
        </Acoes>
      </Header>

      {/* Renderiza os cards dos fornecedores */}
      <FornecedoresLista>
        {fornecedores.map((fornecedor) => (
          <FornecedorCard key={fornecedor.codigo} fornecedor={fornecedor} />
        ))}
      </FornecedoresLista>
    </Container>
  );
}
