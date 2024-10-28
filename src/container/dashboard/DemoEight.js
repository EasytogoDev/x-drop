/* eslint-disable */
import { message } from 'antd';
import React, { lazy, Suspense, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Row, Col, Skeleton } from 'antd';
import Cookies from 'js-cookie';
import { FaMoneyBillWave, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa'; // Ícones
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import styled from 'styled-components';

const OverviewDataList = lazy(() => import('./overview/demoEight/OverviewDataList'));
const MonthlyEarning = lazy(() => import('./overview/demoThree/MonthlyEarning'));
const TopProduct = lazy(() => import('./overview/demoThree/TopProduct'));
const RecentDeals = lazy(() => import('./overview/demoThree/RecentDeals'));
const ActiveUser = lazy(() => import('./overview/demoThree/ActiveUserjs'));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Estilos internos
const Main = styled.main`
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['background-color']}; /* Ajustável conforme o tema */
`;

const BoxWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

const StatsCard = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  min-height: 120px;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Ajustável conforme o tema */
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme[theme.mainContent]['light-text']}; /* Ajustável conforme o tema */
  }

  svg {
    font-size: 40px;
    color: ${({ color }) => color};
  }

  @media (max-width: 768px) {
    flex-basis: 48%;
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;

function DemoEight() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Dashboard Informativo',
    },
  ];

  const [pedidosHoje, setPedidosHoje] = useState(0);
  const [somaHoje, setSomaHoje] = useState(0);
  const [somaMes, setSomaMes] = useState(0);
  const [saldoAtual, setSaldoAtual] = useState(0);

  function carregaPedidos() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/painel`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPedidosHoje(result.total_hoje || 0);
        setSomaHoje(result.soma_hoje || 0);
        setSomaMes(result.total_mes || 0);
        setSaldoAtual(result.saldo_atual || 0);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const query = useQuery();

  useEffect(() => {

    const LocalCodeShopee = localStorage.getItem('CodeShopee');
    const LocalIdShopee = localStorage.getItem('IdShopee');

    // Aqui, salve no localStorage se os parâmetros estiverem presentes
    if (LocalCodeShopee && LocalIdShopee) {
      verificaShopee(LocalCodeShopee, LocalIdShopee);
    }

    carregaPedidos();

  }, [query]);



  const verificaShopee = (code, shop_id) => {
    const accessToken = Cookies.get('access_token'); // Verifica se o usuário está logado
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    // Pega o valor de horarioCorte do localStorage
    const horarioCorte = localStorage.getItem('horarioCorte') || '12:00'; // Definir um valor padrão se não existir no localStorage

    const raw = JSON.stringify({
      code,
      shop_id,
      fornecedor: 3, // aqui você pode modificar com base no localStorage ou lógica relevante
      horarioCorte,  // Adiciona o horário de corte no corpo do request
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/shopee/token`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.createRecord) {
          message.success(result.message);
          // Redireciona para a página de sucesso
          localStorage.removeItem('CodeShopee');
          localStorage.removeItem('IdShopee');
          navigate('/configuracoes/integracoes?status=sucesso&integracao=shopee');
        } else {
          message.error(result.message || 'Erro desconhecido');
        }
      })
      .catch((error) => {
        message.error(error.error || 'Erro na integração com Shopee');
        console.error(error);
      });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Dashboard" routes={PageRoutes} />

      <Main>
        {/* <Row justify="center">
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataList />
            </Suspense>
          </Col>
        </Row> */}

        {/* Box que envolve os cards */}
        <Row justify="center" style={{ marginBottom: 20 }}>
          <Col xs={24}>
            <BoxWrapper>
              <StatsWrapper>
                <StatsCard color="#5cb85c">
                  <FaShoppingCart />
                  <div>
                    <h3>{pedidosHoje}</h3>
                    <p>Pedidos Hoje</p>
                  </div>
                </StatsCard>

                <StatsCard size={40} color="#5bc0de">
                  <FaDollarSign />
                  <div>
                    <h3>{`R$${somaHoje.toFixed(2)}`}</h3>
                    <p>Faturados Hoje</p>
                  </div>
                </StatsCard>

                <StatsCard size={40} color="#8a4af3">
                  <FaMoneyBillWave />
                  <div>
                    <h3>{`R$${somaMes.toFixed(2)}`}</h3>
                    <p>Faturados no Mês</p>
                  </div>
                </StatsCard>

                <StatsCard size={40} color="#f0ad4e">
                  <FaChartLine />
                  <div>
                    <h3>{`R$${saldoAtual.toFixed(2)}`}</h3>
                    <p>Saldo Atual</p>
                  </div>
                </StatsCard>
              </StatsWrapper>
            </BoxWrapper>
          </Col>
        </Row>

        <Row justify="center" gutter={25}>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <MonthlyEarning />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ActiveUser />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopProduct />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RecentDeals />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DemoEight;
