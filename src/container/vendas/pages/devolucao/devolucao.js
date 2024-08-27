/* eslint-disable */
import React, { useState } from 'react';
import Switch from 'react-switch';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main } from '../../../styled';
import { Container, FormWrapper, SwitchWrapper, Label, SwitchLabel, Title, Row, Input, TextArea, ErrorMessage, ButtonGroup, Button } from './styles.ts';

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
                        <SwitchWrapper style={{ display: 'flex', alignItems: 'center' }}>
                            <Label style={{ marginRight: 5 }}>Frete:</Label>
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
