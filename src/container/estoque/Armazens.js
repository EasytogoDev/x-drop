/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, List } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

function Armazem({ setAddresses }) {
  const [form] = Form.useForm();
  const [addresses, updateAddresses] = useState([]);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const handleFinish = (values) => {
    if (addressToEdit) {
      const updatedAddresses = addresses.map((address) =>
        address.id === addressToEdit.id ? { ...address, ...values } : address
      );
      updateAddresses(updatedAddresses);
      setAddresses(updatedAddresses);
      setAddressToEdit(null);
    } else {
      const newAddress = { id: Date.now(), ...values };
      const updatedAddresses = [...addresses, newAddress];
      updateAddresses(updatedAddresses);
      setAddresses(updatedAddresses);
    }
    form.resetFields();
  };

  const handleReset = () => {
    form.resetFields();
    setAddressToEdit(null);
  };

  const handleEdit = (address) => {
    form.setFieldsValue(address);
    setAddressToEdit(address);
  };

  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    updateAddresses(updatedAddresses);
    setAddresses(updatedAddresses);
  };

  const PageRoutes = [
    {
      path: '/admin/estoque',
      breadcrumbName: 'Estoque',
    },
    {
      path: '',
      breadcrumbName: 'Armazém',
    },
  ];

  return (
    <Main>
      <BasicFormWrapper className="mb-25">
        <PageHeader className="ninjadash-page-header-main" title="Armazém" routes={PageRoutes} />
        <Cards title="Adicionar Novo Endereço">
          <Form
            form={form}
            name="multi-form"
            layout="horizontal"
            onFinish={handleFinish}
          >
            <Row gutter={30}>
              <Col sm={12} xs={24} className="mb-25">
                <Form.Item name="companyName" label="Nome da Empresa" rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}>
                  <Input id="companyName" placeholder="Nome da Empresa" />
                </Form.Item>
                <Form.Item name="warehouseName" label="Nome do Armazém" rules={[{ required: true, message: 'Por favor, insira o nome do armazém!' }]}>
                  <Input id="warehouseName" placeholder="Nome do Armazém" />
                </Form.Item>
                <Form.Item name="cep" label="CEP" rules={[{ required: true, message: 'Por favor, insira o CEP!' }]}>
                  <Input id="cep" placeholder="CEP" />
                </Form.Item>
                <Form.Item name="neighborhood" label="Bairro" rules={[{ required: true, message: 'Por favor, insira o bairro!' }]}>
                  <Input id="neighborhood" placeholder="Bairro" />
                </Form.Item>
                <Form.Item name="city" label="Cidade" rules={[{ required: true, message: 'Por favor, insira a cidade!' }]}>
                  <Input id="city" placeholder="Cidade" />
                </Form.Item>
                <Form.Item name="ibge" label="IBGE" rules={[{ required: true, message: 'Por favor, insira o código IBGE!' }]}>
                  <Input id="ibge" placeholder="IBGE" />
                </Form.Item>
                <Form.Item name="latitude" label="Latitude">
                  <Input id="latitude" placeholder="Latitude" />
                </Form.Item>
              </Col>
              <Col sm={12} xs={24} className="mb-25">
                <Form.Item name="street" label="Rua" rules={[{ required: true, message: 'Por favor, insira a rua!' }]}>
                  <Input id="street" placeholder="Rua" />
                </Form.Item>
                <Form.Item name="houseNumber" label="Número" rules={[{ required: true, message: 'Por favor, insira o número!' }]}>
                  <Input id="houseNumber" placeholder="Número" />
                </Form.Item>
                <Form.Item name="country" label="País" rules={[{ required: true, message: 'Por favor, insira o país!' }]}>
                  <Input id="country" placeholder="País" />
                </Form.Item>
                <Form.Item name="complement" label="Complemento">
                  <Input id="complement" placeholder="Complemento" />
                </Form.Item>
                <Form.Item name="state" label="Estado" rules={[{ required: true, message: 'Por favor, insira o estado!' }]}>
                  <Input id="state" placeholder="Estado" />
                </Form.Item>
                <Form.Item name="longitude" label="Longitude">
                  <Input id="longitude" placeholder="Longitude" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col sm={12} xs={24}>
                <div className="ninjadash-form-action">
                  <Button className="btn-signin" htmlType="button" type="light" size="large" onClick={handleReset}>
                    Limpar
                  </Button>
                  <Button className="btn-signin" type="primary" size="large" htmlType="submit">
                    {addressToEdit ? 'Editar' : 'Salvar'}
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Cards>
        <Cards title="Endereços Adicionados">
          <List
            dataSource={addresses}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={`${item.companyName} - ${item.warehouseName}`}
                  description={`CEP: ${item.cep}, Rua: ${item.street}, Número: ${item.houseNumber}, Complemento: ${item.complement}, Bairro: ${item.neighborhood}, Cidade: ${item.city}, Estado: ${item.state}, País: ${item.country}, IBGE: ${item.ibge}, Latitude: ${item.latitude}, Longitude: ${item.longitude}`}
                />
                <Button type="primary" onClick={() => handleEdit(item)} style={{ marginRight: '10px' }}>
                  Editar
                </Button>
                <Button type="danger" onClick={() => handleDelete(item.id)}>
                  Excluir
                </Button>
              </List.Item>
            )}
          />
        </Cards>
      </BasicFormWrapper>
    </Main>
  );
}

export default Armazem;
