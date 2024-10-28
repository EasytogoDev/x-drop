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
import { CheckCircleOutlined, ExclamationCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { DatePicker, Button, Select, Input, Drawer, Divider, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
const { Option } = Select;
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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  // Estado para a paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Limite de 10 pedidos por página

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

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pedidos`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // Verifique o payload retornado

        if (Array.isArray(result) && result.length > 0) {
          const pedidos = result.map((pedido) => ({
            codigo: pedido.codigo,
            nome: pedido.nome,
            sobrenome: pedido.sobrenome,
            status: pedido.status,
            datacriacao: pedido.datacriacao,
            totalAmount: pedido.total,
            buyerNickname: `${pedido.nome} ${pedido.sobrenome}`,
            rua: pedido.rua,
            numero: pedido.numero,
            bairro: pedido.bairro,
            cep: pedido.cep,
            integracao: pedido.integracao,
            telefone: `${pedido.areaTelefone} ${pedido.telefone}`,
            email: pedido.email,
            items: pedido.Itens ? pedido.Itens.map((item) => ({
              title: item.produto,
              quantity: item.quantidade,
              sku: item.produto,
              price: item.preco,
            })) : [],
          }));

          setPedidosMeli(pedidos);
          setFilteredPedidos(pedidos);
        } else {
          console.error('Nenhum pedido encontrado ou formato inesperado:', result);
        }
      })
      .catch((error) => console.error('Erro ao carregar pedidos:', error));
  }

  const handleCheckboxChange = () => {
    setAllChecked(!allChecked);
    setFilteredPedidos((prevPedidos) => prevPedidos.map((pedido) => ({ ...pedido, checked: !allChecked })));
  };

  function showDrawer(pedido) {
    setPedidoSelecionado(pedido);  // Define o pedido selecionado
    setDrawerVisible(true);        // Mostra o drawer
  };  

  const handleIndividualCheckboxChange = (id) => {
    setFilteredPedidos((prevPedidos) =>
      prevPedidos.map((pedido) => (pedido.codigo === id ? { ...pedido, checked: !pedido.checked } : pedido)),
    );
  };

  useEffect(() => {
    handleFilterChange();
  }, [filters]);

  const handleFilterChange = () => {
    let pedidosFiltrados = [...pedidosMeli];

    if (filters.status && filters.status !== 'Todos') {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.status === filters.status);
    }

    if (filters.canal) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.canal === filters.canal);
    }

    if (filters.integracao) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.integracao === filters.integracao);
    }

    if (filters.dataInicio) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.datacriacao).isAfter(dayjs(filters.dataInicio).subtract(1, 'day'))
      );
    }

    if (filters.dataFim) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.datacriacao).isBefore(dayjs(filters.dataFim).add(1, 'day'))
      );
    }

    if (filters.search) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          (pedido.nome && pedido.nome.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.sobrenome && pedido.sobrenome.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.cep && pedido.cep.includes(filters.search)) ||
          (pedido.codigo && String(pedido.codigo).toLowerCase().includes(filters.search.toLowerCase()))
      );
    }

    setFilteredPedidos(pedidosFiltrados);
  };

  const handleSelectChange = (value, field) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  };

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: e.target.value }));
    handleFilterChange();
  };

  const handleDateChange = (dates) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dataInicio: dates ? dates[0].format('YYYY-MM-DD') : '',
      dataFim: dates ? dates[1].format('YYYY-MM-DD') : '',
    }));
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

  // Funções de paginação
  const totalPages = Math.ceil(filteredPedidos.length / itemsPerPage);

  const currentPedidos = filteredPedidos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
};


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Vendas - Pedidos" routes={PageRoutes} />
      <Main>
        <Container>
          <SearchSection>
            <Input
              placeholder="Buscar por nome do cliente ou id do pedido"
              value={filters.search}
              onChange={handleSearchChange}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
              <RangePicker
                format="DD/MM/YYYY"
                value={filters.dataInicio && filters.dataFim ? [dayjs(filters.dataInicio), dayjs(filters.dataFim)] : []}
                onChange={handleDateChange}
                style={{ width: '100%' }}
              />

              <Select
                placeholder="Filtrar Canal"
                value={filters.canal}
                onChange={(value) => handleSelectChange(value, 'canal')}
                style={{ width: '100%' }}
              >
                <Option value="">- Selecione -</Option>
                {integracoes.map((integracao) => (
                  <Option key={integracao.id} value={integracao.nome}>
                    {integracao.nome}
                  </Option>
                ))}
              </Select>

              <Select
                placeholder="Status do pedido"
                value={filters.status}
                onChange={(value) => handleSelectChange(value, 'status')}
                style={{ width: '100%' }}
              >
                <Option value="Todos">Todos</Option>
                <Option value="pending">Pendente</Option>
                <Option value="pre-invoiced">Pré-faturado</Option>
                <Option value="paid">Pago</Option>
                <Option value="cancelled">Cancelado</Option>
              </Select>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <Button type="primary" onClick={handleFilterChange}>
                Filtrar
              </Button>
              <Button onClick={handleClearFilters}>Limpar Filtros</Button>
            </div>
          </SearchSection>

          <Table>
            <thead>
              <tr>
                <th>Integração</th>
                <th>Código do Pedido</th>
                <th>Data</th>
                <th>Nome do Cliente</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentPedidos.length > 0 ? (
                currentPedidos.map((pedido) => (
                  <tr key={pedido.codigo}>
                    <td>{pedido.integracao}</td> {/* Canal de integração, caso exista */}
                    <td>{pedido.codigo}</td> {/* Código do pedido */}
                    <td>{dayjs(pedido.datacriacao).format('DD/MM/YYYY')}</td> {/* Data de criação */}
                    <td>{`${pedido.nome} ${pedido.sobrenome}`}</td> {/* Nome e sobrenome do cliente */}
                    <td>
                      {pedido.status === 'paid' && (
                        <Tag icon={<CheckCircleOutlined />} color="green">
                          Pago
                        </Tag>
                      )}
                      {pedido.status === 'pending' && (
                        <Tag icon={<ExclamationCircleOutlined />} color="yellow">
                          Pendente
                        </Tag>
                      )}
                      {pedido.status === 'cancelled' && (
                        <Tag icon={<CloseCircleOutlined />} color="red">
                          Cancelado
                        </Tag>
                      )}
                    </td>
                    <td>
                      <Button icon={<SearchOutlined />} onClick={() => showDrawer(pedido)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum pedido encontrado</td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Botões de paginação */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Página Anterior
            </Button>
            <span>Página {currentPage} de {totalPages}</span>
            <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Próxima Página
            </Button>
          </div>

          <Drawer
            title={`Detalhes do Pedido #${pedidoSelecionado?.codigo}`}
            placement="top"
            onClose={closeDrawer}
            visible={drawerVisible}
            height="80%"
            bodyStyle={{ padding: '20px', fontSize: '16px' }} // Ajusta o padding e fonte
          >
            {pedidoSelecionado && (
              <div style={{ padding: '20px', fontSize: '16px' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  Integração: {pedidoSelecionado.integracao}
                </h3>
                <p>
                  <strong>Código do Pedido:</strong> {pedidoSelecionado.codigo}
                </p>
                <p>
                  <strong>Data:</strong> {dayjs(pedidoSelecionado.datacriacao).format('DD/MM/YYYY')}
                </p>
                <p>
                  <strong>Status:</strong>
                  <Tag
                    color={
                      pedidoSelecionado.status === 'paid'
                        ? 'green'
                        : pedidoSelecionado.status === 'pending'
                          ? 'yellow'
                          : 'red'
                    }
                  >
                    {pedidoSelecionado.status === 'paid'
                      ? 'Pago'
                      : pedidoSelecionado.status === 'pending'
                        ? 'Pendente'
                        : 'Cancelado'}
                  </Tag>
                </p>

                <Divider />

                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Produtos</h3>
                <ul>
                  {Array.isArray(pedidoSelecionado.items) ? (
                    pedidoSelecionado.items.map((item, index) => (
                      <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <div>
                          <p>
                            <strong>Produto:</strong> {item.title}
                          </p>
                          <p>
                            <strong>Quantidade:</strong> {parseFloat(item.quantity).toFixed(0)}
                          </p>
                          <p>
                            <strong>SKU:</strong> {item.sku || 'N/A'}
                          </p>
                          <p>
                            <strong>Valor Total:</strong>{' '}
                            {item.price ? `R$ ${parseFloat(item.price).toFixed(2)}` : 'Não disponível'}
                          </p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p>Nenhum produto encontrado</p>
                  )}
                </ul>

                <Divider />

                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Dados do Cliente</h3>
                <p>
                  <strong>Nome:</strong> {`${pedidoSelecionado.nome} ${pedidoSelecionado.sobrenome}` || 'N/A'}
                </p>
                <p>
                  <strong>Telefone:</strong> {pedidoSelecionado.telefone || 'N/A'}
                </p>
                <p>
                  <strong>Email:</strong> {pedidoSelecionado.email || 'N/A'}
                </p>

                <Divider />

                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Endereço</h3>
                <p>
                  <strong>Endereço:</strong> {pedidoSelecionado.rua}, {pedidoSelecionado.numero},{' '}
                  {pedidoSelecionado.complemento || 'N/A'}
                </p>
                <p>
                  <strong>Bairro:</strong> {pedidoSelecionado.bairro || 'N/A'}
                </p>
                <p>
                  <strong>CEP:</strong> {pedidoSelecionado.cep || 'N/A'}
                </p>
              </div>
            )}
          </Drawer>
        </Container>
      </Main>
    </>
  );
}

export default Pedidos;
