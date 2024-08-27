/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Substitua useHistory por useNavigate
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
  IntegrationList
} from './styles.ts';
import Cookies from 'js-cookie';

function Integracoes() {
  const [fornecedores, setFornecedores] = useState([]);
  const navigate = useNavigate(); // useNavigate em vez de useHistory
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

  function handleSupplierClick(id) {
    navigate(`/galpao/${id}`); // useNavigate para redirecionar
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Integrações" routes={PageRoutes} />
      <Main>
        <Section>
          <Title>Fornecedores</Title>
          <SuppliersList>
            {fornecedores.map((fornecedor) => (
              <SupplierItem key={fornecedor.id} onClick={() => handleSupplierClick(fornecedor.id)}>
                <SupplierInfo>
                  <span>{fornecedor.nome}</span>
                  {/* <Tag color="#007bff">✔️</Tag> */}
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
            <IntegrationCard onClick={() => handleIntegrationClick('shopee')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Shopee_logo.svg/1200px-Shopee_logo.svg.png" alt="Shopee" />
              <Tag color="#bbb">V2</Tag>
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('mercado-livre')}>
              <img src="https://logodownload.org/wp-content/uploads/2016/10/mercado-livre-logo.png" alt="Mercado Livre" />
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('shopify')}>
              <img src="https://www.svgrepo.com/show/376356/shopify.svg" alt="Shopify" />
              <Tag color="#bbb">V2 - AUTO</Tag>
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('b2w')}>
              <img src="https://logodownload.org/wp-content/uploads/2019/09/b2w-logo.png" alt="B2W" />
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('magalu')}>
              <img src="https://logodownload.org/wp-content/uploads/2019/08/magalu-logo.png" alt="Magalu" />
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('via-varejo')}>
              <img src="https://logodownload.org/wp-content/uploads/2019/08/viavarejo-logo.png" alt="Via Varejo" />
            </IntegrationCard>
            <IntegrationCard onClick={() => handleIntegrationClick('bling')}>
              <img src="https://logodownload.org/wp-content/uploads/2019/09/bling-logo.png" alt="Bling" />
              <Tag color="#bbb">V3</Tag>
            </IntegrationCard>
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
      </Main>
    </>
  );
}

export default Integracoes;
