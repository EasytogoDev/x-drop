/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import {
  Main,
  Section,
  Title,
  SuppliersList,
  SupplierItem,
  SupplierInfo,
  Tag,
  CatalogButton,
  SalesCalculator,
  InputGroup,
  InputLabel,
  InputField,
  CalculateButton,
  IntegrationGrid,
  IntegrationCard,
  IntegrationList,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton
} from './styles.ts';
import Cookies from 'js-cookie';

function Integracoes() {
  const [fornecedores, setFornecedores] = useState([]);
  const [integracoes, setIntegracoes] = useState([]);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'X-Drop',
    },
    {
      path: '',
      breadcrumbName: 'Integrações',
    },
  ];

  useEffect(() => {
    carregaFornecedor();
    carregaIntegracoes();
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
        // Salva apenas o código do primeiro fornecedor no localStorage
        if (result.length > 0) {
          localStorage.setItem('selectedFornecedor', 3);
        }
      })
      .catch((error) => console.error(error));
  }

  function carregaIntegracoes() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/integracoes`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const baseUrl = process.env.REACT_APP_API_ENDPOINT;
        const integracoesCompletas = result.map(integracao => ({
          ...integracao,
          imagem: `${baseUrl}${integracao.imagem}`
        }));
        setIntegracoes(integracoesCompletas);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (isModalOpen && selectedIntegration) {
      console.log('Modal aberto:', selectedIntegration);
    }
  }, [isModalOpen, selectedIntegration]);

  const handleIntegrationClick = useCallback((integration) => {
    setSelectedIntegration(integration);
    setIsModalOpen(true);
    console.log('Integração selecionada:', integration);

    // Salva apenas o código da integração selecionada no localStorage
    localStorage.setItem('selectedIntegration', integration.codigo);
  }, []);

  function closeModal() {
    setIsModalOpen(false);
    setSelectedIntegration(null);
  }

  console.log('Render:', isModalOpen, selectedIntegration);

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Integrações" routes={PageRoutes} />
      <Main>
        <Section>
          <Title>Fornecedores</Title>
          <SuppliersList>
            {fornecedores.map((fornecedor) => (
              <SupplierItem key={fornecedor.id}>
                <SupplierInfo>
                  <span>{fornecedor.nome}</span>
                  <Tag color="#ff0000">NOVO</Tag>
                  <Tag color="#28a745">Instalada</Tag>
                </SupplierInfo>
                <CatalogButton>Catálogo</CatalogButton>
              </SupplierItem>
            ))}
          </SuppliersList>
        </Section>

        <Section>
          <Title>Calculadora de Vendas</Title>
          <SalesCalculator>
            <InputGroup>
              <InputLabel>Valor do Produto</InputLabel>
              <InputField type="number" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Seu lucro (Porc. de Venda %)</InputLabel>
              <InputField type="number" />
            </InputGroup>
            <InputGroup>
              <InputLabel>Comissão MKTP (%)</InputLabel>
              <InputField type="number" />
            </InputGroup>
            <CalculateButton>Calcular</CalculateButton>
          </SalesCalculator>
        </Section>

        <Section>
          <Title>Integrações Disponíveis</Title>

          <IntegrationGrid>
            {integracoes.map((integracao) => (
              <IntegrationCard key={integracao.codigo} onClick={() => handleIntegrationClick(integracao)}>
                <img src={integracao.imagem} alt={integracao.nome} />
                <p>{integracao.nome}</p>
              </IntegrationCard>
            ))}
          </IntegrationGrid>
        </Section>

        <Section>
          <Title>Lista de Integrações Ativas</Title>
          <IntegrationList>
            <thead>
              <tr>
                <th>#</th>
                <th>Canal</th>
                <th>Loja</th>
                <th>Depósito</th>
                <th>Configurações</th>
              </tr>
            </thead>
            <tbody>
              {/* Linhas de dados */}
            </tbody>
          </IntegrationList>
        </Section>

        <Section>
          <Title>Lista de Integrações Removidas</Title>
          <IntegrationList>
            <thead>
              <tr>
                <th>#</th>
                <th>Canal</th>
                <th>Depósito</th>
                <th>Data Criação</th>
                <th>Data Remoção</th>
              </tr>
            </thead>
            <tbody>
              {/* Linhas de dados */}
            </tbody>
          </IntegrationList>
        </Section>

        {isModalOpen && selectedIntegration && (
          <Modal isOpen={isModalOpen}>
            <ModalContent>
              <ModalHeader>
                <h2>{selectedIntegration.nome}</h2>
                <CloseButton onClick={closeModal}>X</CloseButton>
              </ModalHeader>
              <ModalBody>
                <p>Fornecedor: {fornecedores[0].nome}</p>
                <p>Contato: {fornecedores[0].usuario}</p>
                <div>
                  <img
                    src={selectedIntegration.imagem}
                    alt={selectedIntegration.nome}
                    style={{ cursor: 'pointer', width: '100px', height: 'auto' }}
                    onClick={() => window.location.href = selectedIntegration.url}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button onClick={closeModal}>Fechar</button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Main>
    </>
  );
}

export default Integracoes;
