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
  const [urlShopee, setUrlShopee] = useState([]);
  const [horarioCorte, setHorarioCorte] = useState('');
  const [isLinkEnabled, setIsLinkEnabled] = useState(false); // Estado para habilitar o link
  const [vinculoIntegracao, setVinculoIntegracao] = useState([]);

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
    carregaUrlShopee();
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
        if (result.length > 0) {
          localStorage.setItem('selectedFornecedor', 3);
        }
      })
      .catch((error) => console.error(error));
  }

  function carregaUrlShopee() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/shopee`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result && result.url) {
          setUrlShopee(result.url);
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
  function carregaVinculoIntegracao() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/vinculo-integracoes`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // Mapear o payload para exibir na tabela
        const integracoesAtivas = result.map(integracao => ({
          codigo: integracao.codigo,
          nome: integracao.integracaoDetalhes?.nomeINTEGRACAO || '--', // Nome da integração
          loja: integracao.empresacnpjV || '--', // Loja (CNPJ da empresa, por exemplo)
          deposito: integracao.deposito || '--', // Depósito
          configuracoes: integracao.configuracoes || '--' // Configurações (pode ser ajustado conforme os campos disponíveis)
        }));

        setVinculoIntegracao(integracoesAtivas);

        if (result.length > 0) {
          localStorage.setItem('selectedFornecedor', 3);
        }
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
    localStorage.setItem('selectedIntegration', integration.codigo);
  }, []);

  function closeModal() {
    setIsModalOpen(false);
    setSelectedIntegration(null);
  }

  // Função para salvar o horário de corte
  const handleSaveHorario = () => {
    if (horarioCorte) {
      localStorage.setItem('horarioCorte', horarioCorte);
      setIsLinkEnabled(true); // Habilita o link após salvar
    }
  };

  console.log('Render:', isModalOpen, selectedIntegration);

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Integrações" routes={PageRoutes} />
      <Main>
        {/* <Section>
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
        </Section> */}

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
              {vinculoIntegracao.length > 0 ? (
                vinculoIntegracao.map((integracao, index) => (
                  <tr key={integracao.codigo} style={{ borderBottom: '1px solid #e6e6e6' }}>
                    <td>{index + 1}</td>
                    <td>{integracao.nome}</td>
                    <td>{integracao.loja}</td>
                    <td>{integracao.deposito}</td>
                    <td>{integracao.configuracoes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhuma integração ativa encontrada.</td>
                </tr>
              )}
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
                <p>Fornecedor: {fornecedores[0]?.nome}</p>
                <p>Contato: {fornecedores[0]?.usuario}</p>

                {/* Formulário para inserir horário de corte */}
                <form style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '15px' }}>
                  <label
                    htmlFor="horarioCorte"
                    style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6c757d',
                      marginRight: '10px',
                    }}
                  >
                    Informe o horário de corte:
                  </label>

                  <input
                    type="time"
                    id="horarioCorte"
                    value={horarioCorte}
                    onChange={(e) => {
                      setHorarioCorte(e.target.value);
                      localStorage.setItem('horarioCorte', e.target.value); // Salva no localStorage ao inserir
                    }}
                    style={{
                      padding: '8px 12px',
                      fontSize: '14px',
                      borderRadius: '6px',
                      border: '1px solid #ced4da',
                      backgroundColor: '#fff',
                      color: '#495057',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      appearance: 'none', // Remove estilos padrão do navegador
                      WebkitAppearance: 'none', // Remove no Safari
                      MozAppearance: 'none', // Remove no Firefox
                    }}
                  />

                  <button
                    type="button"
                    onClick={handleSaveHorario}
                    style={{
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      fontSize: '14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
                  >
                    Salvar
                  </button>
                </form>

                <img
                  src={selectedIntegration.imagem}
                  alt={selectedIntegration.nome}
                  style={{
                    cursor: isLinkEnabled ? 'pointer' : 'not-allowed',
                    opacity: isLinkEnabled ? 1 : 0.5,
                    width: '100px',
                    height: 'auto',
                    marginTop: '20px',
                  }}
                  onClick={() => {
                    if (isLinkEnabled) {
                      if (selectedIntegration.codigo === 1) {
                        window.location.href = selectedIntegration.url;
                      } else if (selectedIntegration.codigo === 3) {
                        window.location.href = urlShopee;
                      }
                    }
                  }}
                  disabled={!isLinkEnabled}
                />
              </ModalBody>
              {console.log(localStorage.getItem('horarioCorte'))}
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
