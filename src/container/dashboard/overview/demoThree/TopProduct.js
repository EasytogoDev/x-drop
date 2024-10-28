/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

const defaultImageUrl = 'https://via.placeholder.com/40'; // Imagem padrão

const productColumns = [
  {
    title: 'Nome do produto',
    dataIndex: 'productname',
    key: 'productname',
  },
  {
    title: 'Oferta',
    dataIndex: 'deals',
    key: 'deals',
  },
  // Removemos a coluna de quantia (amount)
];

const TopProduct = React.memo(() => {
  const [products, setProducts] = useState([]);
  const [productTab, setProductTab] = useState('today'); // Default tab

  const carregaProdutos = () => {
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
        const mappedProducts = result.products.slice(0, 10).map((product) => ({
          key: product.codigoITEMPEDIDO,
          productname: (
            <div className="ninjadash-info-element align-center-v">
              <img
                src={product.imagemITEMPEDIDO || defaultImageUrl}
                alt={product.nomeProdutoITEMPEDIDO}
                style={{ width: '60px', height: 'auto', marginRight: '10px' }} // Manter proporção da imagem
              />
              <span className="ninjadash-info-element__text">{product.nomeProdutoITEMPEDIDO}</span>
            </div>
          ),
          deals: `$${parseFloat(product.precoITEMPEDIDO).toFixed(2)}`,
        }));
        setProducts(mappedProducts);
      })
      .catch((error) => {
        console.error('Erro ao carregar produtos:', error);
      });
  };

  useEffect(() => {
    carregaProdutos();
  }, []);

  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setProductTab(value);
  };

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={productTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
                  <Link onClick={(event) => handleTabActivation('today', event)} to="#">
                    Hoje
                  </Link>
                </li>
                {/* Adicione aqui os botões para Semana e Mês se necessário */}
              </ul>
            </div>
          }
          title="Top Produtos"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="ninjadash-top-product table-responsive">
              <Table columns={productColumns} dataSource={products} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default TopProduct;
