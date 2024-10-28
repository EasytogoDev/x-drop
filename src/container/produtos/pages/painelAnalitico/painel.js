/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaMoneyBillWave, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa'; // Ícones
import { Main, DashboardWrapper, Card, StatsWrapper, StatsCard, ChartWrapper, TableWrapper } from './styles.ts';
import { PageHeader } from '../../../../components/page-headers/page-headers';

// Registrar os componentes necessários
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function PainelAnalitico() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pedidos',
    },
  ];

  const [pedidosHoje, setPedidosHoje] = useState(0);
  const [somaHoje, setSomaHoje] = useState(0);
  const [somaMes, setSomaMes] = useState(0);
  const [saldoAtual, setSaldoAtual] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  const [barData, setBarData] = useState([]);

  


  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Vendas',
        data: [],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

/*   const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Lucro Líquido',
        data: [3000, 5000, 4000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  }; */

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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


  function carregaVendasMes() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/painel/vendas-mes`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result && result.labels && result.datasets) {
          setBarData(result); // Atualizar os dados com o payload da API
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function carregaTopProducts() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/painel/top-products`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedTopProducts = result.products.map((product) => ({
          id: product.produtoITEMPEDIDO,
          codigo: product.codigoITEMPEDIDO,
          origem: product.origemITEMPEDIDO,
          price: parseFloat(product.precoITEMPEDIDO).toFixed(2),
          quantity: parseInt(product.quantidade, 10),
          total: parseFloat(product.totalITEMPEDIDO).toFixed(2),
          name: product.nomeProdutoITEMPEDIDO,
        }));
        setTopProducts(mappedTopProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function carregaTopSales() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/painel/total-sales`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const labels = result.totalPerMonth.map((item) => {
          const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return monthNames[item.month - 1];
        });

        const salesData = result.totalPerMonth.map((item) => parseFloat(item.totalSales));

        // Atualizar os dados do gráfico com os dados da API
        setLineData({
          labels: labels,
          datasets: [
            {
              label: 'Vendas',
              data: salesData,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    carregaPedidos();
    carregaTopProducts();
    carregaTopSales();
    carregaVendasMes();
  }, []);

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos" routes={PageRoutes} />
      <Main>
        <DashboardWrapper>
          <StatsWrapper>
            <StatsCard>
              <FaShoppingCart size={40} color="#5cb85c" />
              <div>
                <h3>{pedidosHoje}</h3>
                <p>Pedidos Hoje</p>
              </div>
            </StatsCard>

            <StatsCard>
              <FaDollarSign size={40} color="#5bc0de" />
              <div>
                <h3>{`R$${somaHoje.toFixed(2)}`}</h3>
                <p>Faturados Hoje</p>
              </div>
            </StatsCard>

            <StatsCard>
              <FaMoneyBillWave size={40} color="#8a4af3" />
              <div>
                <h3>{`R$${saldoAtual.toFixed(2)}`}</h3>
                <p>Faturados no Mês</p>
              </div>
            </StatsCard>

            <StatsCard>
              <FaChartLine size={20} color="#f0ad4e" />
              <div>
                <h3>{`R$ 0`}</h3>
                <p>Saldo Atual</p>
              </div>
            </StatsCard>
          </StatsWrapper>
          <ChartWrapper>
            <Card>
              <h4>Vendas do Mês</h4>
              {/* O gráfico agora utiliza o estado lineData, que é atualizado dinamicamente */}
              <Line data={lineData} options={options} />
            </Card>
            <Card>
              <h4>Vendas do Ano</h4>
              {barData && barData?.labels?.length > 0 ? (
                <Bar data={barData} options={options} />
              ) : (
                <p>Carregando dados...</p>
              )}
            </Card>
          </ChartWrapper>

          <TableWrapper>
            <Card>
              <h4>Top Produtos</h4>
              <table>
                <thead>
                  <tr>
                    <th>Nome do Produto</th>
                    <th>Oferta</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.length > 0 ? (
                    topProducts
                    .sort((a, b) => b.quantity - a.quantity)
                    .map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{`R$${product.price}`}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">Nenhum produto encontrado</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Card>
          </TableWrapper>
        </DashboardWrapper>
      </Main>
    </>
  );
}

export default PainelAnalitico;
