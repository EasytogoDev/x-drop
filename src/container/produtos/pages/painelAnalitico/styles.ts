/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  background-color: #f5f5f5;
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
  background-color: white;
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
    color: #333;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #777;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const TableWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f5f5f5;
    }
  }
`;
