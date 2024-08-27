/* eslint-disable */
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const SelectContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;

    span {
      color: red;
    }
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  textarea {
    height: 100px;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ProductSelectorContainer = styled.div`
  flex: 1;
  margin-right: 10px;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .product-list {
    display: flex;
    flex-direction: column;
  }
`;

export const SelectedProductsContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  p {
    margin: 0;
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 100px;
      margin-bottom: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &.ant-btn-dangerous {
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  }
`;

export const CategorySelector = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }
`;
