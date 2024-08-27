/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Table, Input, Modal, List, Spin } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Search } = Input;

// Styled components
const StyledMain = styled(Main)`
  padding: 24px;
`;

const StyledSearch = styled(Search)`
  margin-bottom: 16px;
  border-radius: 8px;

  .ant-input {
    border-radius: 8px;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }

  .ant-modal-title {
    font-weight: bold;
    color: #52c41a;
  }
`;

function Pedidos() {
  const PageRoutes = [
    {
      path: '/admin/compras',
      breadcrumbName: 'Compras',
    },
    {
      path: '',
      breadcrumbName: 'Pedidos',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
  };

  const filteredOrders = orders.filter(order =>
    order.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Fornecedor',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text) => `R$${text}`,
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (text, record) => (
        <a onClick={() => handleViewDetails(record)}>Ver Detalhes</a>
      ),
    },
  ];

  useEffect(() => {
    // Simulando uma requisição à API com setTimeout
    setTimeout(() => {
      const fetchedOrders = [
        { id: 1, supplier: 'Fornecedor A', total: 1500, date: '2024-08-01', status: 'Pendente' },
        { id: 2, supplier: 'Fornecedor B', total: 2200, date: '2024-08-05', status: 'Concluído' },
        { id: 3, supplier: 'Fornecedor C', total: 1800, date: '2024-08-07', status: 'Cancelado' },
        { id: 4, supplier: 'Fornecedor D', total: 3200, date: '2024-08-10', status: 'Pendente' },
        { id: 5, supplier: 'Fornecedor E', total: 2700, date: '2024-08-12', status: 'Concluído' },
        { id: 6, supplier: 'Fornecedor F', total: 3400, date: '2024-08-15', status: 'Cancelado' },
        { id: 7, supplier: 'Fornecedor G', total: 1100, date: '2024-08-17', status: 'Pendente' },
        { id: 8, supplier: 'Fornecedor H', total: 1950, date: '2024-08-18', status: 'Concluído' },
        { id: 9, supplier: 'Fornecedor I', total: 2300, date: '2024-08-19', status: 'Pendente' },
        { id: 10, supplier: 'Fornecedor J', total: 2900, date: '2024-08-20', status: 'Concluído' },
      ];
      setOrders(fetchedOrders);
      setLoading(false);
    }, 2000); // Simula um atraso de 2 segundos
  }, []);

  useEffect(() => {
    carregaPedidos();
  }, [])

  function carregaPedidos() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/produtos/3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.map(product => ({
          id: product.ID,
          name: product.Nome,
          price: product.PrecoVenda,
          category: product.Categoria,
        }));
        setProducts(mappedProducts);
        setIsLoadingProducts(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingProducts(false);
      });
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos" routes={PageRoutes} />
      <StyledMain>
        <StyledSearch
          placeholder="Buscar pedidos"
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          prefix={<SearchOutlined />}
        />
        {loading ? (
          <Spin size="large" />
        ) : (
          <Table
            columns={columns}
            dataSource={filteredOrders}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        )}
      </StyledMain>

      {/* Modal para detalhes do pedido */}
      {selectedOrder && (
        <StyledModal
          title={`Detalhes do Pedido - ${selectedOrder.supplier}`}
          visible={isDetailModalOpen}
          onCancel={handleCloseModal}
          footer={null}
        >
          <p><strong>Fornecedor:</strong> {selectedOrder.supplier}</p>
          <p><strong>Total:</strong> R${selectedOrder.total}</p>
          <p><strong>Data:</strong> {selectedOrder.date}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>

          {/* Lista de produtos (exemplo estático, pode ser dinâmico conforme necessidade) */}
          <List
            header={<div>Produtos</div>}
            dataSource={[
              { name: 'Produto 1', quantity: 10, price: 100 },
              { name: 'Produto 2', quantity: 5, price: 200 },
              // Adicione mais produtos conforme necessário
            ]}
            renderItem={item => (
              <List.Item>
                {item.name} - Quantidade: {item.quantity} - Preço: R${item.price}
              </List.Item>
            )}
          />
        </StyledModal>
      )}
    </>
  );
}

export default Pedidos;
