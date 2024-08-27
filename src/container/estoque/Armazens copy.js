/* eslint-disable prettier/prettier */
import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

function Armazem() {
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
    <BasicFormWrapper className="mb-25">
      <PageHeader className="ninjadash-page-header-main" title="Armazém" routes={PageRoutes} />
      <Cards title="Multiple Column">
        <Form name="multi-form" layout="horizontal">
          <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_f-name" label="Nome da Empresa">
                <Input id='companyName' placeholder="Nome da Empresa" />
              </Form.Item>
              <Form.Item name="sDash_city" label="Nome do Armazém">
                <Input id='armazemName' placeholder="Nome do Armazém" />
              </Form.Item>
              <Form.Item name="sDash_company" label="CEP:">
                <Input id='cep' placeholder="CEP" />
              </Form.Item>
              <Form.Item name="sDash_company" label="Bairro:">
                <Input id='bairro' placeholder="Bairro" />
              </Form.Item>
              <Form.Item name="sDash_company" label="Cidade:">
                <Input id='city' placeholder="Cidade" />
              </Form.Item>
              <Form.Item name="sDash_company" label="IBGE:">
                <Input id='ibge' placeholder="IBGE" />
              </Form.Item>
              <Form.Item name="sDash_company" label="Latitude:">
                <Input id='latitude' placeholder="Latitude" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_l-name" label="Rua:">
                <Input id='street' placeholder="Rua" />
              </Form.Item>
              <Form.Item name="sDash_email" label="Número:">
                <Input placeholder="Número" id='numberHouse' />
              </Form.Item>
              <Form.Item name="sDash_country" label="País">
                <Input placeholder="País" id='pais' />
              </Form.Item>
              <Form.Item name="sDash_country" label="Complemento:">
                <Input placeholder="Complemento" id='complemento' />
              </Form.Item>
              <Form.Item name="sDash_country" label="Estado:">
                <Input placeholder="Estado" id='state' />
              </Form.Item>
              <Form.Item name="sDash_country" label="Longitude:">
                <Input placeholder="Logitude" id='longitude' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={24}>
              <div className="ninjadash-form-action">
                <Button className="btn-signin" htmlType="submit" type="light" size="large">
                  Limpar
                </Button>
                <Button className="btn-signin" type="primary" size="large">
                  Salvar
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Cards>
    </BasicFormWrapper>
  );
}

export default Armazem;
