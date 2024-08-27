/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Input, Button, Modal, List, Tooltip, Spin } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
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

const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
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

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos" routes={PageRoutes} />
      <StyledMain>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <StyledSearch
              placeholder="Buscar pedidos"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col span={18}>
            {loading ? (
              <Spin size="large" />
            ) : (
              <Row gutter={[16, 16]}>
                {filteredOrders.map((order) => (
                  <Col key={order.id} span={8}>
                    <StyledCard
                      hoverable
                      onClick={() => handleViewDetails(order)}
                    >
                      <Card.Meta
                        title={<strong>{order.supplier}</strong>}
                        description={`Total: R$${order.total}`}
                      />
                      <p style={{ marginTop: '8px' }}>
                        Data: {order.date} <br />
                        Status: {order.status}
                      </p>
                    </StyledCard>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
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
