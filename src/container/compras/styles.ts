/* eslint-disable */
import styled from 'styled-components';

// Definindo os estilos existentes, ajustados para usar o tema
export const Main = styled.main`
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  input[type='text'] {
    flex: 1;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
    border-radius: 4px;
    font-size: 14px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }

  button {
    padding: 10px 20px;
    background-color: #6c63ff; /* Cor roxa fixa */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #5a53cc; /* Cor roxa mais escura ao passar o mouse */
    }
  }
`;

export const FilterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: bold;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }

    input[type='date'],
    select {
      padding: 10px;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
      border-radius: 4px;
      font-size: 14px;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      width: 100%;
    }
  }

  .filter-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;

      &.primary {
        background-color: #6c63ff; /* Cor roxa fixa */
        color: #fff;

        &:hover {
          background-color: #5a53cc; /* Cor roxa mais escura ao passar o mouse */
        }
      }

      &.clear {
        background-color: ${({ theme }) => theme[theme.mainContent]['secondary-color']};
        color: #fff;

        &:hover {
          background-color: ${({ theme }) => theme[theme.mainContent]['secondary-hover-color']};
        }
      }
    }
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #6c63ff; /* Cor roxa fixa */
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5a53cc; /* Cor roxa mais escura ao passar o mouse */
    }

    &.primary {
      background-color: #6c63ff; /* Cor roxa fixa */
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      background-color: ${({ theme }) => theme[theme.mainContent]['table-header-background']};
    }

    th {
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
      font-weight: bold;
      text-align: left;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }

    th:first-child {
      width: 40px;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};

      &:hover {
        background-color: ${({ theme }) => theme[theme.mainContent]['hover-background']};
      }
    }

    td {
      padding: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }

    td:first-child {
      width: 40px;
    }
  }
`;

export const StatusButton = styled.span<{ status: string }>`
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${({ status }) => {
    if (status.toLowerCase() === 'pago') {
      return '#4CAF50'; // Verde fixo para "Pago"
    } else if (status.toLowerCase() === 'não pago' || status.toLowerCase() === 'nao pago') {
      return '#F44336'; // Vermelho fixo para "Não Pago"
    } else {
      return '#FFEB3B'; // Amarelo fixo para outros status
    }
  }};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  
`;

export const ModalContent = styled.div`
  padding: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const Icon = styled.span<{ canal: string }>`
  width: 24px;
  height: 24px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ canal }) =>
    canal === 'Magalu'
      ? "url('/static/icons/magalu.png')"
      : canal === 'Shopee'
      ? "url('/static/icons/shopee.png')"
      : canal === 'Shein'
      ? "url('/static/icons/shein.png')"
      : canal === 'Meli'
      ? "url('/static/icons/meli.png')"
      : canal === 'Shopify'
      ? "url('/static/icons/shopify.png')"
      : "url('/static/icons/default.png')"};
`;

export const ItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme[theme.mainContent]['table-header-background']};
    font-weight: bold;
  }
`;
