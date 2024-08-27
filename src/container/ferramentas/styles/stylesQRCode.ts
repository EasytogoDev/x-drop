import styled from 'styled-components';

export const Main = styled.div`
  padding: 24px;
  background: #fff;
`;

export const FormWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const Button = styled.button`
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

export const QRCodeBox = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;
