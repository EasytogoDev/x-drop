/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message } from 'antd';
import { NotificationOutlined, EyeOutlined, ShoppingCartOutlined, MenuOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { AddCartButton, Btn, CardProduct, CodeSpan, ImageBox, Menu, MenuItem, MenuLink, MobileMenuButton, PriceSpan, Subtitle, Title, ViewButton, WrapperButtons } from './styles.ts';

// Estilos personalizados

function MeusProdutos() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ product: {} });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [marketplace, setMarketplace] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [isViewProductModalVisible, setIsViewProductModalVisible] = useState(false);
const [modalJson, setModalJson] = useState([]);
const [editableJson, setEditableJson] = useState({});
const camposPermitidos = [
  "ID", "Nome", "Codigo", "Categoria", "PrecoVenda", "Descricao", "EstoqueUnidade", 
  "UnidadeComercial", "GeneroFiscal", "Fornecedor"
];
const showViewProductModal = (productJson) => {
  if (!productJson) {
    message.error("Dados do produto não encontrados.");
    return;
  }

  setModalJson(JSON.stringify(productJson));
  setEditableJson(productJson || {}); // Carrega o JSON editável ou um objeto vazio
  setIsViewProductModalVisible(true);
};

const handleJsonChange = (key, value) => {
  setEditableJson(prevJson => ({
    ...prevJson,
    [key]: value,
  }));
};

const handleViewProductModalClose = () => {
  setIsViewProductModalVisible(false);
};

const handleSaveChanges = (updatedJson) => {
  // Aqui você pode atualizar o estado do produto ou enviar os dados para uma API
  console.log("Dados atualizados:", updatedJson);
  message.success("Alterações salvas com sucesso!");
  setIsViewProductModalVisible(false);
};
  
  
  const productsPerPage = 12;

  // Modais para anunciar, visualizar e cadastrar
  const [isAnnounceModalVisible, setIsAnnounceModalVisible] = useState(false);


  const [selectedPlatform, setSelectedPlatform] = React.useState('');

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setIsEditing(true);  // Ativa o modo de edição
    setIsAnnounceModalVisible(true);
  };

  const handleConfirm = () => {
    if (!selectedPlatform) {
      message.error('Selecione uma plataforma para anunciar.');
      return;
    }
    message.success(`Produto "${selectedProduct?.product?.name}" anunciado no ${selectedPlatform} com sucesso!`);
  };


  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showModal = (product, imagem) => {
    setSelectedProduct({product, imagem});
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAnnounce = (product, imagem) => {
    setSelectedProduct({product, imagem});
    setIsAnnounceModalVisible(true);
  };

  const handleAnnounceModalClose = () => {
    setIsAnnounceModalVisible(false);
  };

  useEffect(() => {
    carregaProdutos();
    carregaCategorias();
    carregaMarketplaces();
    if (products.length > 0) {

    


      products.forEach((product) => {
        if (!images.find(img => img.codigo === product.codigo)) {
          carregaImagens(product.codigo);
        }
      });
    }
  }, []);

  // Função para carregar os produtos cadastrados via API
  function carregaProdutos() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Chama a API que retorna os produtos cadastrados
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/produtos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {


        if (result) {
          const mappedProducts = result.map((product) => {
             
            carregaImagens(product.skuPRODUTO);
    
            return {
              id: product.codigoPRODUTO,
              name: product.nomePRODUTO || 'Produto Sem Nome',
              codigo: product.skuPRODUTO || 'Sem Código',
              price: parseFloat(product.precoPRODUTO).toFixed(2), // Converte o preço para o formato correto
              category: product.categoriaPRODUTO || 'Sem Categoria',
              tipo: product.TipoDoProduto || 'Sem Tipo',
              image: product.imagemPRODUTO, 
            };
          });
     
          console.log({teste: mappedProducts});
          setProducts(mappedProducts);
          setIsLoadingProducts(false);
        } else {
          console.error("Nenhum produto retornado.");
          setIsLoadingProducts(false);
        }
 
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingProducts(false);
      });
  }




  // Função para carregar os produtos cadastrados via API
  function carregaMarketplaces() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Chama a API que retorna os produtos cadastrados
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/vinculos-integracoes`, requestOptions)
      .then((response) => response.json())
      .then((result) => { 
        console.log('Result from API:', result); // Verifica o que está sendo retornado
    setMarketplace(result || []);  
      })
      .catch((error) => {
        console.error(error); 
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
        const imagem = result && result.imagem && result.imagem[0] ? result.imagem[0].url : null;
        const imagemBase64 = imagem ? `data:image/png;base64,${imagem}` : null; // Adiciona o prefixo
  
        setImages(prevImages => [
          ...prevImages.filter(img => img.codigo !== CODIGO),  // Remova qualquer imagem anterior com o mesmo código
          { codigo: CODIGO, imagem: imagemBase64 }  // Adicione a nova imagem com base64 formatado
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
    .filter(product => product.name.includes(searchTerm));

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

  console.log('fjhsdlkfgsdljkfgdsf');
 console.log(selectedProduct);


 // Styled Components para os botões com logos
const LogoButton = styled(Button)`
display: flex;
align-items: center;
justify-content: center;
border: 2px solid transparent;
padding: 12px;
width: 150px;
height: 60px;
margin: 10px;
background-color: #fff;

&:hover {
  border-color: #ccc;
}

