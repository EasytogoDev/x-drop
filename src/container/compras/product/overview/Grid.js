/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message, List, Collapse } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import {
  Btn, ViewButton, AddCartButton, CardProduct, ImageBox,
  Title, PriceSpan, CodeSpan, Subtitle, WrapperButtons,
  PerguntaInput, EnviarButton, PerguntasBox, MobileMenuButton,
  Menu, MenuItem, MenuLink
} from './gridStyles'; 

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
  const [editableJson, setEditableJson] = useState({});
  const { Panel } = Collapse;

  const camposPermitidos = [
    "ID", "Nome", "Codigo", "Categoria", "PrecoVenda", "Descricao", "EstoqueUnidade", 
    "UnidadeComercial", "GeneroFiscal", "Fornecedor"
  ];
  
 
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

  const handleSaveChanges = (updatedJson) => {
    // Aqui você pode atualizar o estado do produto ou enviar os dados para uma API
    console.log("Dados atualizados:", updatedJson);
    message.success("Alterações salvas com sucesso!");
    setIsViewProductModalVisible(false);
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

  const showViewProductModal = (productJson) => {
    setModalJson(JSON.stringify(productJson));
    setEditableJson(productJson); // Carrega o JSON editável
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
  width={800}
  footer={[
    <Button key="back" onClick={handleViewProductModalClose}>
      Fechar
    </Button>,
    <Button key="save" type="primary" onClick={() => handleSaveChanges(editableJson)}>
      Salvar Alterações
    </Button>,
  ]}
>
  <p>Edite as informações do produto abaixo:</p>
  {Object.entries(editableJson).map(([key, value]) => {
    if (!camposPermitidos.includes(key)) return null; // Ignora os campos não permitidos

    return (
      <div key={key} style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: 'bold' }}>{key}:</label>
        <Input
          value={value}
          onChange={(e) => handleJsonChange(key, e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
    );
  })}
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
