import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Usando cor do tema */
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Usando cor do tema */
`;

export const StyledButton = styled(Button)`
  background-color: #7367f0; /* Cor roxa fixa */
  color: #fff;
  border: none;

  &:hover {
    background-color: #5e50d6; /* Cor roxa mais escura ao passar o mouse */
  }
`;

export const CepButton = styled(Button)`
  margin-left: 8px;
  background-color: #7367f0; /* Cor roxa fixa */
  color: #fff;
  border: none;

  &:hover {
    background-color: #5e50d6; /* Cor roxa mais escura ao passar o mouse */
  }
`;

export const InfoBox = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['info-background']}; /* Usando cor do tema */
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme[theme.mainContent]['info-text']}; /* Usando cor do tema */
`;

export const AlertBox = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['alert-background']}; /* Usando cor do tema */
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme[theme.mainContent]['alert-text']}; /* Usando cor do tema */
`;
