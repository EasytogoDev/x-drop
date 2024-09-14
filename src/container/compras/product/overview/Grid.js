/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message, List } from 'antd';
import { SoundOutlined, EyeOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Cookies from 'js-cookie';

// Estilos personalizados
const Btn = styled(Button)`
  color: #fff;
  background-color: #6b46c1; /* Cor roxa do botão "Fazer Pergunta" */
  border: none;
  font-weight: bold;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #5a3a9d;
  }
`;

const ViewButton = styled(Button)`
  color: #fff;
  background-color: #fb923c; /* Cor laranja para o botão "Visualizar Produto" */
  border: none;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #f97316;
  }
`;

const AddCartButton = styled(Button)`
  color: #6b46c1;
  background-color: transparent;
  border: none;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

const CardProduct = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageBox = styled.img`
  max-width: 180px;
  margin-bottom: 12px;
  object-fit: cover;
  height: 180px;
  border-radius: 8px; /* Ajuste de bordas arredondadas */
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #111827;
`;

const PriceSpan = styled.span`
  display: block;
  font-size: 18px;
  color: #10b981;
  font-weight: bold;
  margin-top: 8px;
`;

const CodeSpan = styled.span`
  display: block;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column; /* Botões empilhados */
  margin-top: 12px;
`;

const PerguntaInput = styled(Input)`
  margin-bottom: 16px;
  width: 80%;
`;

const EnviarButton = styled(Button)`
  background-color: #6b46c1;
  color: #fff;
  margin-left: 8px;

  &:hover {
    background-color: #5a3a9d;
  }
`;

const PerguntasBox = styled.div`
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
  height: 200px; /* Defina uma altura fixa */
  overflow-y: auto; /* Permitir rolagem */
`;

const MobileMenuButton = styled(Button)`
  display: none;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: inline-block;
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

  // Modal de perguntas
  const [isPerguntaModalVisible, setIsPerguntaModalVisible] = useState(false);
  const [isViewProductModalVisible, setIsViewProductModalVisible] = useState(false);
  const [isCadastroModalVisible, setIsCadastroModalVisible] = useState(false);

  const [pergunta, setPergunta] = useState('');
  const [perguntas, setPerguntas] = useState([]);

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

  const handleEnviarPergunta = () => {
    if (pergunta.trim()) {
      setPerguntas([...perguntas, pergunta]);
      setPergunta(''); // Limpar o campo de pergunta após envio
    }
  };

  const showPerguntaModal = () => {
    setIsPerguntaModalVisible(true);
  };

  const handlePerguntaModalClose = () => {
    setIsPerguntaModalVisible(false);
  };

  const showViewProductModal = () => {
    setIsViewProductModalVisible(true);
  };

  const handleViewProductModalClose = () => {
    setIsViewProductModalVisible(false);
  };

  const showCadastroModal = () => {
    setIsCadastroModalVisible(true);
  };

  const handleCadastroModalClose = () => {
    setIsCadastroModalVisible(false);
  };

  useEffect(() => {
    carregaProdutos();
    carregaCategorias();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      products.forEach((product) => {
        if (!images.find(img => img.codigo === product.codigo)) {
          carregaImagens(product.codigo);
        }
      });
    }
  }, [products]);

  function cadastrarProduto(product) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        sku: product.sku || "",            
        nome: product.name,           
        descricao: product.name,
        preco: product.price,         
        quantidade: product.quantidade || "", 
        alerta: product.alerta || "",      
        categoria: product.category, 
        localizacao: product.localizacao || "", 
        imagem: product.imagem || "",     
        tipo: product.tipo || "",           
        acesso: product.acesso || "",     
        ativo: product.ativoPRODUTO || 1        
      }),
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/produtos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        message.success(`Produto "${product.name}" cadastrado com sucesso!`);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar produto:', error);
      });
  }

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
        const imagem = result && result.imagem && result.imagem[0] ? result.imagem[0] : null;
        setImages(prevImages => [
          ...prevImages.filter(img => img.codigo !== CODIGO),  // Remova qualquer imagem anterior com o mesmo código
          { codigo: CODIGO, imagem: imagem }  // Adicione a nova imagem
        ]);
      })
      .catch((error) => {
        console.error('Erro ao carregar imagem:', error);
        setImages(prevImages => [
          ...prevImages,
          { codigo: CODIGO, imagem: null }
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
              currentProducts.map((product) => {
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
                        <CodeSpan>{product.codigo}</CodeSpan>
                        <PriceSpan>R${product.price}</PriceSpan>
                        <Subtitle>{product.name}</Subtitle>
                        <WrapperButtons>
                          <Btn icon={<SoundOutlined />} onClick={showPerguntaModal}>
                            Fazer Pergunta
                          </Btn>
                          <ViewButton icon={<EyeOutlined />} onClick={showViewProductModal}>
                            Visualizar Produto
                          </ViewButton>
                          <AddCartButton icon={<ShoppingCartOutlined />} onClick={() => cadastrarProduto(product)}>
                            Cadastrar X-Drop - SP
                          </AddCartButton>
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

      {/* Modal de perguntas */}
      <Modal
        title="Faça sua pergunta"
        visible={isPerguntaModalVisible}
        onCancel={handlePerguntaModalClose}
        footer={[
          <Button key="back" onClick={handlePerguntaModalClose}>
            Fechar
          </Button>,
        ]}
      >
        <div>
          <PerguntaInput
            placeholder="Digite sua pergunta"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <EnviarButton onClick={handleEnviarPergunta}>Enviar Pergunta</EnviarButton>
        </div>
        <PerguntasBox>
          <h3>Perguntas</h3>
          {perguntas.length > 0 ? (
            <List
              bordered
              dataSource={perguntas}
              renderItem={(item) => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            />
          ) : (
            <p>Nenhuma pergunta ainda.</p>
          )}
        </PerguntasBox>
      </Modal>

      {/* Modal de Visualizar Produto */}
      <Modal
        title="Visualizar Produto"
        visible={isViewProductModalVisible}
        onCancel={handleViewProductModalClose}
        footer={[
          <Button key="back" onClick={handleViewProductModalClose}>
            Fechar
          </Button>,
        ]}
      >
        <p>Informações detalhadas do produto aqui.</p>
      </Modal>

      {/* Modal de Cadastro */}
      <Modal
        title="Cadastrar X-Drop - SP"
        visible={isCadastroModalVisible}
        onCancel={handleCadastroModalClose}
        footer={[
          <Button key="back" onClick={handleCadastroModalClose}>
            Fechar
          </Button>,
        ]}
      >
        <p>Detalhes do cadastro aqui.</p>
      </Modal>
    </div>
  );
}

export default Grid;
