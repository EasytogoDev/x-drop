/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative; // Necessário para posicionar o Switch corretamente
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: calc(50% - 10px);
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 5px;
  &:hover {
    background-color: #218838;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  text-align: center;
  font-size: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  display: block;
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SwitchLabel = styled.span`
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
`;