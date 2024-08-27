import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

const FilterSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: left;
  font-size: 14px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  font-size: 14px;
  color: #555;
`;

export default function GerenciadorDeNFe() {
  const [tipoRelatorio, setTipoRelatorio] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [chaveAcesso, setChaveAcesso] = useState('');
  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState('');
  const [aprovacao, setAprovacao] = useState('');
  const [notaAprovada, setNotaAprovada] = useState('');
  const [codnotaEntrada, setCodnotaEntrada] = useState('');
  const [deposito, setDeposito] = useState('');
  const buscarRegistros = () => {
    console.log('Buscando registros...');
  };

  return (
    <Container>
      <Header>Relatório de Compras</Header>

      <FilterSection>
        <FiltersContainer>
          <div>
            <Label>Tipo de Relatório</Label>
            <Select value={tipoRelatorio} onChange={(e) => setTipoRelatorio(e.target.value)}>
              <option value="Todos">Todos</option>
              <option value="NF-e Emitidas">NF-e Emitidas</option>
              <option value="NFC-e Emitidas">NFC-e Emitidas</option>
              <option value="NFS-e Emitidas">NFS-e Emitidas</option>
              <option value="CT-e Emitidos">CT-e Emitidos</option>
              <option value="Faturamento Fiscal">Faturamento Fiscal</option>
              <option value="NF-e Itens">NF-e Itens</option>
              <option value="Mapa Produtos Controlados">Mapa Produtos Controlados</option>
              <option value="NF-e Analítica">NF-e Analítica</option>
            </Select>
          </div>

          {/* Campos para "Notas de Entrada" */}
          {tipoRelatorio === 'Notas de Entrada' && (
            <>
              <div>
                <Label>Empresa</Label>
                <Input
                  type="text"
                  placeholder="Digite a Empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
              </div>
              <div>
                <Label>Fornecedor</Label>
                <Input
                  type="text"
                  placeholder="Digite o Fornecedor"
                  value={fornecedor}
                  onChange={(e) => setFornecedor(e.target.value)}
                />
              </div>
              <div>
                <Label>Chave Acesso</Label>
                <Input
                  type="text"
                  placeholder="Digite a Chave de Acesso"
                  value={chaveAcesso}
                  onChange={(e) => setChaveAcesso(e.target.value)}
                />
              </div>
              <div>
                <Label>Somente Notas Aprovadas?</Label>
                <Select value={notaAprovada} onChange={(e) => setNotaAprovada(e.target.value)}>
                  <option value="Não">Não</option>
                  <option value="Sim">Sim</option>
                </Select>
              </div>
            </>
          )}

          {/* Campos para "Ordens da compra" */}
          {tipoRelatorio === 'Ordens da compra' && (
            <>
              <div>
                <Label>Código</Label>
                <Input
                  type="text"
                  placeholder="Código da compra"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              <div>
                <Label>Empresa</Label>
                <Input
                  type="text"
                  placeholder="Digite a Empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
              </div>
              <div>
                <Label>Depósito</Label>
                <Input
                  type="text"
                  placeholder="Número do depósito"
                  value={deposito}
                  onChange={(e) => setDeposito(e.target.value)}
                />
              </div>
              <div>
                <Label>Fornecedor</Label>
                <Input
                  type="text"
                  placeholder="Digite o Fornecedor"
                  value={fornecedor}
                  onChange={(e) => setFornecedor(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Campos para "Entrada de Produtos" */}
          {tipoRelatorio === 'Entrada de Produtos' && (
            <>
              <div>
                <Label>Empresa</Label>
                <Input
                  type="text"
                  placeholder="Digite a Empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
              </div>
              <div>
                <Label>Depósito</Label>
                <Input
                  type="text"
                  placeholder="Número do depósito"
                  value={deposito}
                  onChange={(e) => setDeposito(e.target.value)}
                />
              </div>
              <div>
                <Label>Fornecedor</Label>
                <Input
                  type="text"
                  placeholder="Digite o Fornecedor"
                  value={fornecedor}
                  onChange={(e) => setFornecedor(e.target.value)}
                />
              </div>
              <div>
                <Label>Produto</Label>
                <Input
                  type="text"
                  placeholder="Nome do produto"
                  value={produto}
                  onChange={(e) => setProduto(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Campos para "CT-e Emitida" */}
          {tipoRelatorio === 'CT-e Emitida' && (
            <>
              <div>
                <Label>Empresa</Label>
                <Input
                  type="text"
                  placeholder="Digite a Empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
              </div>
              <div>
                <Label>Fornecedor</Label>
                <Input
                  type="text"
                  placeholder="Digite o Fornecedor"
                  value={fornecedor}
                  onChange={(e) => setFornecedor(e.target.value)}
                />
              </div>
              <div>
                <Label>Código Nota de Entrada</Label>
                <Input
                  type="text"
                  placeholder="Código da Nota de Entrada"
                  value={codnotaEntrada}
                  onChange={(e) => setCodnotaEntrada(e.target.value)}
                />
              </div>
              <div>
                <Label>Chave Acesso</Label>
                <Input
                  type="text"
                  placeholder="Digite a Chave de Acesso"
                  value={chaveAcesso}
                  onChange={(e) => setChaveAcesso(e.target.value)}
                />
              </div>
              <div>
                <Label>Foi Aprovada?</Label>
                <Select value={aprovacao} onChange={(e) => setAprovacao(e.target.value)}>
                  <option value="Não">Não</option>
                  <option value="Sim">Sim</option>
                </Select>
              </div>
            </>
          )}
        </FiltersContainer>

        <div style={{ marginTop: '20px' }}>
          <Button onClick={buscarRegistros}>Buscar</Button>
        </div>
      </FilterSection>

      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Nota Fiscal</TableHeader>
            <TableHeader>Série</TableHeader>
            <TableHeader>Data Emissão</TableHeader>
            <TableHeader>Destinatário</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Funcionário</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>001</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>STEVE JOBS</TableCell>
            <TableCell>85,00</TableCell>
            <TableCell>AUTORIZADO</TableCell>
            <TableCell>ADMINIS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>002</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2024-02-01</TableCell>
            <TableCell>CONSUMIDOR</TableCell>
            <TableCell>188,25</TableCell>
            <TableCell>AUTORIZADO</TableCell>
            <TableCell>ADMINIS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>003</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2024-03-01</TableCell>
            <TableCell>CONSUMIDOR</TableCell>
            <TableCell>168,25</TableCell>
            <TableCell>AUTORIZADO</TableCell>
            <TableCell>ADMINIS</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
}
