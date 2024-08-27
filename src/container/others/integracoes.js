/* eslint-disable */
import React, { useState } from 'react';
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

function Integracoes() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Configurações',
    },
    {
      path: '',
      breadcrumbName: 'Integrações',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'Integração A', status: 'Ativo', type: 'API' },
    { id: 2, name: 'Integração B', status: 'Pendente', type: 'Webhook' },
  ]);

  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddIntegration = () => {
    form.validateFields().then(values => {
      const newIntegration = {
        id: integrations.length + 1,
        ...values,
      };
      setIntegrations([...integrations, newIntegration]);
      setIsAddModalOpen(false);
      form.resetFields();
      message.success('Integração adicionada com sucesso!');
    }).catch(info => {
      message.error('Por favor, preencha todos os campos.');
    });
  };

  const handleViewDetails = (integration) => {
    setSelectedIntegration(integration);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsDetailModalOpen(false);
  };

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Integrações" routes={PageRoutes} />
      <StyledMain>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <StyledSearch
              placeholder="Buscar integrações"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
            />
            <Tooltip title="Adicionar nova integração">
              <StyledButton
                type="primary"
                onClick={() => setIsAddModalOpen(true)}
                icon={<PlusOutlined />}
              >
                Adicionar integração
              </StyledButton>
            </Tooltip>
          </Col>
          <Col span={18}>
            <Row gutter={[16, 16]}>
              {filteredIntegrations.map(integration => (
                <Col key={integration.id} span={8}>
                  <StyledCard hoverable onClick={() => handleViewDetails(integration)}>
                    <Card.Meta
                      title={<strong>{integration.name}</strong>}
                      description={integration.status}
                    />
                    <p style={{ marginTop: '8px' }}>{integration.type}</p>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </StyledMain>

      {/* Modal para adicionar integração */}
      <StyledModal
        title="Adicionar Nova Integração"
        visible={isAddModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Por favor, insira o nome da integração' }]}
          >
            <Input placeholder="Nome da integração" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Por favor, insira o status da integração' }]}
          >
            <Input placeholder="Status da integração" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <Form.Item
            label="Tipo"
            name="type"
            rules={[{ required: true, message: 'Por favor, insira o tipo da integração' }]}
          >
            <Input placeholder="Tipo da integração" style={{ borderRadius: '8px' }} />
          </Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            onClick={handleAddIntegration}
          >
            Adicionar
          </StyledButton>
        </Form>
      </StyledModal>

      {/* Modal para detalhes da integração */}
      {selectedIntegration && (
        <StyledModal
          title="Detalhes da Integração"
          visible={isDetailModalOpen}
          onCancel={handleCloseModal}
          footer={null}
        >
          <p><strong>Nome:</strong> {selectedIntegration.name}</p>
          <p><strong>Status:</strong> {selectedIntegration.status}</p>
          <p><strong>Tipo:</strong> {selectedIntegration.type}</p>
        </StyledModal>
      )}
    </>
  );
}

export default Integracoes;
