import styled from 'styled-components';

export const Main = styled.div`
  padding: 24px;
  background: #fff;
`;

export const EanBox = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #6f42c1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5937a8;
  }
`;
