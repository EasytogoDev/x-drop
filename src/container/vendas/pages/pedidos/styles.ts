/* eslint-disable */
import styled from 'styled-components';

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
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']};
    border-radius: 4px;
    font-size: 14px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }

  .ant-picker, .ant-select {
    width: 100%;
  }

  .ant-btn-primary {
    background-color: #7d70e7;
    border: none;
  }

  .ant-btn {
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
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
    display: inline-flex; /* Usar flex para alinhar o conteúdo */
    align-items: center;  /* Centraliza verticalmente o texto */
    justify-content: center; /* Centraliza horizontalmente o texto */
    padding: 12px 24px; /* Ajusta o padding para melhor espaçamento */
    height: 44px; /* Altura consistente para o botão */
    border: none;
    border-radius: 8px; /* Bordas arredondadas */
    cursor: pointer;
    font-size: 16px; /* Tamanho da fonte */
    font-weight: 500; /* Fonte com peso intermediário */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: all 0.3s ease;

    &.primary {
      background-color: #7d70e7;
      color: #fff;

      &:hover {
        background-color: #6755cc;
        transform: translateY(-2px);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
      }
    }

    &.clear {
      background-color: ${({ theme }) => theme[theme.mainContent]['secondary-color']};
      color: #fff;

      &:hover {
        background-color: ${({ theme }) => theme[theme.mainContent]['secondary-hover-color']};
        transform: translateY(-2px);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
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
    background-color: #7d70e7; /* Roxo fixo */
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6755cc; /* Roxo mais escuro ao passar o mouse */
    }

    &.primary {
      background-color: #7d70e7; /* Roxo fixo */
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  thead {
    tr {
      background-color: #f0f0f0; /* Cor de fundo do cabeçalho */
    }

    th {
      padding: 10px;
      border-bottom: 2px solid #ddd;
      font-weight: bold;
      text-align: left;
      color: #333;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #ddd;

      &:hover {
        background-color: #f9f9f9; /* Cor de fundo ao passar o mouse */
      }
    }

    td {
      padding: 10px;
      color: #333;
    }
  }
`;


export const StatusButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${({ status }) =>
    status === 'pending'
      ? '#FFEB3B'  // Amarelo para pendente
      : status === 'pre-invoiced'
      ? '#FFA500'  // Laranja para pré-faturado
      : status === 'paid'
      ? '#4CAF50'  // Verde para pago
      : '#F44336'}; // Vermelho para cancelado
`;


export const Icon = styled.span<{ canal: string }>`
  width: 24px;
  height: 24px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ canal }) =>
    canal === 'Shopee'
      ? "url('/static/icons/shopee.png')"
      : canal === 'Mercado Livre'
      ? "url('/static/icons/meli.png')"
      : canal === 'Shein'
      ? "url('/static/icons/shein.png')"
      : "url('/static/icons/default.png')"}; /* Define as imagens de ícones baseadas no canal */
  margin-right: 8px; /* Espaçamento entre o ícone e o texto */
  vertical-align: middle; /* Alinha o ícone verticalmente ao centro */
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

export const ClearButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: flex-start;
`;

export const FilterButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme[theme.mainContent]['primary-color']};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.clear {
    background-color: ${({ theme }) => theme[theme.mainContent]['secondary-color']};
  }

  &:hover {
    background-color: ${({ theme }) => theme[theme.mainContent]['primary-hover-color']};
  }

  &.clear:hover {
    background-color: ${({ theme }) => theme[theme.mainContent]['secondary-hover-color']};
  }
`;
