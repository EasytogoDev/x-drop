/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

const Container = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  padding: 20px;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']}
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const FilterItem = styled.div`
  flex: 1 1 220px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  border-radius: 4px;
  font-size: 16px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

const Th = styled.th`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
`;

const Tr = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  cursor: pointer;
`;

const NFDetailWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => props.color || '#007bff'};
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => props.hoverColor || '#0056b3'};
  }
`;

const NFTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const NFDetails = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #666;
`;

const NFList = ({ onSelectNF }) => {
  const [nfs, setNFs] = useState([]);

  useEffect(() => {
    // Mocking fetch of NF-E data
    setNFs([
      {
        id: 1,
        number: '001',
        date: '2024-01-01',
        recipient: 'STEVE JOBS',
        total: '85,00',
        status: 'AUTORIZADO',
        details: 'Detalhes da NF-E 001',
      },
      {
        id: 2,
        number: '002',
        date: '2024-02-01',
        recipient: 'CONSUMIDOR',
        total: '188,25',
        status: 'AUTORIZADO',
        details: 'Detalhes da NF-E 002',
      },
      {
        id: 3,
        number: '003',
        date: '2024-03-01',
        recipient: 'CONSUMIDOR',
        total: '168,25',
        status: 'AUTORIZADO',
        details: 'Detalhes da NF-E 003',
      },
    ]);
  }, []);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nota Fiscal</Th>
            <Th>Série</Th>
            <Th>Data Emissão</Th>
            <Th>Destinatário</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th>Funcionário</Th>
          </tr>
        </thead>
        <tbody>
          {nfs.map((nf) => (
            <Tr key={nf.id} onClick={() => onSelectNF(nf)}>
              <Td>{nf.id}</Td>
              <Td>{nf.number}</Td>
              <Td>1</Td>
              <Td>{nf.date}</Td>
              <Td>{nf.recipient}</Td>
              <Td>{nf.total}</Td>
              <Td>{nf.status}</Td>
              <Td>ADMINIS</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

const states = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

const GerenciadorNfe = () => {
  const [selectedNF, setSelectedNF] = useState(null);

  const PageRoutes = [
    {
      path: '/admin/fiscal',
      breadcrumbName: 'Fiscal',
    },
    {
      path: '',
      breadcrumbName: 'Gerenciador de Nfe',
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Gerenciador de NFe" routes={PageRoutes} />
      <Main>
        <Container>
          <FiltersContainer>
            <FilterItem>
              <Label>Período Inicial</Label>
              <Input type="date" />
            </FilterItem>
            <FilterItem>
              <Label>Período Final</Label>
              <Input type="date" />
            </FilterItem>
            <FilterItem>
              <Label>Destinatário</Label>
              <Input type="text" placeholder="Digite o destinatário" />
            </FilterItem>
            <FilterItem>
              <Label>Vendedor</Label>
              <Select>
                <option value="all">Todos</option>
                <option value="vendedor1">Vendedor 1</option>
              </Select>
            </FilterItem>
            <FilterItem>
              <Label>Status</Label>
              <Select>
                <option value="emitidas">NFes Emitidas</option>
              </Select>
            </FilterItem>
            <FilterItem>
              <Label>Nota Fiscal</Label>
              <Input type="text" placeholder="Número da Nota Fiscal" />
            </FilterItem>
            <FilterItem>
              <Label>UF</Label>
              <Select>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </Select>
            </FilterItem>
          </FiltersContainer>
          {!selectedNF ? (
            <NFList onSelectNF={setSelectedNF} />
          ) : (
            <NFDetailWrapper>
              <NFTitle>Nota Fiscal: {selectedNF.number}</NFTitle>
              <NFDetails>Data: {selectedNF.date}</NFDetails>
              <NFDetails>Destinatário: {selectedNF.recipient}</NFDetails>
              <NFDetails>Total: {selectedNF.total}</NFDetails>
              <NFDetails>Status: {selectedNF.status}</NFDetails>
              <NFDetails>{selectedNF.details}</NFDetails>
              <ButtonContainer>
                <Button onClick={handlePrint}>Imprimir Nota Fiscal</Button>
                <Button color="#ff0000" hoverColor="#cc0000" onClick={() => setSelectedNF(null)}>
                  Fechar
                </Button>
              </ButtonContainer>
            </NFDetailWrapper>
          )}
        </Container>
      </Main>
    </>
  );
};

export default GerenciadorNfe;
