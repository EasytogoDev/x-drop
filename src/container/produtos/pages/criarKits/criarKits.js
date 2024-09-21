/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  MainContainer,
  SelectContainer,
  InputContainer,
  ProductSelectorContainer,
  ProductItem,
  SelectedProductsContainer,
  Button,
  CategorySelector,
  ProductSection,
} from './styles.ts';
import { Modal, message, Pagination } from 'antd';
import Cookies from 'js-cookie';
import 'antd/dist/antd.css';

const KitBuilder = () => {
  const [selectedDeposito, setSelectedDeposito] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Estado da página atual
  const [productsPerPage] = useState(5); // Número de produtos por página
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [depositos, setDepositos] = useState([]);

  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    message.success('Produto adicionado com sucesso!');
  };

  const handleRemoveProduct = (productId) => {
    Modal.confirm({
      title: 'Remover SKU',
      content: 'Tem certeza de que deseja remover o SKU?',
      okText: 'Sim, remover',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk: () => {
        setSelectedProducts(
          selectedProducts.filter((product) => product.id !== productId)
        );
        message.success('O SKU foi removido com sucesso!');
      },
    });
  };

  const handleCreateKit = () => {
    message.success('Kit criado com sucesso!');
  };

  const handleEditKit = () => {
    message.success('Kit editado com sucesso!');
  };

  const handleDeleteKit = () => {
    Modal.confirm({
      title: 'Deletar Kit',
      content: 'Tem certeza de que deseja deletar o kit?',
      okText: 'Sim, deletar',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk: () => {
        message.success('Kit deletado com sucesso!');
      },
    });
  };

  const carregaCategorias = () => {
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
  };

  const carregaProdutos = () => {
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
  };

  const carregaDepositos = () => {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/fornecedores/lista/3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // Verificar o retorno da API
        // Como o retorno da API é um único objeto, basta colocar ele diretamente
        const mappedDepositos = [{
          endereco: result.enderecoFORNECEDOR,
        }];
        setDepositos(mappedDepositos);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    carregaCategorias();
    carregaProdutos();
    carregaDepositos();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <MainContainer>
      <h1>Cadastro Kit</h1>

      <SelectContainer>
        <label>Depósito</label>
        <select value={selectedDeposito} onChange={(e) => setSelectedDeposito(e.target.value)}>
          <option value="">- Escolha um depósito -</option>
          {depositos.length === 0 ? (
            <option value="">Carregando depósitos...</option>
          ) : (
            depositos.map((deposito) => (
              <option key={deposito.endereco} value={deposito.endereco}>
                {deposito.endereco}
              </option>
            ))
          )}
        </select>
      </SelectContainer>

      <InputContainer>
        <label>Título <span>(Max. 60 caracteres)</span></label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength="60" />
      </InputContainer>

      <InputContainer>
        <label>Descrição</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </InputContainer>

      <CategorySelector>
        <label>Categoria Shopee</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} disabled={isLoadingCategories}>
          <option value="">- escolha a sua categoria -</option>
          {categories.map((cat) => (
            <option key={cat.hierarquia} value={cat.nome}>{cat.nome}</option>
          ))}
        </select>
      </CategorySelector>

      <ProductSection>
        <ProductSelectorContainer>
          <h2>Selecione os produtos</h2>
          <div className="product-list">
            {isLoadingProducts ? (
              <p>Carregando produtos...</p>
            ) : (
              currentProducts.map((product) => (
                <ProductItem key={product.id}>
                  <p>{product.name}</p>
                  <Button onClick={() => handleAddProduct(product)}>Incluir</Button>
                </ProductItem>
              ))
            )}
          </div>
        </ProductSelectorContainer>

        <SelectedProductsContainer>
          <h2>Produtos selecionados</h2>
          {selectedProducts.map((product) => (
            <ProductItem key={product.id}>
              <p>{product.name}</p>
              <Button onClick={() => handleRemoveProduct(product.id)}>Remover</Button>
            </ProductItem>
          ))}
        </SelectedProductsContainer>
      </ProductSection>

      <div style={{ marginTop: '20px' }}>
        <Pagination
          current={currentPage}
          total={products.length}
          pageSize={productsPerPage}
          onChange={handlePageChange}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <Button type="primary" onClick={handleCreateKit}>Criar Kit</Button>
        <Button type="default" onClick={handleEditKit} style={{ marginLeft: '10px' }}>Editar Kit</Button>
        <Button type="danger" onClick={handleDeleteKit} style={{ marginLeft: '10px' }}>Deletar Kit</Button>
      </div>
    </MainContainer>
  );
};

export default KitBuilder;
