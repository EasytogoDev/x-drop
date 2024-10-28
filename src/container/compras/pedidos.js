/* eslint-disable */
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { Table, Button, Input, Select, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';

const { RangePicker } = DatePicker;
const { Option } = Select;

function Pedidos() {
  const PageRoutes = [
    { path: '/admin', breadcrumbName: 'Dashboard' },
    { path: '', breadcrumbName: 'Compras > Pedidos' },
  ];

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

  const [integracoes, setIntegracoes] = useState([]);

  useEffect(() => {
    carregaIntegracoes();
    carregaPedidosMeli();
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

  function carregaPedidosMeli() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/compras`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result && result.compras) {
          const pedidos = result.compras.map((compra) => ({
            id: compra.codigoCOMPRA, 
            status: compra.statusCOMPRA, 
            totalAmount: compra.valorliquidoCOMPRA, 
            buyerNickname: compra.usuarioCOMPRA,  
            sellerNickname: compra.fornecedorCOMPRA,
            dateCreated: compra.datapedidoCOMPRA,
            items: `Produtos: ${compra.quantidadeprodutosCOMPRA}`,  
          }));

          setPedidosMeli(pedidos);
          setFilteredPedidos(pedidos);
        } else {
          console.error('Nenhuma compra encontrada:', result);
        }
      })
      .catch((error) => console.error('Erro ao carregar compras:', error));
  }

  const handleFilterChange = () => {
    let pedidosFiltrados = [...pedidosMeli];

    if (filters.status && filters.status !== 'Todos') {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.status === filters.status);
    }

    if (filters.canal) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.vinculo && pedido.vinculo.canal === filters.canal);
    }

    if (filters.integracao) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.integracao === filters.integracao);
    }

    if (filters.dataInicio) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.dateCreated).isAfter(dayjs(filters.dataInicio).subtract(1, 'day'))
      );
    }

    if (filters.dataFim) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.dateCreated).isBefore(dayjs(filters.dataFim).add(1, 'day'))
      );
    }

    if (filters.search) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          (pedido.dadosPedido &&
            pedido.dadosPedido.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.codRastreio &&
            pedido.codRastreio.toLowerCase().includes(filters.search.toLowerCase())) ||
          (pedido.conta && pedido.conta.toLowerCase().includes(filters.search.toLowerCase())) ||
          String(pedido.id).includes(filters.search)
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

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Compras - Pedidos" routes={PageRoutes} />
      <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Input
          placeholder="Buscar por Nome do Cliente, CEP, rastreio, Cidade ou id do pedido"
          value={filters.search}
          onChange={handleSearchChange}
          suffix={<SearchOutlined />}
          style={{ marginBottom: '20px', width: '100%' }}
        />
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <RangePicker
            format="DD/MM/YYYY"
            value={
              filters.dataInicio && filters.dataFim
                ? [dayjs(filters.dataInicio), dayjs(filters.dataFim)]
                : []
            }
            onChange={(dates) => {
              setFilters({
                ...filters,
                dataInicio: dates ? dates[0].format('YYYY-MM-DD') : '',
                dataFim: dates ? dates[1].format('YYYY-MM-DD') : '',
              });
            }}
            style={{ width: '100%' }}
          />
          <Select
            placeholder="Filtrar Canal"
            value={filters.canal}
            onChange={(value) => setFilters({ ...filters, canal: value })}
            style={{ width: '100%' }}
          >
            <Option value="">- Selecione -</Option>
            {integracoes.map((integracao) => (
              <Option key={integracao.id} value={integracao.nome}>
                {integracao.nome}
              </Option>
            ))}
          </Select>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <Button type="primary" onClick={handleFilterChange}>
            Filtrar
          </Button>
          <Button onClick={handleClearFilters}>Limpar Filtros</Button>
        </div>
        <Table
          dataSource={filteredPedidos}
          columns={[
            {
              title: 'Código do Pedido',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Data',
              dataIndex: 'dateCreated',
              key: 'dateCreated',
              render: (text) => dayjs(text).format('DD/MM/YYYY'),
            },
            {
              title: 'Nome do Fornecedor',
              dataIndex: 'buyerNickname',
              key: 'buyerNickname',
            },
          ]}
          pagination={{ pageSize: 5 }}
          rowKey={(record) => record.id}
          locale={{ emptyText: 'Nenhum pedido encontrado' }}
        />
      </div>
    </>
  );
}

export default Pedidos;
