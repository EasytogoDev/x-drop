/*eslint-disable*/
import React, { useState } from 'react';
import { Layout, Table, Button, Row, Col, Typography } from 'antd';
import {
  CheckOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const initialData = [
  {
    key: '1',
    empresa: 'XDROP',
    codigo: '480',
    vencimento: '01/08/2024 - 00:02',
    tipo: 'Receita',
    previsto: 'R$ 46,63',
    realizado: 'R$ 46,63',
    situacao: 'Foi Pago',
    planoConta: '10.01.02 — REVENDA DE MERCADORIAS',
    clienteFornecedor: '28103156809 — Maria Clara Alves',
  },
  {
    key: '2',
    empresa: 'XDROP',
    codigo: '481',
    vencimento: '01/08/2024 - 09:07',
    tipo: 'Receita',
    previsto: 'R$ 274,94',
    realizado: 'R$ 274,94',
    situacao: 'Foi Pago',
    planoConta: '10.01.02 — REVENDA DE MERCADORIAS',
    clienteFornecedor: '42901022391 — Manuel Carlos Gomes Reinaldo',
  },
  {
    key: '3',
    empresa: 'XDROP',
    codigo: '482',
    vencimento: '01/08/2024 - 11:24',
    tipo: 'Receita',
    previsto: 'R$ 59,17',
    realizado: 'R$ 0,00',
    situacao: 'Vencido',
    planoConta: '10.01.02 — REVENDA DE MERCADORIAS',
    clienteFornecedor: '07699720717 — Amanda Costa Sales',
  },
];

const Entradas = () => {
  const [data] = useState(initialData);

  const columns = [
    {
      title: 'Empresa',
      dataIndex: 'empresa',
      key: 'empresa',
    },
    {
      title: 'Código',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Vencimento',
      dataIndex: 'vencimento',
      key: 'vencimento',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Previsto',
      dataIndex: 'previsto',
      key: 'previsto',
    },
    {
      title: 'Realizado',
      dataIndex: 'realizado',
      key: 'realizado',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
      key: 'situacao',
      render: (text) => (
        <span style={{ color: text === 'Vencido' ? 'red' : 'green' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Plano de Conta',
      dataIndex: 'planoConta',
      key: 'planoConta',
    },
    {
      title: 'Cliente / Fornecedor',
      dataIndex: 'clienteFornecedor',
      key: 'clienteFornecedor',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          <Title level={3} style={{ margin: '16px', color: '#333' }}>Financeiro - Lançamentos</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            {/* Box único com todos os elementos */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', textAlign: 'center' }}>
              
              {/* Botões e Resumo do Período */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Button icon={<FileSearchOutlined />} size="large" style={{ backgroundColor: '#555', border: 'none', color: '#fff', display: 'block' }}>
                    Período
                  </Button>
                  <Text style={{ color: '#555', marginTop: '5px', fontWeight: 'bold' }}>R$ 0,00</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button icon={<ExclamationCircleOutlined />} size="large" style={{ backgroundColor: 'red', border: 'none', color: '#fff', display: 'block' }}>
                    Contas a pagar
                  </Button>
                  <Text style={{ color: 'red', marginTop: '5px', fontWeight: 'bold' }}>R$ 0,00</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button icon={<CheckOutlined />} size="large" style={{ backgroundColor: 'green', border: 'none', color: '#fff', display: 'block' }}>
                    Contas a receber
                  </Button>
                  <Text style={{ color: 'green', marginTop: '5px', fontWeight: 'bold' }}>R$ 28.612,17</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button icon={<CheckOutlined />} size="large" style={{ backgroundColor: '#607D8B', border: 'none', color: '#fff', display: 'block' }}>
                    Saldo
                  </Button>
                  <Text style={{ color: '#607D8B', marginTop: '5px', fontWeight: 'bold' }}>R$ 28.612,17</Text>
                </div>
              </div>

              {/* Resumo Financeiro */}
              <div style={{ textAlign: 'left', padding: '10px' }}>
                <Row justify="space-between" style={{ marginBottom: '8px' }}>
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Previsão do período</Text></Col>
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>R$ 28.612,17</Text></Col>
                </Row>
                <Row justify="space-between" style={{ marginBottom: '8px' }}>
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Realizado período</Text></Col>
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>R$ 22.730,25</Text></Col>
                </Row>
                <Row justify="space-between">
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Não pago período</Text></Col>
                  <Col><Text style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>R$ 5.881,92</Text></Col>
                </Row>
                <Row justify="end">
                  <Col>
                    <Text style={{ fontStyle: 'italic', marginTop: '12px' }}>
                      Totais atualizados em: 16/09/2024 - 16:30
                    </Text>
                  </Col>
                </Row>
              </div>

            </div>

            {/* Tabela de Lançamentos */}
            <Table columns={columns} dataSource={data} pagination={false} style={{ marginTop: '24px', borderRadius: '8px', overflow: 'hidden' }} />

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Entradas;
