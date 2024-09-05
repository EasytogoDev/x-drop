/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
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
  const [isLoadingProducts, setIsLoadingProducts] = useState([]);


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
    carregaPedidos(); // Chame a função de carregar pedidos da API diretamente
  }, []);
  
  function carregaPedidos() {
    const accessToken = Cookies.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzdWFyaW8iOiJKb8OjbyBkYSBTaWx2YSIsImVtYWlsIjoiZ3VzdGF2b2hwQGVhc3l0b2dvLmNvbS5iciIsInRpcG8iOjIsImF0aXZvIjoxLCJlbXByZXNhIjoxLCJpYXQiOjE3MjU0Nzk0OTIsImV4cCI6MTcyNjA4NDI5Mn0.7hhh3T_DUgLEmA66NDHe78F5CruqnjWPJwnpbZFyAX0'); // Pegue o token de autenticação
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pedidos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Supondo que o resultado seja uma lista de pedidos
        const mappedOrders = result.map((pedido) => ({
          id: pedido.ID,
          supplier: pedido.Fornecedor,
          total: pedido.Total,
          date: pedido.Data,
          status: pedido.Status,
        }));
        setOrders(mappedOrders); // Atualiza o estado com os pedidos
        setLoading(false); // Define o loading como falso quando os pedidos forem carregados
      })
      .catch((error) => {
        console.error('Erro ao carregar os pedidos:', error);
        setLoading(false); // Define o loading como falso no caso de erro
      });
  }
  

  useEffect(() => {
    carregaPedidos();
  }, [])

  function carregaPedidos() {
    const accessToken = Cookies.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzdWFyaW8iOiJKb8OjbyBkYSBTaWx2YSIsImVtYWlsIjoiZ3VzdGF2b2hwQGVhc3l0b2dvLmNvbS5iciIsInRpcG8iOjIsImF0aXZvIjoxLCJlbXByZXNhIjoxLCJpYXQiOjE3MjU0Nzk0OTIsImV4cCI6MTcyNjA4NDI5Mn0.7hhh3T_DUgLEmA66NDHe78F5CruqnjWPJwnpbZFyAX0');
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
          {isLoadingProducts.length === 0 ? (
            <Spin size="large" />
          ) : (
            <List
              header={<div>Produtos</div>}
              dataSource={isLoadingProducts}
              renderItem={item => (
                <List.Item>
                  {item.name} - Quantidade: {item.quantity} - Preço: R${item.price}
                </List.Item>
              )}
            />
          )}
        </StyledModal>
      )}
    </>
  );
}

export default Pedidos;
