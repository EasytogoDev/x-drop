/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Cookies from 'js-cookie'; // Para obter o token de acesso
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

const dealColumns = [
  {
    title: 'Nome do produto',
    dataIndex: 'productname',
    key: 'productname',
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
  },
];

const RecentDeal = React.memo(() => {
  const [dealTab, setDealTab] = useState('today');
  const [pedidosMeli, setPedidosMeli] = useState([]);

  function carregaPedidosMeli() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/pedidos`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result && result.pedidos) {
          const pedidos = result.pedidos.map((pedido) => ({
            key: pedido.id,
            productname: pedido.order_items.map(item => item.item.title).join(', '),
            price: pedido.total_amount,
          }));

          setPedidosMeli(pedidos.slice(-10));
        } else {
          console.error('Nenhum pedido encontrado:', result);
        }
      })
      .catch((error) => console.error('Erro ao carregar pedidos:', error));
  }

  /* Tab Activation */
  const handleTabActivation = (value, e) => {
    e.preventDefault();
    setDealTab(value);
  };

  useEffect(() => {
    carregaPedidosMeli();
  }, []);

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={dealTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                  <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                    Hoje
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Ultimos pedidos"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="ninjadash-recent-deals table-responsive">
              <Table columns={dealColumns} dataSource={pedidosMeli} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default RecentDeal;
