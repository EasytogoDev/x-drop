/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message, List } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
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
 
  const [percentual, setPercentual] = useState(0);
  const [valor, setValor] = useState(0);

  const productsPerPage = 12;

  // Modal de perguntas
  const [isPerguntaModalVisible, setIsPerguntaModalVisible] = useState(false);
  const [isViewProductModalVisible, setIsViewProductModalVisible] = useState(false);
  const [modalJson, setModalJson] = useState([]);

  
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

  // const showPerguntaModal = () => {
  //   setIsPerguntaModalVisible(true);
  // };

  const handlePerguntaModalClose = () => {
    setIsPerguntaModalVisible(false);
  };

  const showViewProductModal = (Modal) => {

    setModalJson(JSON.stringify(Modal));
    setIsViewProductModalVisible(true);
  };

  const handleViewProductModalClose = () => {
    setIsViewProductModalVisible(false);
  };

  const showCadastroModal = (product) => {
    setSelectedProduct(product);
  
    // Carregar o percentual do localStorage ou definir 0 como valor padrão
    const savedPercentual = parseFloat(localStorage.getItem('percentual')) || 0;
    setPercentual(savedPercentual);
  
    const priceNumeric = parseFloat(product.price.replace("R$", "").replace(",", "."));
    const initialValue = (priceNumeric * (1 + savedPercentual / 100)).toFixed(2);
    setValor(initialValue); // Define o valor inicial do produto
    
    setIsCadastroModalVisible(true);
  };

  const handleCadastroModalClose = () => {
    setIsCadastroModalVisible(false);
  };


  const handlePercentualChange = (e) => {
    const newPercentual = parseFloat(e.target.value);
    setPercentual(newPercentual);
  
    // Salva o percentual no localStorage
    localStorage.setItem('percentual', newPercentual);
  
    const productPrice = parseFloat(selectedProduct.price.replace("R$", "").replace(",", "."));
    
    if (!isNaN(productPrice)) {
      const newValue = (productPrice * (1 + newPercentual / 100)).toFixed(2);
      setValor(newValue);
    }
  };
  

  const handleValorChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValor(newValue);
  
    // Verifica se o selectedProduct.price é um número válido
    const productPrice = parseFloat(selectedProduct.price.replace("R$", "").replace(",", "."));
  
    if (!isNaN(productPrice)) {
      // Calcula o percentual com base no novo valor
      const newPercentual = (((newValue / productPrice) - 1) * 100).toFixed(2); // Percentual atualizado
      setPercentual(newPercentual); // Atualiza o percentual no campo
    }
  };

  const handleCadastrarProduto = () => {
    const product = selectedProduct;
    
    // Aqui você pode fazer o cadastro do produto com o valor atualizado
    cadastrarProduto({
      ...product,
      price: valor, // O valor editado ou calculado
    });
    
    handleCadastroModalClose();
    message.success(`Produto "${product.name}" cadastrado com sucesso!`);
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
        sku: product.codigo || "",
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
  
  
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/produtos/3?tipo=1&page=1&limit=20`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result && result.products) {
      const mappedProducts = result.products.map((product) => {
        const jsonProduto = product.jsonProduto || {};

        // Inicialmente, usar o preço de venda principal
        let priceDrop = jsonProduto.PrecoVenda || 0;

        // Verificar se há variações de produto
        const variacoes = jsonProduto.VariacoesProduto || [];


       

        let tabelaDrop = null;

        // Se o produto tiver variações e for do tipo 1
        // if (variacoes.length > 0 && jsonProduto.TipoDoProduto === 1) {
        //   // Procurar o preço da tabela "DROP" nas variações
        //   for (let variacao of variacoes) {
        //     tabelaDrop = variacao.PrecosTabelas?.find(tabela => tabela.Tabela === "DROP");
        //     if (tabelaDrop && tabelaDrop.PrecoVenda) {
        //       priceDrop = tabelaDrop.PrecoVenda; // Encontrou o preço da tabela "DROP"
        //       break; // Interrompe o loop assim que encontrar o preço
        //     }
        //   }
        // }

        // Se o produto não tem variações, buscar no nível principal do produto
        if (!tabelaDrop) {
          tabelaDrop = jsonProduto.PrecosTabelas?.find(tabela => tabela.Tabela === "DROP");
          if (tabelaDrop && tabelaDrop.PrecoVenda) {
            priceDrop = tabelaDrop.PrecoVenda;
          }
        }

        // Verificar se o preço está em centavos e ajustar
        if (priceDrop > 1000) {
          priceDrop = priceDrop / 100;
        }

        // Se o preço ainda for inválido ou não encontrado, definir como 0
        if (isNaN(priceDrop) || priceDrop <= 0) {
          priceDrop = 0;
        }


        console.log("VariacoesProduto:", variacoes);
        console.log("Tabela encontrada:", tabelaDrop);

        // Formatar o preço no padrão BRL
        const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceDrop);

        return {
          id: jsonProduto.ID,
          name: jsonProduto.Nome || 'Produto Sem Nome',
          codigo: jsonProduto.Codigo || 'Sem Código',
          price: priceFormatted,
          category: jsonProduto.Categoria || 'Sem Categoria',
          tipo: jsonProduto.TipoDoProduto || 'Sem Tipo',
          json: jsonProduto || [],
        };
      });

      console.log(mappedProducts);

      setProducts(mappedProducts);
      setIsLoadingProducts(false);
    } else {
      console.error("Nenhum produto retornado.");
      setIsLoadingProducts(false);
    }
  })
  .catch((error) => {
    console.error("Erro ao carregar produtos:", error);
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
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
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
                return (
                  <Col xxl={6} lg={8} sm={12} xs={24} key={product.id}>
                    <Badge.Ribbon text="Mais Vendidos" color="#f59e0b">
                      <CardProduct>
                        <ImageBox
                          alt={product.name}
                          src={productImage && productImage.imagem
                            ? `${productImage.imagem}`
                            : 'https://via.placeholder.com/180x180.png?text=No+Image'}
                        />
                        <CodeSpan>{product.codigo}</CodeSpan>
                        <PriceSpan>{product.price}</PriceSpan>
                        <Subtitle>{product.name}</Subtitle>
                        <WrapperButtons>
                          {/* <Btn icon={<SoundOutlined />} onClick={showPerguntaModal}>
                            Fazer Pergunta
                          </Btn> */}
                          {product.tipo === 0?
                          <ViewButton icon={<ShoppingCartOutlined />} onClick={() => showCadastroModal(product)}>
                            Cadastrar X-Drop - SP
                          </ViewButton>
                          :
                          <ViewButton icon={<ShoppingCartOutlined />} onClick={() => showCadastroModal(product)}>
                            Ver Variações Produto
                          </ViewButton>
                          }
                          <AddCartButton icon={<EyeOutlined />} onClick={() => showViewProductModal(product.json)}>
                            Visualizar Produto
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

      {/* Modal para ajustar o percentual e o valor */}
      <Modal
        title="Cadastrar Produto - X-Drop SP"
        visible={isCadastroModalVisible}
        onCancel={handleCadastroModalClose}
        footer={[
          <Button key="back" onClick={handleCadastroModalClose}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleCadastrarProduto}>
            Cadastrar Produto
          </Button>,
        ]}
      >
        <p>Produto: {selectedProduct && selectedProduct.name}</p>
        <p>Código: {selectedProduct && selectedProduct.codigo}</p>
        <Input
          addonBefore="Percentual (%)"
          type="number"
          value={percentual}
          onChange={handlePercentualChange}
        />
        <br />
        <Input
          addonBefore="Valor (R$)"
          type="number"
          value={valor}
          onChange={handleValorChange}
        />
      </Modal>

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
        <p>Informações detalhadas do produto aqui.

          {modalJson}
        </p>
      </Modal>

      {/* Modal de Cadastro */}
      {/* <Modal
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
      </Modal> */}
    </div>
  );
}

export default Grid;
