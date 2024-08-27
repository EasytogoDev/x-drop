/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main, DashboardWrapper, Card, StatsWrapper, StatsCard, ChartWrapper, TableWrapper } from './styles.ts';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaMoneyBillWave, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa'; // Ícones

// Registrar os componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Vendas',
        data: [30000, 50000, 40000, 60000, 70000, 80000, 90000, 100000, 110000, 120000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barData = {
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
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos" routes={PageRoutes} />
      <Main>
        <DashboardWrapper>
          <StatsWrapper>
            <StatsCard>
              <FaMoneyBillWave size={40} color="#8a4af3" />
              <div>
                <h3>70</h3>
                <p>Pedidos Hoje</p>
              </div>
            </StatsCard>
            <StatsCard>
              <FaDollarSign size={40} color="#5bc0de" />
              <div>
                <h3>R$50.00K</h3>
                <p>Faturados Hoje</p>
              </div>
            </StatsCard>
            <StatsCard>
              <FaShoppingCart size={40} color="#5cb85c" />
              <div>
                <h3>R$900K</h3>
                <p>Faturados no Mês</p>
              </div>
            </StatsCard>
            <StatsCard>
              <FaChartLine size={40} color="#f0ad4e" />
              <div>
                <h3>R$1B</h3>
                <p>Saldo Atual</p>
              </div>
            </StatsCard>
          </StatsWrapper>

          <ChartWrapper>
            <Card>
              <h4>Todas as vendas</h4>
              <Line data={lineData} options={options} />
            </Card>
            <Card>
              <h4>Lucro Líquido</h4>
              <Bar data={barData} options={options} />
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
                  <tr>
                    <td>Samsung Galaxy S8 256GB</td>
                    <td>R$280</td>
                    <td>126</td>
                  </tr>
                  {/* Mais linhas de exemplo */}
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
