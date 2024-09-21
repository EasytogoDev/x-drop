/* eslint-disable */
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import {
  Main,
  Container,
  SearchSection,
  FilterSection,
  Table,
  StatusButton,
  Icon,
  Modal,
  ModalContent,
  CloseButton,
  ModalOverlay,
  ItemTable,
} from './styles.ts';
import { PageHeader } from '../../../../components/page-headers/page-headers';

function Pedidos() {
  const PageRoutes = [
    { path: '/admin', breadcrumbName: 'Dashboard' },
    { path: '', breadcrumbName: 'Vendas > Pedidos' },
  ];

  const [allChecked, setAllChecked] = useState(false);
  const [pedidosMeli, setPedidosMeli] = useState([]);
  const [filteredPedidos, setFilteredPedidos] = useState([]);
  const [filters, setFilters] = useState({
    status: 'Todos',
    canal: '',
    integracao: '',
    dataInicio: '',
    dataFim: '',
    search: '',
  });

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [integracoes, setIntegracoes] = useState([]);
  const [integracoesDados, setIntegracoesDados] = useState([]);

  useEffect(() => {
    carregaIntegracoes();
    carregaPedidosMeli();
    carregaIntegracoesDados();
  }, []);

  function carregaIntegracoes() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/integracoes`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        const baseUrl = process.env.REACT_APP_API_ENDPOINT;
        const integracoesCompletas = result.map((integracao) => ({
          ...integracao,
          imagem: `${baseUrl}${integracao.imagem}`,
        }));
        setIntegracoes(integracoesCompletas);
      })
      .catch((error) => console.error(error));
  }

  function carregaIntegracoesDados() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/vinculos-integracoes`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        setIntegracoesDados(result);
      })
      .catch((error) => console.error('Erro ao carregar integrações:', error));
  }

  function carregaPedidosMeli() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/pedidos`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result && result.pedidos) {
          const pedidos = result.pedidos.map((pedido) => ({
            id: pedido.id,
            status: pedido.status,
            totalAmount: pedido.total_amount,
            buyerNickname: pedido.buyer.nickname,
            sellerNickname: pedido.seller.nickname,
            codRastreio: pedido.shipping.id || 'N/A',
            dateCreated: pedido.date_created,
            items: pedido.order_items.map(item => item.item.title).join(', '),
          }));

          setPedidosMeli(pedidos);
          setFilteredPedidos(pedidos); // Define o estado de pedidos filtrados também
        } else {
          console.error('Nenhum pedido encontrado:', result);
        }
      })
      .catch((error) => console.error('Erro ao carregar pedidos:', error));
  }

  const handleCheckboxChange = () => {
    setAllChecked(!allChecked);
    setFilteredPedidos((prevPedidos) =>
      prevPedidos.map((pedido) => ({ ...pedido, checked: !allChecked }))
    );
  };

  const handleIndividualCheckboxChange = (id) => {
    setFilteredPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, checked: !pedido.checked } : pedido
      )
    );
  };

  const handleGerarEtiqueta = (codigoPedido) => {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`http://192.168.15.47:8080/api/meli/etiquetas/${codigoPedido}`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `etiqueta_${codigoPedido}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Erro ao gerar etiqueta:', error);
      });
  };

  const handleFilterChange = () => {
    let pedidosFiltrados = [...pedidosMeli];

    if (filters.status && filters.status !== 'Todos') {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.status === filters.status);
    }

    if (filters.canal) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) => pedido.vinculo && pedido.vinculo.canal === filters.canal
      );
    }

    if (filters.integracao) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) => pedido.integracao === filters.integracao
      );
    }

    if (filters.dataInicio) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.data).isAfter(dayjs(filters.dataInicio).subtract(1, 'day'))
      );
    }

    if (filters.dataFim) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.data).isBefore(dayjs(filters.dataFim).add(1, 'day'))
      );
    }

    if (filters.search) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          (pedido.dadosPedido &&
            pedido.dadosPedido.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.codRastreio &&
            pedido.codRastreio.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.conta && pedido.conta.toLowerCase().includes(filters.search.toLowerCase()))
      );
    }

    setFilteredPedidos(pedidosFiltrados);
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
    handleFilterChange();
  };

  const handleClearFilters = () => {
    setFilters({
      status: 'Todos',
      canal: '',
      integracao: '',
      dataInicio: '',
      dataFim: '',
      search: '',
    });
    setFilteredPedidos(pedidosMeli);
  };

  useEffect(() => {
    handleFilterChange();
  }, [
    filters.canal,
    filters.status,
    filters.integracao,
    filters.dataInicio,
    filters.dataFim,
    filters.search,
  ]);

  const openModal = (pedido) => {
    setSelectedPedido(pedido);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Vendas - Pedidos" routes={PageRoutes} />
      <Main>
        <Container>
          <SearchSection>
            <input
              type="text"
              placeholder="Buscar por Nome do Cliente, CEP, rastreio, Cidade ou id do pedido"
              value={filters.search}
              onChange={handleSearchChange}
            />
            <button type="button" onClick={handleFilterChange}>
              Buscar
            </button>
          </SearchSection>
          <FilterSection>
            <div>
              <label htmlFor="dataInicio">
                Data Inicial:
                <input
                  id="dataInicio"
                  type="date"
                  value={filters.dataInicio}
                  onChange={(e) =>
                    setFilters({ ...filters, dataInicio: e.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <label htmlFor="dataFim">
                Data Final:
                <input
                  id="dataFim"
                  type="date"
                  value={filters.dataFim}
                  onChange={(e) => setFilters({ ...filters, dataFim: e.target.value })}
                />
              </label>
            </div>
            <div>
              <label htmlFor="statusPedido">
                Status do pedido:
                <select
                  id="statusPedido"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option value="Todos">Todos</option>
                  <option value="Pago">Pago</option>
                  <option value="Não Pago">Não Pago</option>
                  <option value="Com etiquetas">Com etiquetas</option>
                  <option value="Sem etiquetas">Sem etiquetas</option>
                  <option value="Com Nf de entrada">Com Nf de entrada</option>
                  <option value="Sem Nf de entrada">Sem Nf de entrada</option>
                  <option value="Com Nf de Saida">Com Nf de Saida</option>
                  <option value="Sem Nf de Saida">Sem Nf de Saida</option>
                  <option value="Etiqueta Impressa">Etiqueta Impressa</option>
                  <option value="Etiqueta Não impressa">Etiqueta Não impressa</option>
                  <option value="Embalado">Embalado</option>
                  <option value="Não Embalado">Não Embalado</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="canal">
                Filtrar Canal:
                <select
                  id="canal"
                  value={filters.canal}
                  onChange={(e) => {
                    setFilters({ ...filters, canal: e.target.value });
                    handleFilterChange();
                  }}
                >
                  <option value="">- Selecione -</option>
                  {integracoes
                    .filter((integracao) => integracao.ativo === 1)
                    .map((integracao) => (
                      <option key={integracao.id} value={integracao.nome}>
                        {integracao.nome}
                      </option>
                    ))}
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="integracaoDado">
                Filtrar Integração:
                <select
                  id="integracaoDado"
                  value={filters.integracao}
                  onChange={(e) => {
                    setFilters({ ...filters, integracao: e.target.value });
                    handleFilterChange();
                  }}
                >
                  <option value="">- Selecione -</option>
                  {integracoesDados
                    .filter((integracaoDado) => integracaoDado.ativo === 1)
                    .map((integracaoDado) => {
                      const integracao = integracoes.find(
                        (integ) => integ.id === integracaoDado.integracao
                      );
                      return (
                        <option key={integracaoDado.codigo} value={integracaoDado.idusuario}>
                          {integracao ? `${integracao.nomeINTEGRACAO} (${integracaoDado.idusuario})` : `(${integracaoDado.idusuario})`}
                        </option>
                      );
                    })}
                </select>
              </label>
            </div>
            <div className="filter-buttons">
              <button type="button" className="primary" onClick={handleFilterChange}>
                Filtrar
              </button>
              <button type="button" className="primary" onClick={handleClearFilters}>
                Limpar Filtros
              </button>
            </div>
          </FilterSection>

          <Table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleCheckboxChange}
                    aria-label="CheckBox"
                  />
                </th>
                <th>#PEDIDO</th>
                <th>CONTA</th>
                <th>CANAL</th>
                <th>DADOS DO PEDIDO</th>
                <th>NOME</th>
                <th>COD. RASTREIO</th>
                <th>PRODUTO(S)</th>
                <th>VALOR TOTAL</th>
                <th>STATUS</th>
                <th>DATA</th>
                <th>AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {filteredPedidos.length > 0 ? (
                filteredPedidos.map((pedido) => (
                  <tr key={pedido.id} onClick={() => openModal(pedido)} style={{ cursor: 'pointer' }}>
                    <td>
                      <label htmlFor={`checkbox[${pedido.id}]`}>
                        <input
                          id={`checkbox[${pedido.id}]`}
                          type="checkbox"
                          checked={pedido.checked || allChecked}
                          onChange={() => handleIndividualCheckboxChange(pedido.id)}
                          aria-label={`checkbox[${pedido.id}]`}
                        />
                      </label>
                    </td>
                    <td>{pedido.id}</td>
                    <td>{pedido.sellerNickname}</td>
                    <td>({pedido.buyerNickname})</td>
                    <td>{pedido.items}</td>
                    <td>{pedido.codRastreio}</td>
                    <td>{`R$ ${parseFloat(pedido.totalAmount).toFixed(2)}`}</td>
                    <td>
                      <StatusButton status={pedido.status === 'cancelled' ? 'Cancelado' : 'Pago'}>
                        {pedido.status === 'cancelled' ? 'Cancelado' : 'Pago'}
                      </StatusButton>
                    </td>
                    <td>{dayjs(pedido.dateCreated).format('DD/MM/YYYY')}</td>
                    <td>
                      <button
                        onClick={() => handleGerarEtiqueta(pedido.id)}
                        style={{
                          backgroundColor: '#001f3f',
                          color: '#fff',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          border: 'none',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          width: '116px',
                        }}
                      >
                        Gerar Etiqueta
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12">Nenhum pedido encontrado</td>
                </tr>
              )}
            </tbody>
          </Table>

          {modalVisible && selectedPedido && (
            <ModalOverlay onClick={handleOverlayClick}>
              <Modal>
                <ModalContent>
                  <CloseButton onClick={closeModal}>X</CloseButton>
                  <h2>Detalhes do Pedido #{selectedPedido.id}</h2>
                  <p>
                    <strong>Conta:</strong> {selectedPedido.vinculo ? selectedPedido.vinculo.numeroPEDIDO || 'N/A' : 'N/A'}
                  </p>
                  <p>
                    <strong>Dados do Pedido:</strong> {selectedPedido.titulo}
                  </p>
                  <p>
                    <strong>Código de Rastreio:</strong> {selectedPedido.codRastreio || 'N/A'}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedPedido.status === 0 ? 'Não Pago' : 'Pago'}
                  </p>
                  <p>
                    <strong>Canal:</strong> {selectedPedido.vinculo ? selectedPedido.vinculo.numeroPEDIDO || 'N/A' : 'N/A'}
                  </p>
                  <p>
                    <strong>Data:</strong> {dayjs(selectedPedido.dateCreated).format('DD/MM/YYYY')}
                  </p>
                  <p>
                    <strong>Produtos:</strong>
                  </p>
                  <ItemTable>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Verifique se items é um array antes de aplicar o map */}
                      {(Array.isArray(selectedPedido.items) ? selectedPedido.items : []).map((item, index) => (
                        <tr key={index}>
                          <td>{item}</td>
                          <td>1</td> {/* Ajuste conforme necessário */}
                          <td>{`R$ ${parseFloat(selectedPedido.totalAmount).toFixed(2)}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </ItemTable>
                </ModalContent>
              </Modal>
            </ModalOverlay>
          )}
        </Container>
      </Main>
    </>
  );
}

export default Pedidos;
