/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Input, Button, Modal, Form, Select, Tooltip, message, List, Card } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Search } = Input;
const { Option } = Select;

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

const StyledButton = styled(Button)`
  margin-bottom: 16px;
  width: 100%;
  border-radius: 8px;
  background-color: #722ed1;
  border-color: #722ed1;
  box-shadow: 0 4px 12px rgba(114, 46, 209, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background-color: #531dab;
    border-color: #531dab;
    box-shadow: 0 6px 20px rgba(83, 29, 171, 0.5);
    transform: translateY(-2px);
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
    color: #722ed1;
  }
`;

function mySubscription() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Configurações',
    },
    {
      path: '',
      breadcrumbName: 'Minhas Assinaturas',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Assinatura A', status: 'Ativo', price: 'R$ 50,00' },
    { id: 2, name: 'Assinatura B', status: 'Pendente', price: 'R$ 30,00' },
  ]);

  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddSubscription = () => {
    form.validateFields().then(values => {
      const newSubscription = {
        id: subscriptions.length + 1,
        ...values,
      };
      setSubscriptions([...subscriptions, newSubscription]);
      setIsAddModalOpen(false);
      form.resetFields();
      message.success('Assinatura adicionada com sucesso!');
    }).catch(info => {
      message.error('Por favor, preencha todos os campos.');
    });
  };

  const handleViewDetails = (subscription) => {
    setSelectedSubscription(subscription);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsDetailModalOpen(false);
  };

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Minhas Assinaturas" routes={PageRoutes} />
      <StyledMain>
        
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <StyledSearch
              placeholder="Buscar assinaturas"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
            />
            <Tooltip title="Adicionar nova assinatura">
              <StyledButton
                type="primary"
                onClick={() => setIsAddModalOpen(true)}
                icon={<PlusOutlined />}
              >
                Adicionar assinatura
              </StyledButton>
            </Tooltip>
          </Col>
          <Col span={18}>
            <Row gutter={[16, 16]}>
              {filteredSubscriptions.map(subscription => (
                <Col key={subscription.id} span={8}>
                  <StyledCard hoverable onClick={() => handleViewDetails(subscription)}>
                    <Card.Meta
                      title={<strong>{subscription.name}</strong>}
                      description={subscription.status}
                    />
                    <p style={{ marginTop: '8px' }}>{subscription.price}</p>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </StyledMain>

      {/* Modal para adicionar assinatura */}
      <StyledModal
        title="Adicionar Nova Assinatura"
        visible={isAddModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Por favor, insira o nome da assinatura' }]}
          >
            <Input placeholder="Nome da assinatura" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Por favor, insira o status da assinatura' }]}
          >
            <Input placeholder="Status da assinatura" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <Form.Item
            label="Preço"
            name="price"
            rules={[{ required: true, message: 'Por favor, insira o preço da assinatura' }]}
          >
            <Input placeholder="Preço da assinatura" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            onClick={handleAddSubscription}
          >
            Adicionar
          </StyledButton>
        </Form>
      </StyledModal>

      {/* Modal para detalhes da assinatura */}
      {selectedSubscription && (
        <StyledModal
          title="Detalhes da Assinatura"
          visible={isDetailModalOpen}
          onCancel={handleCloseModal}
          footer={null}
        >
          <p><strong>Nome:</strong> {selectedSubscription.name}</p>
          <p><strong>Status:</strong> {selectedSubscription.status}</p>
          <p><strong>Preço:</strong> {selectedSubscription.price}</p>
        </StyledModal>
      )}
    </>
  );
}

export default mySubscription;
