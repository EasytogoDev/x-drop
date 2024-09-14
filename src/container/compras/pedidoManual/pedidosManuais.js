/* eslint-disable */
import React, { useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers.js'; // Verifique o caminho correto do PageHeader
import { Container, SectionTitle, StyledButton, CepButton, InfoBox, AlertBox } from './styles.ts'; // Ajuste conforme o local de estilos correto
import { Input, Select, Row, Col } from 'antd';

const { Option } = Select;

function PedidosManuais() {
  const PageRoutes = [
    { path: '/admin', breadcrumbName: 'Dashboard' },
    { path: '', breadcrumbName: 'Compras > Pedidos Manuais' },
  ];

  // Estado local para armazenar dados dos pedidos
  const [pedidoData, setPedidoData] = useState({
    nomeLoja: '',
    deposito: 'Fábrica Quadros',
    nomeCliente: '',
    cpf: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: 'AC',
    bairro: '',
    qtdProduto: 1,
    skuPai: '',
    valorVenda: '',
  });

  // Handlers para atualizações de formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPedidoData({ ...pedidoData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setPedidoData({ ...pedidoData, [name]: value });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Compras - Pedidos Manuais" routes={PageRoutes} />
      <Container> {/* Removi o 'Main' pois não estava sendo exportado */}
        <SectionTitle>Informe os dados do pedido abaixo para fazer um lançamento manual de pedido no sistema.</SectionTitle>

        <Row gutter={16}>
          <Col span={24}>
            <label>Nome da Loja (Remetente da Etiqueta) *</label>
            <Input 
              name="nomeLoja"
              value={pedidoData.nomeLoja}
              onChange={handleInputChange}
              placeholder="Insira o nome da loja" 
            />
          </Col>
          <Col span={24} style={{ marginTop: '16px' }}>
            <label>Depósito</label>
            <Select 
              value={pedidoData.deposito}
              onChange={(value) => handleSelectChange('deposito', value)}
              style={{ width: '100%' }}
            >
              <Option value="Fábrica Quadros">Fábrica Quadros</Option>
              {/* Adicionar mais opções conforme necessário */}
            </Select>
          </Col>
        </Row>

        <SectionTitle style={{ marginTop: '24px' }}>Dados do Cliente</SectionTitle>

        <Row gutter={16}>
          <Col span={12}>
            <label>Nome completo *</label>
            <Input 
              name="nomeCliente"
              value={pedidoData.nomeCliente}
              onChange={handleInputChange}
              placeholder="Insira o nome completo do cliente" 
            />
          </Col>
          <Col span={12}>
            <label>CPF *</label>
            <Input 
              name="cpf"
              value={pedidoData.cpf}
              onChange={handleInputChange}
              placeholder="Insira o CPF" 
            />
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>CEP *</label>
            <Input 
              name="cep"
              value={pedidoData.cep}
              onChange={handleInputChange}
              placeholder="Insira o CEP" 
            />
            <CepButton type="primary">Buscar CEP</CepButton>
          </Col>
          <Col span={16} style={{ marginTop: '16px' }}>
            <label>Endereço de entrega *</label>
            <Input 
              name="endereco"
              value={pedidoData.endereco}
              onChange={handleInputChange}
              placeholder="Insira o endereço de entrega" 
            />
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>Número *</label>
            <Input 
              name="numero"
              value={pedidoData.numero}
              onChange={handleInputChange}
              placeholder="Número" 
            />
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>Complemento</label>
            <Input 
              name="complemento"
              value={pedidoData.complemento}
              onChange={handleInputChange}
              placeholder="Complemento" 
            />
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>Cidade *</label>
            <Input 
              name="cidade"
              value={pedidoData.cidade}
              onChange={handleInputChange}
              placeholder="Cidade" 
            />
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>UF *</label>
            <Select 
              value={pedidoData.uf}
              onChange={(value) => handleSelectChange('uf', value)}
              style={{ width: '100%' }}
            >
              <Option value="AC">AC</Option>
              {/* Adicionar mais opções conforme necessário */}
            </Select>
          </Col>
          <Col span={8} style={{ marginTop: '16px' }}>
            <label>Bairro *</label>
            <Input 
              name="bairro"
              value={pedidoData.bairro}
              onChange={handleInputChange}
              placeholder="Bairro" 
            />
          </Col>
        </Row>

        <SectionTitle style={{ marginTop: '24px' }}>Produtos vendidos</SectionTitle>

        <Row gutter={16}>
          <Col span={12}>
            <label>Qtd</label>
            <Input 
              name="qtdProduto"
              value={pedidoData.qtdProduto}
              onChange={handleInputChange}
              defaultValue={1} 
            />
          </Col>
          <Col span={12}>
            <label>SKU Pai</label>
            <Input 
              name="skuPai"
              value={pedidoData.skuPai}
              onChange={handleInputChange}
              placeholder="SKU Pai" 
            />
          </Col>
          <Col span={12} style={{ marginTop: '16px' }}>
            <label>Valor de Venda</label>
            <Input 
              name="valorVenda"
              value={pedidoData.valorVenda}
              onChange={handleInputChange}
              placeholder="0" 
            />
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
    </>
  );
}

export default PedidosManuais;
