/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from 'js-cookie';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  height: 333px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  overflow: hidden;
`;

const CapaImagem = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
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

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const CatalogoButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #1e7e34;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
  }
`;

const EyeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const EnderecoInfo = styled(FornecedorInfo)`
  color: #333;
`;

const StatusLabel = styled.span`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  background-color: ${props => (props.ativo ? "#28a745" : "#dc3545")};
`;

// Componente FornecedorCard
function FornecedorCard({ fornecedor }) {
  const [mostrarEndereco, setMostrarEndereco] = useState(false);
  const navigate = useNavigate();

  const caminhoLogo = process.env.REACT_APP_API_ENDPOINT;
  const imagem = fornecedor.logo;
  const caminhoCompleto = imagem === "" ? "" : caminhoLogo + imagem;

  const enderecoFicticio = "Rua Exemplo, 123, Bairro, Cidade, Estado";

  const handleEyeClick = () => {
    setMostrarEndereco(!mostrarEndereco);
  };

  const handleCatalogoClick = (codigo) => {
    navigate(`/compras/products/grid${codigo}`);
  };

  return (
    <FornecedorCardWrapper>
      <CapaImagem src={caminhoCompleto} alt="Capa" />
      <div style={{ marginTop: 10 }}>
        <FornecedorNome>{fornecedor.nome}</FornecedorNome>
        
        <ActionContainer>
          <ButtonsContainer>
            <StatusLabel ativo={fornecedor.ativo}>
              {fornecedor.ativo ? "Ativo" : "Inativo"}
            </StatusLabel>

            {fornecedor.ativo && (
              <CatalogoButton onClick={() => handleCatalogoClick(fornecedor.codigo)}>
                Ver Catálogo
              </CatalogoButton>
            )}
          </ButtonsContainer>

          <EyeIconWrapper onClick={handleEyeClick}>
            <FaEye />
          </EyeIconWrapper>
        </ActionContainer>

        {mostrarEndereco && (
          <EnderecoInfo>Endereço: {enderecoFicticio}</EnderecoInfo>
        )}
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
          <AdicionarButton>Adicionar Fornecedor</AdicionarButton>
        </Acoes>
      </Header>

      <FornecedoresLista>
        {fornecedores.map((fornecedor) => (
          <FornecedorCard key={fornecedor.codigo} fornecedor={fornecedor} />
        ))}
      </FornecedoresLista>
    </Container>
  );
}
