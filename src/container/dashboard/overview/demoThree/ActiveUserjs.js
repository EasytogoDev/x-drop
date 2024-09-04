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
  const [isLoadingProducts, setIsLoadingProducts] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Largura do slide, ajuste conforme necessário

  const carouselRef = useRef(null);
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    startPos = e.pageX;
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.pageX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
  };

  const handleMouseUp = () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    carouselRef.current.style.cursor = 'grab';

    // Logic to snap to the closest slide
    const newIndex = Math.round(-currentTranslate / slideWidth);
    setCurrentIndex(newIndex);
    currentTranslate = -newIndex * slideWidth;
    prevTranslate = currentTranslate;
    carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
  };

  useEffect(() => {
    carregaProdutos();
  }, []);

  useEffect(() => {
    console.log("Products state: ", products); // Verifique se o estado está sendo atualizado
  }, [products]);


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
        console.log("API Result: ", result); // Adicione este log para ver o resultado
        const mappedProducts = result.map(product => ({
          id: product.ID,
          name: product.Nome,
          price: product.PrecoVenda,
          category: product.Categoria,
          image: product.Imagem || '/path/to/default/image.png', // Adicione a URL da imagem
        }));
        setProducts(mappedProducts);
        setIsLoadingProducts(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingProducts(false);
      });
  }

console.log(isLoadingProducts);
  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          title="Lançamentos"
          size="large"
        >
          {products.length > 0 ? (
            <CarouselContainer>
              <CarouselTrack style={{ transform: `translateX(-${currentIndex * 250}px)` }}>
                {products.map((product) => (
                  <ProductContainer key={product.id}>
                    <StyledImage
                      src={product.image || 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
                      alt={product.name}
                    />
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>{product.category}</ProductDescription>
                    <ProductPrice>{product.price}</ProductPrice>
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
