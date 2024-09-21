/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: ${({ cancel, theme }) => (cancel ? theme[theme.mainContent]['secondary-color'] : theme[theme.mainContent]['primary-color'])};
  color: ${({ theme }) => theme[theme.mainContent]['button-text']}; /* Usando a cor do texto do tema */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ cancel, theme }) => (cancel ? theme[theme.mainContent]['secondary-hover-color'] : theme[theme.mainContent]['primary-hover-color'])};
  }

  &:disabled {
    background-color: ${({ theme }) => theme[theme.mainContent]['disabled-color']};
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
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme[theme.mainContent]['table-header-background']};
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }

  tbody tr {
    &:nth-child(even) {
      background-color: ${({ theme }) => theme[theme.mainContent]['hover-background']};
    }
  }

  thead {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
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
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Usando cor do texto do tema */
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
  font-size: 16px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Cor do texto conforme o tema */
`;
