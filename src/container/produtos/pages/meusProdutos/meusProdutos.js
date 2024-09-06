/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message } from 'antd';
import { NotificationOutlined, EyeOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { AddCartButton, Btn, CardProduct, CodeSpan, ImageBox, Menu, MenuItem, MenuLink, MobileMenuButton, PriceSpan, Subtitle, Title, ViewButton, WrapperButtons } from './styles.ts'

// Estilos personalizados


function MeusProdutos() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState({});
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Modais para anunciar, visualizar e cadastrar
  const [isAnnounceModalVisible, setIsAnnounceModalVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAnnounce = (product) => {
    setSelectedProduct(product);
    setIsAnnounceModalVisible(true);
  };

  const handleAnnounceModalClose = () => {
    setIsAnnounceModalVisible(false);
  };

  useEffect(() => {
    carregaProdutos();
    carregaCategorias();
    carregaImagens();
  }, []);

  function carregaProdutos() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/produtos/3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.map(product => ({
          id: product.ID,
          name: product.Nome,
          price: product.PrecoVenda,
          category: product.Categoria,
        }));
        setProducts(mappedProducts);
        setIsLoadingProducts(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingProducts(false);
      });
  }

  function carregaCategorias() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/categorias/3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedCategories = result.map(category => ({
          hierarquia: category.Hierarquia,
          nome: category.Nome,
          descricao: category.Descricao,
        }));
        setCategories(mappedCategories);
        setIsLoadingCategories(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingCategories(false);
      });
  }

  function carregaImagens() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/imagens/3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedImages = result.reduce((acc, img) => {
          acc[img.productId] = img.url;
          return acc;
        }, {});
        setImages(mappedImages);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = products
    .filter(product => selectedCategory ? product.category === selectedCategory : true)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'X-Drop',
    },
    {
      path: '',
      breadcrumbName: 'Meus Produtos',
    },
  ];

  return (
    <div className="container">
      <PageHeader className="ninjadash-page-header-main" title="Produtos" routes={PageRoutes} />
      <MobileMenuButton icon={<MenuOutlined />} onClick={showDrawer}>
        Categorias
      </MobileMenuButton>
      <Drawer title="Categorias" placement="left" onClose={onClose} visible={visible}>
        <Menu>
          {isLoadingCategories ? (
            <Spin />
          ) : categories.length ? (
            categories.map((category, index) => (
              <MenuItem key={index} onClick={() => handleCategorySelect(category.nome)}>
                <MenuLink>{category.nome || 'Categoria Sem Nome'}</MenuLink>
              </MenuItem>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </Menu>
      </Drawer>
      <Row gutter={[12, 12]}>
        <Col xs={0} lg={4}>
          <Menu>
            {isLoadingCategories ? (
              <Spin />
            ) : categories.length ? (
              categories.map((category, index) => (
                <MenuItem key={index} onClick={() => handleCategorySelect(category.nome)}>
                  <MenuLink>{category.nome || 'Categoria Sem Nome'}</MenuLink>
                </MenuItem>
              ))
            ) : (
              <p>No categories found</p>
            )}
          </Menu>
        </Col>
        <Col xs={24} lg={20}>
          <Input
            placeholder="Buscar produto na página"
            style={{ marginBottom: 10 }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Row gutter={[12, 12]}>
            {isLoadingProducts ? (
              <Col span={24}>
                <Spin />
              </Col>
            ) : currentProducts.length ? (
              currentProducts.map((product) => (
                <Col xxl={6} lg={8} sm={12} xs={24} key={product.id}>
                  <Badge.Ribbon text="Mais Vendidos" color="#f59e0b">
                    <CardProduct>
                      <ImageBox
                        alt={product.name}
                        src={images[product.id] || 'https://via.placeholder.com/180x180.png?text=No+Image'}
                      />
                      <CodeSpan>{product.id}</CodeSpan>
                      <PriceSpan>R${product.price}</PriceSpan>
                      <Subtitle>{product.name}</Subtitle>
                      <WrapperButtons>
                        <Btn icon={<NotificationOutlined />} onClick={() => handleAnnounce(product)}>
                          Anunciar Produto
                        </Btn>
                        <ViewButton icon={<EyeOutlined />} onClick={() => showModal(product)}>
                          Visualizar Produto
                        </ViewButton>
                        <AddCartButton icon={<ShoppingCartOutlined />}>
                          Cadastrar Mix Variedades - SP
                        </AddCartButton>
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
          <Pagination
            current={currentPage}
            total={filteredProducts.length}
            pageSize={productsPerPage}
            onChange={paginate}
            style={{ marginTop: 20, textAlign: 'center' }}
          />
        </Col>
      </Row>

      {/* Modal de Anunciar Produto */}
      <Modal
        title="Anunciar Produto"
        visible={isAnnounceModalVisible}
        onCancel={handleAnnounceModalClose}
        footer={[
          <Button key="back" onClick={handleAnnounceModalClose}>
            Fechar
          </Button>,
        ]}
      >
        <p>Confirme o anúncio do produto: "{selectedProduct?.name}".</p>
        <Button type="primary" onClick={() => message.success(`Produto "${selectedProduct?.name}" anunciado com sucesso!`)}>
          Confirmar Anúncio
        </Button>
      </Modal>

      {/* Modal de Visualizar Produto */}
      <Modal
        title="Visualizar Produto"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <ImageBox
          alt={selectedProduct?.name}
          src={images[selectedProduct?.id] || 'https://via.placeholder.com/180x180.png?text=No+Image'}
        />
        <p><strong>Preço:</strong> R${selectedProduct?.price}</p>
        <p><strong>Categoria:</strong> {selectedProduct?.category}</p>
        <p><strong>Descrição:</strong> Informações detalhadas do produto.</p>
      </Modal>
    </div>
  );
}

export default MeusProdutos;
