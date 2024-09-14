/* eslint-disable */
import styled from 'styled-components';
import { Button, Card } from 'antd';

export const Btn = styled(Button)`
  color: #fff;
  background-color: #6b46c1; /* Cor roxa do botão "Anunciar Produto" */
  border: none;
  font-weight: bold;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #5a3a9d; /* Cor roxa mais escura ao passar o mouse */
  }
`;

export const ViewButton = styled(Button)`
  color: #fff;
  background-color: #fb923c; /* Cor laranja para o botão "Visualizar Produto" */
  border: none;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: #f97316; /* Cor laranja mais escura ao passar o mouse */
  }
`;

export const AddCartButton = styled(Button)`
  color: #6b46c1; /* Cor roxa do texto no botão */
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
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
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
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Ajustável conforme o tema */
`;

export const PriceSpan = styled.span`
  display: block;
  font-size: 18px;
  color: ${({ theme }) => theme[theme.mainContent]['success-color']}; /* Ajustável conforme o tema */
  font-weight: bold;
  margin-top: 8px;
`;

export const CodeSpan = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme[theme.mainContent]['muted-text']}; /* Ajustável conforme o tema */
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme[theme.mainContent]['muted-text']}; /* Ajustável conforme o tema */
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
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']}; /* Ajustável conforme o tema */
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
  color: ${({ theme }) => theme[theme.mainContent]['link-color']}; /* Ajustável conforme o tema */
  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme[theme.mainContent]['primary-hover-color']}; /* Ajustável conforme o tema */
  }
`;
