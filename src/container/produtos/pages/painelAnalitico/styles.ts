/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['background-color']}; /* Ajustável conforme o tema */
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const StatsCard = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Ajustável conforme o tema */
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme[theme.mainContent]['light-text']}; /* Ajustável conforme o tema */
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']}; /* Ajustável conforme o tema */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color']}; /* Ajustável conforme o tema */
    }

    th {
      background-color: ${({ theme }) => theme[theme.mainContent]['table-header-background']}; /* Ajustável conforme o tema */
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']}; /* Ajustável conforme o tema */
    }
  }
`;
