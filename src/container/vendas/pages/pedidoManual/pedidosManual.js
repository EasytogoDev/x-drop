/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main } from '../../../styled';
import { Input, Button, Select, Row, Col } from 'antd';
import { Container, SectionTitle, StyledButton, CepButton, InfoBox, AlertBox } from './styles.ts';

const { Option } = Select;

function PedidosManuais() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pedidos Manuais',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos Manuais" routes={PageRoutes} />
      <Main>
        <Container>
          <SectionTitle>Informe os dados do pedido abaixo para fazer um lançamento manual de pedido no sistema.</SectionTitle>
          
          <Row gutter={16}>
            <Col span={24}>
              <label>Nome da Loja (Remetente da Etiqueta) *</label>
              <Input placeholder="Insira o nome da loja" />
            </Col>
            <Col span={24} style={{ marginTop: '16px' }}>
              <label>Depósito</label>
              <Select defaultValue="Fábrica Quadros" style={{ width: '100%' }}>
                <Option value="Fábrica Quadros">Fábrica Quadros</Option>
                {/* Adicionar mais opções conforme necessário */}
              </Select>
            </Col>
          </Row>

          <SectionTitle style={{ marginTop: '24px' }}>Dados do Cliente</SectionTitle>

          <Row gutter={16}>
            <Col span={12}>
              <label>Nome completo *</label>
              <Input placeholder="Insira o nome completo do cliente" />
            </Col>
            <Col span={12}>
              <label>CPF *</label>
              <Input placeholder="Insira o CPF" />
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>CEP *</label>
              <Input placeholder="Insira o CEP" />
              <CepButton type="primary">Buscar CEP</CepButton>
            </Col>
            <Col span={16} style={{ marginTop: '16px' }}>
              <label>Endereço de entrega *</label>
              <Input placeholder="Insira o endereço de entrega" />
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>Número *</label>
              <Input placeholder="Número" />
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>Complemento</label>
              <Input placeholder="Complemento" />
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>Cidade *</label>
              <Input placeholder="Cidade" />
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>UF *</label>
              <Select defaultValue="AC" style={{ width: '100%' }}>
                <Option value="AC">AC</Option>
                {/* Adicionar mais opções conforme necessário */}
              </Select>
            </Col>
            <Col span={8} style={{ marginTop: '16px' }}>
              <label>Bairro *</label>
              <Input placeholder="Bairro" />
            </Col>
          </Row>

          <SectionTitle style={{ marginTop: '24px' }}>Produtos vendidos</SectionTitle>

          <Row gutter={16}>
            <Col span={12}>
              <label>Qtd</label>
              <Input defaultValue={1} />
            </Col>
            <Col span={12}>
              <label>SKU Pai</label>
              <Input placeholder="SKU Pai" />
            </Col>
            <Col span={12} style={{ marginTop: '16px' }}>
              <label>Valor de Venda</label>
              <Input placeholder="0" />
            </Col>
            <Col span={12} style={{ marginTop: '16px' }}>
              <StyledButton type="primary">Adicionar</StyledButton>
            </Col>
          </Row>

          <InfoBox>
            Peso Total: 0<br />
            Altura Total: 0<br />
            Largura Total: 0<br />
            Comprimento Total: 0<br />
            Valor total do pedido: R$ 0,00<br />
            Valor total com Desconto: R$ 0,00<br />
            Seu saldo: R$ 0,00
          </InfoBox>

          <AlertBox>
            Atenção: verifique se possui saldo suficiente para pagar o pedido antes de gerar o pedido.
          </AlertBox>

          <StyledButton type="primary" style={{ marginTop: '16px', backgroundColor: '#28a745' }}>
            + Gerar pedido
          </StyledButton>
        </Container>
      </Main>
    </>
  );
}

export default PedidosManuais;
