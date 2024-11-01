/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message } from 'antd';
import { SoundOutlined, MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Btn = styled(Button)`
  color: #f59e0b;
  border: none;
  font-weight: bold;
  margin-right: 10px !important;
  &:hover {
    background: #f59e0b;
    color: #fff;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const CardProduct = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 350px; /* Diminuído ainda mais para se ajustar melhor em telas menores */

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    height: 300px; /* Ajuste adicional para telas menores */
    margin-bottom: 10px; /* Reduzir o espaço entre os cartões */
  }
`;

const ImageBox = styled.img`
  max-width: 140px; /* Reduzido ainda mais para se ajustar a telas menores */
  margin-bottom: 12px;
  object-fit: cover;
  height: 140px;

  @media (max-width: 768px) {
    max-width: 100px; /* Ajuste adicional para telas menores */
    height: 100px;
  }
`;

const Title = styled.h2`
  font-size: 12px; /* Reduzido ainda mais para melhorar a legibilidade */
  font-weight: bold;
  margin: 0;
  color: #111827;
  height: 50px; /* Ajuste para evitar quebras de linha excessivas */
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 10px; /* Ajuste adicional para telas menores */
    height: 40px;
  }
`;

const PriceSpan = styled.span`
  display: block;
  font-size: 18px; /* Reduzido ainda mais */
  color: #10b981;
  font-weight: bold;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 16px; /* Ajuste adicional para telas menores */
  }
`;

const Subtitle = styled.p`
  font-size: 12px; /* Reduzido para melhorar a legibilidade */
  color: #6b7280;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 11px; /* Ajuste adicional para telas menores */
  }
`;

const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px; /* Reduzido o espaço */
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column; /* Alinha os botões verticalmente em telas menores */
    gap: 5px;
  }
`;

const AddCartButton = styled(Button)`
  background-color: #e5e7eb;
  color: #374151;
  border: none;
  width: 100%; /* Ajuste para preencher a largura completa */

  &:hover {
    background-color: #d1d5db;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 10px;
  }
`;

const MenuItem = styled.li`
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 30px; /* Reduzido o espaçamento entre as linhas */
  width: 100%;
  overflow: hidden;
  font-size: 12px; /* Reduzido para caber melhor na tela */
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

function Grid() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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
    message.success(`Produto "${product.name}" anunciado com sucesso!`);
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
          codigo: product.Codigo,
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

  function carregaImagens(CODIGO) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/imagens/3?produto=${CODIGO}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Verifica se a imagem existe, caso contrário define como null
        const imagem = result && result.imagem && result.imagem[0] ? result.imagem[0] : null;
  
        // Adiciona o objeto com o código e a imagem (ou null) ao estado
        setImages(prevImages => [
          ...prevImages, 
          {
            codigo: CODIGO,
            imagem: imagem
          }
        ]);
      })
      .catch((error) => {
        console.error('Erro ao carregar imagem:', error);
        // Em caso de erro, ainda assim grava o código com a imagem como null
        setImages(prevImages => [
          ...prevImages, 
          {
            codigo: CODIGO,
            imagem: null
          }
        ]);
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

  function addNewProduct() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/produtos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.map(product => ({
          id: product.ID,
          name: product.Nome,
          codigo: product.Codigo,
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

  return (
    <div className="container">
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
      <Row gutter={[12, 12]}> {/* Reduzi o espaçamento entre os elementos */}
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
            style={{ marginBottom: 10 }} /* Reduzi o espaço inferior */
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Row gutter={[12, 12]}> {/* Reduzi o espaçamento entre os elementos */}
            {isLoadingProducts ? (
              <Col span={24}>
                <Spin />
              </Col>
            ) : currentProducts.length ? (
              currentProducts.map((product) => {
                // Chama a função para carregar a imagem para o produto atual se não estiver carregada
                if (!images.find(img => img.codigo === product.codigo)) {
                  carregaImagens(product.codigo);
                }
          
                // Busca a imagem correspondente ao produto
                const productImage = images.find(img => img.codigo === product.codigo);
          
                return (
                  <Col xxl={6} lg={8} sm={12} xs={24} key={product.id}>
                    <Badge.Ribbon text="Mais Vendidos" color="#f59e0b">
                      <CardProduct>
                        <ImageBox 
  alt={product.name} 
  src={productImage && productImage.imagem 
    ? `data:image/png;base64,${productImage.imagem}` 
    : 'https://via.placeholder.com/180x180.png?text=No+Image'} 
/>
                        <Title>{product.name}</Title>
                        <PriceSpan>R${product.price}</PriceSpan>
                         
                        <WrapperButtons>
                          <AddCartButton icon={<SoundOutlined />} onClick={() => handleAnnounce(product)}>
                            Anunciar
                          </AddCartButton>
                          <Btn onClick={() => showModal(product)}>Ver Detalhes</Btn>
                        </WrapperButtons>
                      </CardProduct>
                    </Badge.Ribbon>
                  </Col>
                );
              })
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
      <Modal
        title={selectedProduct?.name}
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <ImageBox 
          alt={selectedProduct?.name} 
          src={images[selectedProduct?.id] || 'https://via.placeholder.com/180x180.png?text=No+Image'} 
        />
        <p><strong>Preço:</strong> ${selectedProduct?.price}</p>
        <p><strong>Categoria:</strong> {selectedProduct?.category}</p>
        <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </Modal>
    </div>
  );
}

export default Grid;
