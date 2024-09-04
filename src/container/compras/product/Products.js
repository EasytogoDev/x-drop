import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Radio, Spin } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { TopToolBox } from '../Style';
import { sorting } from '../../../redux/product/actionCreator';

const Grid = lazy(() => import('./overview/Grid'));
// const List = lazy(() => import('./overview/List'));

function Product() {
  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'products',
    },
  ];
  // const path = '.';
  const dispatch = useDispatch();
  const onSorting = (e) => {
    dispatch(sorting(e.target.value));
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Produtos" routes={PageRoutes} />
      <Main>
        <Row gutter={30}>
          <Col className="product-content-col" xxl={24} lg={24} md={14} xs={24}>
            <TopToolBox>
              <Row gutter={0}>
                <Col xxl={10} xs={24}>
                  <div className="product-list-action d-flex justify-content-between align-items-center">
                    <div className="product-list-action__tab">
                      <span className="toolbox-menu-title">Sort by:</span>
                      <Radio.Group onChange={onSorting} defaultValue="rate">
                        <Radio.Button value="rate">Mais Comprados</Radio.Button>
                        <Radio.Button value="popular">Popular</Radio.Button>
                        <Radio.Button value="time">Novos</Radio.Button>
                        <Radio.Button value="price">Preço</Radio.Button>
                      </Radio.Group>
                    </div>
                  </div>
                </Col>
              </Row>
            </TopToolBox>

            <Suspense
              fallback={
                <div className="spin d-flex align-center-v">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route index element={<Grid />} />
                <Route path="grid" element={<Grid />} />
                <Route path="grid/:id" element={<Grid />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Product;
