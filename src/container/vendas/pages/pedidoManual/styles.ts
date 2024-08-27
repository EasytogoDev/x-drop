import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const StyledButton = styled(Button)`
  background-color: #7367f0;
  color: #fff;
  border: none;

  &:hover {
    background-color: #5e50d6;
  }
`;

export const CepButton = styled(Button)`
  margin-left: 8px;
  background-color: #7367f0;
  color: #fff;
  border: none;

  &:hover {
    background-color: #5e50d6;
  }
`;

export const InfoBox = styled.div`
  background: #e7f3fe;
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  color: #0d6efd;
`;

export const AlertBox = styled.div`
  background: #ffe9e9;
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  color: #d9534f;
`;
