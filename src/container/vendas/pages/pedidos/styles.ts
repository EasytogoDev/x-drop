/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 5px;

    input[type="text"] {
      width: 100%;
    }

    button {
      width: 100%;
    }

    label {
      margin-left: 0;
    }
  }

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 100%;
      padding: 10px;
    }
  }

  label {
    display: flex;
    align-items: center;
    margin-left: 10px;

    input[type="checkbox"] {
      margin-right: 5px;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    div {
      flex-direction: column;
      gap: 10px;

      label {
        display: none;
      }

      input[type="text"], select {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    font-size: 14px;
    color: #555;
  }

  input[type="text"], select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #00bfff;
    color: #fff;

    &.primary {
      background-color: #6c63ff;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 10px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f1f1f1;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 480px) {
    th, td {
      padding: 8px;
      font-size: 12px;
    }

    th:nth-child(1), td:nth-child(1) {
      display: none; /* Oculta a coluna de checkbox no mobile */
    }

    thead {
      display: none; /* Oculta o cabeçalho da tabela no mobile para simplificação */
    }

    tbody tr {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
    }

    td {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      border: none;
      border-bottom: 1px solid #ddd;
    }

    td:before {
      content: attr(data-label);
      font-weight: bold;
    }
  }
`;
