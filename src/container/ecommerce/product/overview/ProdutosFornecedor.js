/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Btn = styled(Button)`
  background: #8b5cf6;
  border: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    background: #7c3aed;
    color: #fff;
  }
`;

const CardProduct = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageBox = styled.img`
  max-width: 120px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #111827;
`;

const PriceSpan = styled.span`
  display: block;
  font-size: 24px;
  color: #10b981;
  font-weight: bold;
  margin-top: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
`;

const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const AddCartButton = styled(Button)`
  background-color: #e5e7eb;
  color: #374151;
  border: none;

  &:hover {
    background-color: #d1d5db;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
`;

const MenuItem = styled.li`
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 36px;
  width: 100%;
  overflow: hidden;
`;

const MenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #6d6d6d;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #8231d3;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

function ProdutosFornecedor() {
  const { productsAll, isLoader } = useSelector((state) => ({
    productsAll: state.products.data,
    isLoader: state.products.loading,
  }));

  const [state, setState] = useState({
    products: productsAll,
  });

  const [categories, setCategories] = useState([
    { Hierarquia: "3", Nome: null, Descricao: null },
    { Hierarquia: "2", Nome: "Bicicletas Ergométricas", Descricao: null },
    { Hierarquia: "2", Nome: "Binóculos", Descricao: null },
    { Hierarquia: "2", Nome: "Camisetas e Regatas", Descricao: null },
    { Hierarquia: "1", Nome: "Categoria EXEMPLO", Descricao: null },
    { Hierarquia: "2", Nome: "De Pulso", Descricao: null },
    { Hierarquia: "2", Nome: "Esquadros", Descricao: null },
    { Hierarquia: "2", Nome: "Estiletes", Descricao: null },
    { Hierarquia: "2", Nome: "Fogareiros", Descricao: null },
    { Hierarquia: "2", Nome: "Grampos Industriais", Descricao: null },
    { Hierarquia: "2", Nome: "Grampos Sargento", Descricao: null },
    { Hierarquia: "2", Nome: "Guinchos", Descricao: null },
    { Hierarquia: "2", Nome: "Lâminas para Serras", Descricao: null },
    { Hierarquia: "2", Nome: "Maletas de Ferramentas", Descricao: null },
    { Hierarquia: "2", Nome: "Mochilas", Descricao: null },
    { Hierarquia: "2", Nome: "Moletons", Descricao: null },
    { Hierarquia: "2", Nome: "Níveis Laser", Descricao: null },
    { Hierarquia: "2", Nome: "Pontas para Parafusar", Descricao: null },
    { Hierarquia: "2", Nome: "Reguladores", Descricao: null },
    { Hierarquia: "2", Nome: "Sensores de Fluxo de Água", Descricao: null },
    { Hierarquia: "2", Nome: "Suporte para Furadeiras", Descricao: null },
    { Hierarquia: "2", Nome: "Tênis", Descricao: null },
  ]);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { products } = state;

  useEffect(() => {
    if (productsAll) {
      setState({
        products: productsAll,
      });
    }
  }, [productsAll]);

  return (
    <div className="container">
      <MobileMenuButton icon={<MenuOutlined />} onClick={showDrawer}>
        Olha o teste aqui HAHAHAHAHA
      </MobileMenuButton>
      <Drawer title="Categorias" placement="left" onClose={onClose} visible={visible}>
        <Menu>
          {categories.length ? (
            categories.map((category, index) => (
              <MenuItem key={index}>
                <MenuLink>{category.Nome || 'Categoria Sem Nome'}</MenuLink>
              </MenuItem>
            ))
          ) : (
            <Spin />
          )}
        </Menu>
      </Drawer>
      <Row gutter={[16, 16]}>
        {/* Oculta as categorias no mobile se o drawer estiver aberto */}
        <Col xs={0} lg={4}>
          <Menu>
            {categories.length ? (
              categories.map((category, index) => (
                <MenuItem key={index}>
                  <MenuLink>{category.Nome || 'Categoria Sem Nome'}</MenuLink>
                </MenuItem>
              ))
            ) : (
              <Spin />
            )}
          </Menu>
        </Col>
        <Col xs={24} lg={20}>
          <Input placeholder="Buscar produto na página" style={{ marginBottom: 20 }} />
          <Row gutter={[16, 16]}>
            {isLoader ? (
              <Col span={24}>
                <Spin />
              </Col>
            ) : products.length ? (
              products.map(({ id, name, price, img }) => (
                <Col xxl={6} lg={8} sm={12} xs={24} key={id}>
                  <Badge.Ribbon text="Nearest Seller" color="purple">
                    <CardProduct>
                      <ImageBox alt={name} src={img} />
                      <Title>{name}</Title>
                      <Subtitle>Shipped in 3-4 days</Subtitle>
                      <PriceSpan>${price}</PriceSpan>
                      <WrapperButtons>
                        <AddCartButton icon={<ShoppingCartOutlined />}>Add Cart</AddCartButton>
                        <Btn>Buy</Btn>
                      </WrapperButtons>
                    </CardProduct>
                  </Badge.Ribbon>
                </Col>
              ))
            ) : (
              <Col span={24}>
                <p>No products found</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProdutosFornecedor;
