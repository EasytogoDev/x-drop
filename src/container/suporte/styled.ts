/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: ${({ cancel }) => (cancel ? '#ff6b6b' : '#6a74f8')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: ${({ cancel }) => (cancel ? '#ff4c4c' : '#575ed8')};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  position: relative;

  th, td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  tbody tr {
    &:nth-child(even) {
      background-color: #fafafa;
    }
  }

  thead {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
`;
