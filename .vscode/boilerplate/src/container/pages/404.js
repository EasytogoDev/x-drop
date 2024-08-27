import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { ErrorWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

function NotFound() {
  const [state, setState] = useState({
    isLoading: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false });
    }, 1500);
  }, []);
  return (
    <Main>
      {state.isLoading ? (
        <div className="spin">
          <Spin />
        </div>
      ) : (
        <ErrorWrapper>
          <img src={require(`../../static/img/pages/404.svg`).default} alt="404" />
          <Heading className="error-text" as="h3">
            Erro 404
          </Heading>
          <p>Desculpe! a página que você procura não existe.</p>
          <NavLink to="/admin">
            <Button size="default" type="primary" to="/">
              Voltar para o Inicio
            </Button>
          </NavLink>
        </ErrorWrapper>
      )}
    </Main>
  );
}
export default NotFound;
