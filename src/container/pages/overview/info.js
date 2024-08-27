/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
function Info() {
  const [state, setState] = useState({
    values: '',
  });
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (value) => {
    setCountry(value);

    let citiesData = [];
    if (value === 'brasil') {
      citiesData = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia'];
    } else if (value === 'eua') {
      citiesData = ['Califórnia', 'Flórida', 'Nova York'];
    }
    setCities(citiesData);
  };


  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <div className="user-info-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Informações Pessoais
              </Heading>

              <figure className="photo-upload align-center-v">
                <img src={require('../../../static/img/avatar/profileImage.png')} alt="" />
                <figcaption>
                  <Upload>
                    <Link className="btn-upload" to="#">
                      <UilCamera />
                    </Link>
                  </Upload>
                  <div className="info">
                    <Heading as="h4">Foto de Perfil</Heading>
                  </div>
                </figcaption>
              </figure>

              <Form.Item label="Nome" name="name">
                <Input placeholder="Digite seu nome" />
              </Form.Item>

              <Form.Item
                label="Endereço de e-mail:"
                name="email"
                rules={[{ message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item name="phone" label="Número de Celular">
                <Input placeholder="+55 (11) 9 9999-9999" />
              </Form.Item>

              <Form.Item name="country" initialValue="" label="País">
                <Select style={{ width: '100%' }} onChange={handleCountryChange}>
                  <Option value="">Por favor, selecione</Option>
                  <Option value="brasil">Brasil</Option>
                  <Option value="eua">Estados Unidos da América</Option>
                  {/* <Option value="pakistan">Pakistan</Option> */}
                </Select>
              </Form.Item>

              <Form.Item initialValue="" name="city" label="Cidade">
              <Select style={{ width: '100%' }}>
                <Option value="">Por favor, selecione</Option>
                {cities.map(city => (
                  <Option key={city} value={city}>{city}</Option>
                ))}
              </Select>
              </Form.Item>

              <Form.Item name="website" label="Website">
                <Input placeholder="www.example.com" />
              </Form.Item>

              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Limpar
                  </Button>
                  <Button htmlType="submit" type="primary">
                    <Link to="/admin/usuarios/adicionar/work">Salvar e Próximo</Link>
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

export default Info;
