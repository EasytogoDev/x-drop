/* eslint-disable */

import styled from 'styled-components';
import { Row, Col, Spin, Badge, Button, Card, Input, Drawer, Pagination, Modal, message } from 'antd';


export const Btn = styled(Button)`
  color: #fff;
  background-color: #6b46c1; /* Cor roxa do botão "Anunciar Produto" */
  border: none;
  font-weight: bold;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #5a3a9d;
  }
`;

export const ViewButton = styled(Button)`
  color: #fff;
  background-color: #fb923c; /* Cor laranja para o botão "Visualizar Produto" */
  border: none;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #f97316;
  }
`;

export const AddCartButton = styled(Button)`
  color: #6b46c1;
  background-color: transparent;
  border: none;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardProduct = styled(Card)`
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

export const ImageBox = styled.img`
  max-width: 180px;
  margin-bottom: 12px;
  object-fit: cover;
  height: 180px;
  border-radius: 8px; /* Ajuste de bordas arredondadas */
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #111827;
`;

export const PriceSpan = styled.span`
  display: block;
  font-size: 18px;
  color: #10b981;
  font-weight: bold;
  margin-top: 8px;
`;

export const CodeSpan = styled.span`
  display: block;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column; /* Botões empilhados */
  margin-top: 12px;
`;

export const MobileMenuButton = styled(Button)`
  display: none;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Menu = styled.ul`
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

export const MenuItem = styled.li`
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 30px; /* Reduzido o espaçamento entre as linhas */
  width: 100%;
  overflow: hidden;
  font-size: 12px; /* Reduzido para caber melhor na tela */
`;

export const MenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #6d6d6d;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #8231d3;
  }
`;