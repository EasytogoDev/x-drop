/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';

function SocialProfile() {
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
        <div className="social-form">
          <BasicFormWrapper>
            <Form form={form} name="editAccount" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Rede Sociais
              </Heading>
              <Form.Item name="facebook" label="Facebook">
                <Input
                  prefix={
                    <span className="facebook">
                      <FontAwesome name="facebook" />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              {/* <Form.Item name="twitter" label="X">
                <Input
                  prefix={
                    <span className="twitter">
                      <img src='../../../../public/x-icon.png' />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item> */}
              <Form.Item name="linkedin" label="Linkedin">
                <Input
                  prefix={
                    <span className="linkedin">
                      <FontAwesome name="linkedin" />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              <Form.Item name="instagram" label="Instagram">
                <Input
                  prefix={
                    <span className="instagram">
                      <FontAwesome name="instagram" />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              <Form.Item name="github" label="GitHub">
                <Input
                  prefix={
                    <span className="github">
                      <FontAwesome name="github" />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>

              
              {/* PRECISA SER ATUALIZADO POSTERIORMENTE!!! */}
              {/* <Form.Item name="youtube" label="TikTok">
                <Input
                  prefix={
                    <span className="youtube">
                      <img src='../../../../public/logotipo-do-tiktok_628407-1683-removebg-preview.png'/>
                    </span>
                  }
                  placeholder="Url"
                />
              </Form.Item> */}

              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button className="ant-btn ant-btn-light" type="default" htmlType="submit">
                    <Link to="/admin/users/add-user/work">Voltar</Link>
                  </Button>
                  <Link to="/admin/usuarios/lista">
                    <Button onClick={handleSubmit} type="primary">
                      Salvar Perfil
                    </Button>
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
}

export default SocialProfile;
