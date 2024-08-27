/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
// import { Table } from 'antd';
// import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';
// eslint-disable-next-line import/order
import styles from './lastProducts/lastproduct.module.css'

// import tableData from '../../../../demoData/table-data.json';

// const { activeUserData } = tableData;

// const sellerColumns = [
//   {
//     title: 'Nome Usuário',
//     dataIndex: 'username',
//     key: 'username',
//   },
//   {
//     title: 'Empresa',
//     dataIndex: 'company',
//     key: 'company',
//   },
//   {
//     title: 'Produto',
//     dataIndex: 'product',
//     key: 'product',
//   },
//   {
//     title: 'Receita',
//     dataIndex: 'revenue',
//     key: 'revenue',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//   },
// ];

const ActiveUser = React.memo(() => {
  // const [userTab, setUserTab] = useState('today');

  // /* Tab Activation */
  // const handleTabActivation = (value, e) => {
  //   e.preventDefault();
  //   setUserTab(value);
  // };

  // const userTableData = [];

  // activeUserData[userTab].map((value) => {
  //   const { key, img, name, company, product, revenue, status } = value;
  //   return userTableData.push({
  //     key,
  //     username: (
  //       <div className="ninjadash-info-element align-center-v">
  //         <img src={require(`../../../../static/img/sellers/${img}`)} alt="ninjadash Img" />
  //         <span className="ninjadash-info-element__text">{name}</span>
  //       </div>
  //     ),
  //     company,
  //     product,
  //     revenue,
  //     status: <span className={`status ${status.toLowerCase()}`}>{status}</span>,
  //   });
  // });

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Largura do slide, ajuste conforme necessário
  const slides = [
      {
          image: 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18757-zero.png?context=bWFzdGVyfGltYWdlc3w4NzkyNHxpbWFnZS9wbmd8YUdVMEwyZzRaQzg1TnpNeU1UUTVNREU0TmpVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU4xOTZaWEp2TG5CdVp3fDUzYjk2OWZjN2E1Yjg1YmE4OTRlZmY4YTcxY2RmMjgxNjliMGIxNTM1ZjFmM2Y3YWRlMDgyYzVlMjBmMGY1NjU',
          title: 'APPLE IPHONE 15 PRO MAX 256GB',
          description: 'Titanium Preto',
          price: '$999,99'
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_v5YYhLfbsDXEzd675fIUe0C4UOgeUl2QTQ&s',
          title: 'APPLE IPHONE 13 128GB',
          description: 'Azul',
          price: '$799,99'
      },
      {
        image: 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18870-zero.png?context=bWFzdGVyfGltYWdlc3w3NjkzOXxpbWFnZS9wbmd8YURFM0wyZzBNQzh4TURBMU5UWTNOell3TnprMk5pOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRnNE56QmZlbVZ5Ynk1d2JtY3wyNWIwNjA2N2QyMGZlZDgwYTMxOGFlNTg3ZTRjYmZkNzFkZmY2NzVmYjI5ZTMyNjY1OGMzMzJhOWUwY2JhNWIy',
        title: 'SAMSUNG GALAXY S24 ULTRA 5G 512GB',
        description: 'Titanium Preto',
        price: '$999,99'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_v5YYhLfbsDXEzd675fIUe0C4UOgeUl2QTQ&s',
      title: 'APPLE IPHONE 13 128GB',
      description: 'Azul',
      price: '$799,99'
  },
    {
      image: 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18868-zero.png?context=bWFzdGVyfGltYWdlc3w3NzI3OHxpbWFnZS9wbmd8YUdRNUwyZzNZeTh4TURBMU5UZzNNalV4TWpBek1DOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRnNE5qaGZlbVZ5Ynk1d2JtY3wyMmVlMGJhMGM5YmRkMjc4MWRmOWQzNTE0ODkyNDQ4ZTdhOGYyMGRmMTcwNmJkMTU5MTVhZWNlNWQ2N2M2OGRi',
      title: 'SAMSUNG GALAXY S24 ULTRA 5G 512GB',
      description: 'Titanium Violeta',
      price: '$999,99'
  }
      // Adicione mais slides conforme necessário
  ];

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
    
  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          // isbutton={
          //   <div className="ninjadash-card-nav">
          //     <ul>
          //       <li className={userTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
          //         <Link onClick={(event) => handleTabActivation('today', event)} to="#">
          //           Hoje
          //         </Link>
          //       </li>
          //       <li className={userTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
          //         <Link onClick={(event) => handleTabActivation('week', event)} to="#">
          //           Semana
          //         </Link>
          //       </li>
          //       <li className={userTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
          //         <Link onClick={(event) => handleTabActivation('month', event)} to="#">
          //           Mês
          //         </Link>
          //       </li>
          //     </ul>
          //   </div>
          // }
          title="Lançamentos"
          size="large"
        >
          {/* <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="table-responsive">
              <Table columns={sellerColumns} dataSource={userTableData} pagination={false} />
            </div>
          </TableDefaultStyle> */}
           <div className={styles.listProducts}>
            <div className={styles.carouselContainer}>
                <div
                    ref={carouselRef}
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {slides.map((slide, index) => (
                        <div className={styles.product} key={index}>
                            <img className={styles.photoProduct} src={slide.image} alt={slide.title} />
                            <div className={styles.infoProducts}>
                                <h1 className={styles.title}>{slide.title}</h1>
                                <p className={styles.description}>{slide.description}</p>
                                <p className={styles.price}>{slide.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.carouselPrev} onClick={prevSlide}>‹</button>
                <button className={styles.carouselNext} onClick={nextSlide}>›</button>
            </div>
        </div>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default ActiveUser;