&.selected {
  border-color: #4caf50;
}
`;

const Logo = styled.img`
max-width: 100px;
height: auto;
`;

const SelectionContainer = styled.div`
display: flex;
justify-content: space-around;
`;

  return (
    <div className="container" style={{ marginLeft: 25}}>
      <PageHeader className="ninjadash-page-header-main" title="Produtos" routes={PageRoutes} />
      {/* <MobileMenuButton icon={<MenuOutlined />} onClick={showDrawer}>
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
      </Drawer> */}
      <Row gutter={[12, 12]}>
        {/* <Col xs={0} lg={4}>
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
        </Col> */}
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
                return (<Col xxl={6} lg={8} sm={12} xs={24} key={product.id}>
                  <Badge.Ribbon text="Mais Vendidos" color="#f59e0b">
                    <CardProduct>
                    <ImageBox
                          alt={product.name}
                          src={productImage && productImage.imagem
                            ? `${productImage.imagem}`
                            : 'https://via.placeholder.com/180x180.png?text=No+Image'}
                        />
                      <CodeSpan>{product.id}</CodeSpan>
                      <PriceSpan>R${product.price}</PriceSpan>
                      <Subtitle>{product.name}</Subtitle>
                      <WrapperButtons>
                        <Btn icon={<NotificationOutlined />} onClick={() => handleAnnounce(product, productImage.imagem)}>
                          Anunciar Produto
                        </Btn>
                        <ViewButton icon={<EyeOutlined />} onClick={() => showModal(product, productImage.imagem)}>
                          Visualizar Produto
                        </ViewButton>
                        <Button
  icon={<EditOutlined />}
  onClick={() => handlePlatformSelect('Shopee')}
  style={{ marginBottom: 5 }}
>
  Shopee
</Button>
<Button
  icon={<EditOutlined />}
  onClick={() => handlePlatformSelect('Mercado Livre')}
>
  Mercado Livre
</Button>
                      </WrapperButtons>
                    </CardProduct>
                  </Badge.Ribbon>
                </Col>);
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

      {/* Modal de Anunciar Produto */}
      <Modal
      title="Anunciar Produto"
      visible={isAnnounceModalVisible}
      onCancel={handleAnnounceModalClose}
      footer={[
        <Button key="back" onClick={handleAnnounceModalClose}>
          Fechar
        </Button>,
        <Button key="submit" type="primary" onClick={handleConfirm}>
          Confirmar Anúncio
        </Button>,
      ]}
    >
      <p>Confirme o anúncio do produto: "{selectedProduct?.product?.name || 'Produto Sem Nome'}".</p>

      <SelectionContainer>
        
        
       {/*  <LogoButton
          className={selectedPlatform === 'Shopee' ? 'selected' : ''}
          onClick={() => handlePlatformSelect('Shopee')}
        >
          <Logo src="/uploads/shopee.svg"  style={{width: 150}} alt="Shopee Logo" />
        </LogoButton> */}
        { marketplace.map((places) => (
        <LogoButton
          key={places.codigo}
          className={selectedPlatform === places.integracaoDetalhes.nomeINTEGRACAO ? 'selected' : ''}
          onClick={() => handlePlatformSelect(places.integracaoDetalhes.nomeINTEGRACAO )}
        >
          <Logo src={places.integracaoDetalhes.nomeINTEGRACAO === "Mercado Livre" ? "/uploads/mercado-livre.svg" : "/uploads/shopee.svg"} style={{width: 150}} alt={places.integracaoDetalhes.nomeINTEGRACAO } />
        </LogoButton>
      ))
        }


      </SelectionContainer>
    </Modal>

    <Modal
  title={`Editar Anúncio - ${selectedPlatform}`}
  visible={isAnnounceModalVisible}
  onCancel={() => { setIsAnnounceModalVisible(false); setIsEditing(false); }}
  footer={[
    <Button key="back" onClick={() => { setIsAnnounceModalVisible(false); setIsEditing(false); }}>
      Fechar
    </Button>,
    <Button key="submit" type="primary" onClick={() => handleSaveChanges(editableJson)}>
      Salvar Alterações
    </Button>,
  ]}
>
  <p>Editando anúncio para: "{selectedProduct?.product?.name || 'Produto Sem Nome'}".</p>

  {/* Campos editáveis */}
  <Input
    placeholder="Nome do Produto"
    value={editableJson.name || ''}
    onChange={(e) => handleJsonChange('name', e.target.value)}
    style={{ marginBottom: 10 }}
  />
  <Input
    placeholder="Preço do Produto"
    value={editableJson.price || ''}
    onChange={(e) => handleJsonChange('price', e.target.value)}
    style={{ marginBottom: 10 }}
  />
  <Input
    placeholder="Categoria"
    value={editableJson.category || ''}
    onChange={(e) => handleJsonChange('category', e.target.value)}
    style={{ marginBottom: 10 }}
  />
  <Input
    placeholder="Descrição"
    value={editableJson.description || ''}
    onChange={(e) => handleJsonChange('description', e.target.value)}
    style={{ marginBottom: 10 }}
  />
</Modal>

      {/* Modal de Visualizar Produto */}
      <Modal
        title="Visualizar Produto"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <ImageBox
          alt={selectedProduct?.product?.name || 'Sem Nome'}
          src={selectedProduct?.imagem ? selectedProduct.imagem : 'https://via.placeholder.com/180x180.png?text=No+Image'}
        />
        <p><strong>Nome:</strong> {selectedProduct?.product?.name || 'Produto Sem Nome'}</p>
        <p><strong>Preço:</strong> R${selectedProduct?.product?.price || 'N/A'}</p>
        <p><strong>Categoria:</strong> {selectedProduct?.product?.category || 'Sem Categoria'}</p>
        <p><strong>Descrição:</strong> {selectedProduct?.product?.description || 'Descrição não disponível'}</p>
        <p><strong>Variações:</strong> .</p>
      </Modal>
    </div>
  );
}

export default MeusProdutos;