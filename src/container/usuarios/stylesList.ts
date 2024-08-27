/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 30px;
  
  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 5px;
  flex: 1 1 100px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.inputText};
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 4px;
  flex: 2 1 200px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const FileInput = styled(Input)`
  padding: 8px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const TermsLink = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.buttonBackground};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
