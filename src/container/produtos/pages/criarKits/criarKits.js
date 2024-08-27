/* eslint-disable */
import React, { useState } from 'react';
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
import { Modal, message } from 'antd';
import 'antd/dist/antd.css';  // Importando os estilos do Ant Design

const KitBuilder = () => {
  const [selectedDeposito, setSelectedDeposito] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

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

  return (
    <MainContainer>
      <h1>Cadastro Kit</h1>

      <SelectContainer>
        <label>Depósito</label>
        <select value={selectedDeposito} onChange={(e) => setSelectedDeposito(e.target.value)}>
          <option value="">- Escolha um depósito -</option>
          <option value="Drop Auto Peças - SP">Drop Auto Peças - SP</option>
          <option value="Mix Variedades - SP">Mix Variedades - SP</option>
          <option value="Quadros - SP">Quadros - SP</option>
          <option value="DropeLuz - RS">DropeLuz - RS</option>
          <option value="Drop Luz - SP">Drop Luz - SP</option>
          <option value="Ibitinga - SP">Ibitinga - SP</option>
          <option value="Envio Nacional - RJ">Envio Nacional - RJ</option>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">- escolha a sua categoria -</option>
          <option value="Acessórios de Moda">Acessórios de Moda</option>
          <option value="Abotoaduras">Abotoaduras</option>
          <option value="Amuletos">Amuletos, Pingentes e Ornamentos</option>
          <option value="Broches">Broches e Alfinetes</option>
        </select>
      </CategorySelector>

      <ProductSection>
        <ProductSelectorContainer>
          <h2>Selecione os produtos</h2>
          <div className="product-list">
            {[
              { id: 1, name: 'Abajur desk preto led 5w', stock: 100, image: 'image1.png' },
              { id: 2, name: 'Abajur new office preto', stock: 100, image: 'image2.png' },
              { id: 3, name: 'Abajur new office prata', stock: 43, image: 'image3.png' },
              { id: 4, name: 'Abajur desk branco led 5w', stock: 100, image: 'image4.png' },
              { id: 5, name: 'LUSTRE PENDENTE DUAL VERMELHO', stock: 100, image: 'image5.png' },
            ].map((product) => (
              <ProductItem key={product.id}>
                <p>{product.name}</p>
                <Button onClick={() => handleAddProduct(product)}>Incluir</Button>
              </ProductItem>
            ))}
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

      {/* <ImageContainer>
        <h3>Imagens</h3>
        <ImageGrid>
          {selectedProducts.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <Button onClick={() => handleRemoveProduct(product.id)}>Remover</Button>
            </div>
          ))}
        </ImageGrid>
        <Button>Adicionar Imagens</Button>
      </ImageContainer> */}
    </MainContainer>
  );
};

export default KitBuilder;

