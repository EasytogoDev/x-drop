import React, { useState } from 'react';
import { Row, Col, Form, Input, DatePicker, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const dateFormat = 'MM/DD/YYYY';

function Work() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: '',
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <div className="user-work-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="work" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Informações de Trabalho
              </Heading>

              <Form.Item name="company" label="Nome da Empresa">
                <Input placeholder="Nome da Empresa" />
              </Form.Item>

              <Form.Item name="department" label="Setor">
                <Input placeholder="Nome do Setor" />
              </Form.Item>

              <Form.Item name="designation" label="Função">
                <Input placeholder="Função" />
              </Form.Item>

              <Form.Item name="hiringDate" rules={[{ type: 'object', whitespace: true }]} label="Data de Contratação">
                <DatePicker format={dateFormat} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="status" initialValue="active" label="Status">
                <Radio.Group>
                  <Radio value="active">Ativo</Radio>
                  <Radio value="deactivated">Desativado</Radio>
                  <Radio value="blocked">Bloqueado</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    type="default"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Limpar
                  </Button>
                  <Button htmlType="submit" type="primary">
                    <Link to="/admin/usuarios/adicionar/social">Próximo</Link>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
}

export default Work;
