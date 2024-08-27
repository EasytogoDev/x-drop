/* eslint-disable */
import styled from 'styled-components';

export const AssinaturasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f7f8;
  border-radius: 10px;
`;

export const AssinaturaCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AssinaturaInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AssinaturaNome = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const AssinaturaData = styled.span`
  color: #888;
  font-size: 14px;
`;

export const Status = styled.span<{ active: boolean }>`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: ${(props) => (props.active ? '#28a745' : '#dc3545')};
  background-color: ${(props) => (props.active ? '#d4edda' : '#f8d7da')};
`;
