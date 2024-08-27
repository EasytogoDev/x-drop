/* eslint-disable */
import styled from 'styled-components';
import React, { useState } from 'react';
import Switch from 'react-switch';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative; // Necessário para posicionar o Switch corretamente
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: calc(50% - 10px);
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 5px;
  &:hover {
    background-color: #218838;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  text-align: center;
  font-size: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  display: block;
  font-size: 14px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SwitchLabel = styled.span`
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
`;

function Devolucao() {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState({});
  const [freight, setFreight] = useState(false);
  const [freightValue, setFreightValue] = useState(0);
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    if (!orderId) formErrors.orderId = 'ID do Pedido é obrigatório';
    if (!reason) formErrors.reason = 'Motivo da Devolução é obrigatório';

    if (Object.keys(formErrors).length === 0) {
      // Handle form submission
      console.log({ orderId, reason, details, freight, freightValue, value });
      // Clear form
      setOrderId('');
      setReason('');
      setDetails('');
      setFreight(false);
      setFreightValue(0);
      setValue(0);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/admin/estoque',
      breadcrumbName: 'Estoque',
    },
    {
      path: '',
      breadcrumbName: 'Devolução',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Devolução" routes={PageRoutes} />
      <Main>
        <Container>
          <FormWrapper>
            <SwitchWrapper style={{ display: 'flex', alignItems: 'center'}}>
              <Label style={{ marginRight: 5}}>Frete:</Label>
              <Switch 
                checked={freight} 
                onChange={() => setFreight(!freight)} 
                onColor="#007bff" 
                offColor="#888" 
                height={20} 
                width={40} 
              />
              <SwitchLabel>{freight ? 'Sim' : 'Não'}</SwitchLabel>
            </SwitchWrapper>
            <Title>Devolução de Mercadoria</Title>
            <form onSubmit={handleSubmit}>
              <Row>
                <div style={{ flex: '48%' }}>
                  <Label htmlFor="orderId">ID do Pedido:</Label>
                  <Input
                    type="text"
                    id="orderId"
                    placeholder="Digite o ID do Pedido"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                  {errors.orderId && <ErrorMessage>{errors.orderId}</ErrorMessage>}
                </div>
              </Row>
              {freight && (
                <Row>
                  <div style={{ flex: '48%' }}>
                    <Label htmlFor="freightValue">Valor do Frete (R$):</Label>
                    <Input
                      type="number"
                      id="freightValue"
                      placeholder="0"
                      value={freightValue}
                      onChange={(e) => setFreightValue(e.target.value)}
                      required
                    />
                  </div>
                </Row>
              )}
              <Row>
                <div style={{ flex: '48%' }}>
                  <Label htmlFor="value">Valor (R$):</Label>
                  <Input
                    type="number"
                    id="value"
                    placeholder="0"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                  />
                </div>
              </Row>
              <Label htmlFor="reason">Motivo da Devolução:</Label>
              <Input
                type="text"
                id="reason"
                placeholder="Digite o motivo da devolução"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
              {errors.reason && <ErrorMessage>{errors.reason}</ErrorMessage>}
              <Label htmlFor="details">Detalhes Adicionais:</Label>
              <TextArea
                id="details"
                rows="3"
                placeholder="Digite quaisquer detalhes adicionais"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <ButtonGroup>
                <Button type="button" style={{ backgroundColor: '#ffc107', color: '#333' }}>
                  Voltar
                </Button>
                <Button type="button" style={{ backgroundColor: '#dc3545' }}>
                  Cancelar Venda
                </Button>
                <Button type="submit">Salvar</Button>
              </ButtonGroup>
            </form>
          </FormWrapper>
        </Container>
      </Main>
    </>
  );
}

export default Devolucao;
