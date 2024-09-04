import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Spin, Input, Badge, Button, Card } from 'antd';
// import { Row, Col, Pagination, Spin, Input, Button, Card, Menu, Badge } from 'antd';
import { SearchOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PaginationWrapper, NotFoundWrapper } from '../../Style';

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f1f2f6;
`;

export const ImageBox = styled.img`
  max-width: 100px;
`;

export const RowInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  margin: 16px;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h1`
  white-space: normal;
  word-wrap: break-word;

  font-size: 16px;
  text-transform: capitalize;
`;

export const WrapperRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 4px;
  gap: 8px;
`;

export const PriceSpan = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  color: #8231d3;
  font-weight: bold;
`;

export const CategorySpan = styled.span`
  padding: 2px 4px;
  background-color: #e1e1e1;
  text-transform: uppercase;
  font-size: 9px;
`;

export const WrapperCategory = styled.div`
  display: flex;
  justify-content: row;
  gap: 2px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border: 1px solid #f1f2f6;
  border-radius: 8px;
  padding: 12px;
`;

export const MenuItem = styled.li`
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 36px;
  width: 100%;
  overflow: hidden;
`;

export const MenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #6d6d6d;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #8231d3;
  }
`;

function Grid() {
  const { productsAll, isLoader } = useSelector((state) => ({
    productsAll: state.products.data,
    isLoader: state.products.loading,
  }));

  const [state, setState] = useState({
    products: productsAll,
    current: 0,
    pageSize: 0,
  });

  const { products } = state;

  useEffect(() => {
    if (productsAll) {
      setState({
        products: productsAll,
      });
    }
  }, [productsAll]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  return (
    <div className="container">
      <Row gutter={12}>
        <Col span={5}>
          <Menu>
            <MenuItem>
              <MenuLink>Calçados, Roupas e Bolsas (695)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Casa, Móveis e Decoração (57)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Joias e Relógios (35)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Celulares e Telefones (14)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Beleza e Cuidado Pessoal (14)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Saúde (12)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Esportes e Fitness (11)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Indústria e Comércio (7)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Construção (6)</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Acessórios (6)</MenuLink>
            </MenuItem>
          </Menu>
        </Col>
        <Col span={19}>
          <Input placeholder="Buscar produto na página" prefix={<SearchOutlined />} style={{ marginBottom: 20 }} />
          <Row gutter={12}>
            {isLoader ? (
              <Col xs={24}>
                <div className="spin">
                  <Spin />
                </div>
              </Col>
            ) : products.length ? (
              products.map(({ id, name, price, img, category }) => (
                <Col xxl={24} lg={24} xs={24} key={id}>
                  <Badge.Ribbon text="Original" color="blue">
                    <CardProduct>
                      <RowInfo>
                        <ImageBox alt={name} src={img} />
                        <Card.Meta title={<Title>{name}</Title>} />
                      </RowInfo>
                      <WrapperRowCenter>
                        <Card.Meta description={<PriceSpan>R$ {price}</PriceSpan>} />
                        <WrapperCategory>
                          <Card.Meta description={<CategorySpan>{category}</CategorySpan>} />
                          <Card.Meta description={<CategorySpan>{category}</CategorySpan>} />
                          <Card.Meta description={<CategorySpan>{category}</CategorySpan>} />
                        </WrapperCategory>
                      </WrapperRowCenter>
                      <WrapperRowCenter>
                        <Button type="primary" style={{ width: '100%' }} icon={<PlusOutlined />}>
                          Anunciar
                        </Button>
                        <Button>
                          <QuestionCircleOutlined />
                        </Button>
                      </WrapperRowCenter>
                    </CardProduct>
                  </Badge.Ribbon>
                </Col>
              ))
            ) : (
              <Col md={24}>
                <NotFoundWrapper>
                  <h1>Data Not Found</h1>
                </NotFoundWrapper>
              </Col>
            )}
          </Row>
          <Col xs={24} className="pb-30">
            <PaginationWrapper style={{ marginTop: 10 }}>
              {products.length ? (
                <Pagination
                  onChange={onHandleChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  pageSize={10}
                  defaultCurrent={1}
                  total={40}
                />
              ) : null}
            </PaginationWrapper>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Grid;
