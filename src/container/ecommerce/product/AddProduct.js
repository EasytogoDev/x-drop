import React from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';

function AddProduct() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Add Product',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Armazém" routes={PageRoutes} />
      <Main>
        <p>Hello World</p>
      </Main>
    </>
  );
}

export default AddProduct;
