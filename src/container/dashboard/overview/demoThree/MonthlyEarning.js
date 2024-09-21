/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { SalesRevenueWrapper, ChartContainer } from '../../Style';
import { BorderLessHeading } from '../../../styled';
import { Spin } from 'antd';

const MonthlyEarning = React.memo(({ title }) => {
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [earningsData, setEarningsData] = useState(null); // Estado para os dados da API
  const [labels, setLabels] = useState([]); // Labels do gráfico

  useEffect(() => {
    fetchEarningsData(); // Carrega os dados ao montar o componente
  }, []);

  const fetchEarningsData = () => {
    setLoading(true); // Inicia o carregamento
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
        console.log("API Result:", result); // Verificando os dados da API
        
        // Verificar se o resultado contém os dados esperados
        if (result && result.totalPerMonth) {
          const monthLabels = result.totalPerMonth.map((item) => {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return monthNames[item.month - 1];
          });

          const salesData = result.totalPerMonth.map((item) => parseFloat(item.totalSales));

          setLabels(monthLabels); // Definindo os labels
          setEarningsData([
            {
              data: salesData,
              borderColor: '#8231D3',
              borderWidth: 3,
              fill: true,
              backgroundColor: () =>
                chartLinearGradient(document.getElementById('ninjadash-earning-revenue'), 300, {
                  start: '#8231D340',
                  end: '#ffffff05',
                }),
              label: 'Total de Vendas',
              pointStyle: 'circle',
              pointRadius: '0',
              hoverRadius: '9',
              pointBorderColor: '#fff',
              pointBackgroundColor: '#8231D3',
              hoverBorderWidth: 5,
            },
          ]);
        } else {
          console.error("Dados da API estão vazios ou mal formatados");
        }

        setLoading(false); // Finaliza o carregamento
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Finaliza o carregamento mesmo em caso de erro
      });
  };

  return (
    <SalesRevenueWrapper>
      <BorderLessHeading>
        <ChartContainer>
          <Cards
            title={title}
            size="large"
          >
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <Spin size="large" /> {/* Indicador de carregamento */}
              </div>
            ) : (
              <div className="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
                {labels.length > 0 && earningsData ? (
                  <DashboardChart
                    id="ninjadash-earning-revenue"
                    labels={labels}
                    datasets={earningsData}
                    tooltip={{
                      custom: customTooltips,
                      callbacks: {
                        title() {
                          return `Total de Vendas`;
                        },
                        label(t) {
                          const { formattedValue, dataset } = t;
                          return `${formattedValue} ${dataset.label}`;
                        },
                      },
                    }}
                    options={{
                      scales: {
                        y: {
                          ticks: {
                            callback: function(value) {
                              return value.toLocaleString(); // Exibe os valores com separadores de milhar
                            },
                          },
                        },
                      },
                    }}
                    height={window.innerWidth <= 767 ? 200 : 90}
                  />
                ) : (
                  <div>Nenhum dado disponível para exibição</div>
                )}
              </div>
            )}
          </Cards>
        </ChartContainer>
      </BorderLessHeading>
    </SalesRevenueWrapper>
  );
});

MonthlyEarning.defaultProps = {
  title: 'Todas as vendas',
};

MonthlyEarning.propTypes = {
  title: PropTypes.string,
};

export default MonthlyEarning;
