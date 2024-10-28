/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
// import { Table } from 'antd';
// import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';
// eslint-disable-next-line import/order
// import styles from './lastProducts/lastproduct.module.css'
import Cookies from 'js-cookie';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: max-content;
`;

const CarouselButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`;

const CarouselPrev = styled(CarouselButton)`
  left: 10px;
`;

const CarouselNext = styled(CarouselButton)`
  right: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductContainer = styled.div`
  text-align: center;
  padding: 10px;
  margin: 0 10px;
  width: 250px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

const ProductTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #333;
`;

const ActiveUser = React.memo(() => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Largura do slide, ajuste conforme necessário
  const [pedidosMeli, setPedidosMeli] = useState([]);
  const carouselRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const carregaProdutos = () => {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/painel/top-products`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.products.map((product) => ({
          id: product.codigoITEMPEDIDO,
          name: product.nomeProdutoITEMPEDIDO,
          category: product.origemITEMPEDIDO,
          price: parseFloat(product.precoITEMPEDIDO).toFixed(2),
          image: product.imagemITEMPEDIDO, // Verificar se o produto tem imagem
        }));
        setProducts(mappedProducts);
      })
      .catch((error) => {
        console.error('Erro ao carregar produtos:', error);
      });
  };

  function carregaPedidosMeli() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pedidos`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // Verifique o payload retornado

        if (Array.isArray(result) && result.length > 0) {
          const pedidos = result.map((pedido) => ({
            codigo: pedido.codigo, // Ajuste para o campo correto
            nome: pedido.nome,
            sobrenome: pedido.sobrenome,
            status: pedido.status,
            datacriacao: pedido.datacriacao, // Data de criação do pedido
            totalAmount: pedido.total, // Valor total do pedido
            buyerNickname: `${pedido.nome} ${pedido.sobrenome}`, // Nome e sobrenome concatenados
            rua: pedido.rua, // Rua
            numero: pedido.numero, // Número da casa
            bairro: pedido.bairro, // Bairro
            cep: pedido.cep, // CEP
            integracao: pedido.integracao,
            telefone: `${pedido.areaTelefone} ${pedido.telefone}`, // Telefone
            email: pedido.email, // Email do cliente
            items: pedido.Itens ? pedido.Itens.map((item) => ({
              title: item.produto, // Nome do produto
              quantity: item.quantidade, // Quantidade
              sku: item.produto, // SKU do produto
              price: item.preco, // Preço
              imagem: item.imagem
            })) : [], // Verifica se ItensPedido existe antes de mapear
          }));

          setPedidosMeli(pedidos);
          setFilteredPedidos(pedidos); // Define o estado de pedidos filtrados também
        } else {
          console.error('Nenhum pedido encontrado ou formato inesperado:', result);
        }
      })
      .catch((error) => console.error('Erro ao carregar pedidos:', error));
  }

  useEffect(() => {
    carregaProdutos();
    carregaPedidosMeli();
  }, []);

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          title="Lançamentos"
          size="large"
        >
          {products.length > 0 ? (
            <CarouselContainer>
              <CarouselTrack style={{ transform: `translateX(-${currentIndex * 250}px)` }} ref={carouselRef}>
                {products.map((product) => (
                  <ProductContainer key={product.id}>
                    <StyledImage
                      src={product.image || 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'} // Imagem padrão caso não tenha
                      alt={product.name}
                    />
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>{`Origem: ${product.category}`}</ProductDescription>
                    <ProductPrice>{`R$ ${product.price}`}</ProductPrice>
                  </ProductContainer>
                ))}
              </CarouselTrack>
              <CarouselPrev onClick={prevSlide}>‹</CarouselPrev>
              <CarouselNext onClick={nextSlide}>›</CarouselNext>
            </CarouselContainer>
          ) : (
            <p>Nenhum produto disponível.</p>
          )}
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default ActiveUser;
