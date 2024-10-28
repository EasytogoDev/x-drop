import { Button, Col, Form, Input, Row } from 'antd';
import { Auth0Lock } from 'auth0-lock';
import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthFormWrap } from './style';
import { login, authOLogin } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { auth0options } from '../../../../config/auth0';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(login(values, () => navigate('/')));
    },
    [navigate, dispatch],
  );

  const handleAuthOSubmit = useCallback(
    (values) => {
      dispatch(authOLogin(values, () => navigate('/')));
    },
    [navigate, dispatch],
  );

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }
      handleAuthOSubmit(authResult);
      lock.hide();
    });
  });

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Login</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="usuario"
                rules={[{ message: 'Por favor, insira o nome de usuário ou e-mail!', required: true }]}
                // initialValue="gustavohp@easytogo.com.br"
                label="Nome de usuário ou endereço de e-mail"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item name="senha" initialValue="" label="Senha">
                <Input.Password placeholder="Insira sua senha" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Matenha-me conectado
                </Checkbox>
                <NavLink className="forgot-pass-link" to="/forgotPassword">
                  Esqueceu a senha?
                </NavLink>
              </div>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Login'}
                </Button>
              </Form.Item>
              {/* <p className="ninjadash-form-divider">
                <span>Ou</span>
              </p>
              <ul className="ninjadash-social-login">
                <li>
                  <Link className="google-social" to="#">
                    <ReactSVG src={require(`../../../../static/img/icon/google-plus.svg`).default} />
                  </Link>
                </li>
                <li>
                  <Link className="facebook-social" to="#">
                    <UilFacebook />
                  </Link>
                </li>
                <li>
                  <Link className="twitter-social" to="#">
                    <UilTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="github-social" to="#">
                    <UilGithub />
                  </Link>
                </li>
              </ul>
              <div className="auth0-login">
                <Link to="#" onClick={() => lock.show()}>
                  Faça login com
                </Link>
                <Link to="/fbSignIn">Login com Firebase</Link>
              </div> */}
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
            <p>
              Não possui uma conta?<Link to="/register">Cadastre-se</Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignIn;
