/* eslint-disable */
import React, { useState } from 'react';
import { Table, Input, Row, Col, Button, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaPlus, FaTrash, FaEdit, FaPrint, FaFileAlt, FaFileInvoiceDollar, FaGavel } from 'react-icons/fa';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

const { Search } = Input;

const initialData = [
  {
    key: '1',
    notaFiscal: '171708',
    destinatario: 'SK AUTOMOTIVE DISTRIBUIDORA DE AUTOPECAS LTE',
    data: '30/07/2024',
    totalLiquido: '10.007,87',
    totalIPI: '703,97',
    totalBruto: '10.711,84',
    contribuicao: '97,78',
    markup: '1,13',
    expedicao: '--',
  },
  {
    key: '2',
    notaFiscal: '171709',
    destinatario: 'BJ COMERCIO DE PECAS AUTOMOTIVAS LTDA - EPP',
    data: '30/07/2024',
    totalLiquido: '17.277,64',
    totalIPI: '1.198,27',
    totalBruto: '18.475,91',
    contribuicao: '97,58',
    markup: '1,25',
    expedicao: '--',
  },
  {
    key: '3',
    notaFiscal: '171710',
    destinatario: 'SARONE COMPONENTES LTDA',
    data: '30/07/2024',
    totalLiquido: '200.959,28',
    totalIPI: '12.144,79',
    totalBruto: '213.104,07',
    contribuicao: '98,18',
    markup: '1,09',
    expedicao: '--',
  },
  // Adicione mais linhas fictícias conforme necessário
];

for (let i = 4; i <= 50; i += 1) {
  initialData.push({
    key: `${i}`,
    notaFiscal: `1717${i}`,
    destinatario: `DESTINATARIO ${i}`,
    data: '30/07/2024',
    totalLiquido: (Math.random() * 10000).toFixed(2),
    totalIPI: (Math.random() * 1000).toFixed(2),
    totalBruto: (Math.random() * 11000).toFixed(2),
    contribuicao: (Math.random() * 100).toFixed(2),
    markup: (Math.random() * 2).toFixed(2),
    expedicao: '--',
  });
}

const columns = [
  {
    title: 'Nota Fiscal nº',
    dataIndex: 'notaFiscal',
    key: 'notaFiscal',
    render: (text) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: 'Destinatário',
    dataIndex: 'destinatario',
    key: 'destinatario',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Total Líquido',
    dataIndex: 'totalLiquido',
    key: 'totalLiquido',
  },
  {
    title: 'Total IPI',
    dataIndex: 'totalIPI',
    key: 'totalIPI',
  },
  {
    title: 'Total Bruto',
    dataIndex: 'totalBruto',
    key: 'totalBruto',
  },
  {
    title: 'Contribuição (%)',
    dataIndex: 'contribuicao',
    key: 'contribuicao',
  },
  {
    title: 'Markup',
    dataIndex: 'markup',
    key: 'markup',
  },
  {
    title: 'Expedição',
    dataIndex: 'expedicao',
    key: 'expedicao',
  },
];

const itemColumns = [
  {
    title: 'Código do Item',
    dataIndex: 'codigoItem',
    key: 'codigoItem',
    render: (text) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: 'Descrição do Item',
    dataIndex: 'descricaoItem',
    key: 'descricaoItem',
  },
  {
    title: 'CFOP',
    dataIndex: 'cfop',
    key: 'cfop',
  },
  {
    title: 'ST',
    dataIndex: 'st',
    key: 'st',
  },
  {
    title: 'QTD',
    dataIndex: 'qtd',
    key: 'qtd',
  },
  {
    title: 'Und.',
    dataIndex: 'unidade',
    key: 'unidade',
  },
  {
    title: 'Líquido',
    dataIndex: 'liquido',
    key: 'liquido',
  },
  {
    title: 'IPI (%)',
    dataIndex: 'ipi',
    key: 'ipi',
  },
  {
    title: 'Total Bruto',
    dataIndex: 'totalBruto',
    key: 'totalBruto',
  },
  {
    title: 'Contribuição (%)',
    dataIndex: 'contribuicao',
    key: 'contribuicao',
  },
  {
    title: 'Markup',
    dataIndex: 'markup',
    key: 'markup',
  },
];

const itemData = [
  {
    key: '1',
    codigoItem: 'ETE 1014',
    descricaoItem: 'Circuito Lanterna Traseira Uno 84 a 04 Lado Direito - Proposta: 31',
    cfop: '6101',
    st: '000',
    qtd: 3,
    unidade: 'UNID',
    liquido: '11,93',
    ipi: '9,75',
    totalBruto: '39,29',
    contribuicao: '--',
    markup: '--',
  },
  {
    key: '2',
    codigoItem: 'ETE 1015',
    descricaoItem: 'Circuito Lanterna Traseira Uno Após 2004 Lado Direito - Proposta: 352885',
    cfop: '6101',
    st: '000',
    qtd: 3,
    unidade: 'UNID',
    liquido: '23,77',
    ipi: '9,75',
    totalBruto: '182,61',
    contribuicao: '--',
    markup: '--',
  },
  {
    key: '3',
    codigoItem: 'ETE 5040',
    descricaoItem: 'Chicote Ignição Eletrônica Voyage - Gol - Parati - Saveiro - Proposta: 352885',
    cfop: '6101',
    st: '000',
    qtd: 5,
    unidade: 'UNID',
    liquido: '24,49',
    ipi: '5,00',
    totalBruto: '128,55',
    contribuicao: '--',
    markup: '--',
  },
  // Adicione mais linhas fictícias conforme necessário
];

function NotasEntradas() {
  const [data, setData] = useState(initialData);
  const PageRoutes = [
    {
      path: '/admin/fiscal',
      breadcrumbName: 'Fiscal',
    },
    {
      path: '',
      breadcrumbName: 'Notas de Entradas',
    },
  ];

  const handleSearch = (value) => {
    const filteredData = initialData.filter(
      (item) =>
        item.destinatario.toLowerCase().includes(value.toLowerCase()) ||
        item.notaFiscal.toLowerCase().includes(value.toLowerCase()),
    );
    setData(filteredData);
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Notas de Entradas" routes={PageRoutes} />
      <Main>
        <Row gutter={[16, 16]} align="middle" style={{ marginBottom: '16px' }}>
          <Col span={16}>
            <Search
              placeholder="Pesquisar por..."
              enterButton={<SearchOutlined />}
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Col>
          <Col span={8}>
            <Row gutter={8} justify="start" align="middle">
              <Col>
                <Button type="primary" icon={<FaPlus />} alt="Novo" />
              </Col>
              <Col>
                <Button type="default" icon={<FaEdit />} alt="Editar" />
              </Col>
              <Col>
                <Button type="danger" icon={<FaTrash />} alt="Excluir" />
              </Col>
              <Col>
                <Button type="default" icon={<FaPrint />} alt="Imprimir" />
              </Col>
              <Col>
                <Button type="default" icon={<FaFileAlt />} alt="Autorizar" />
              </Col>
              <Col>
                <Button type="default" icon={<FaFileInvoiceDollar />} alt="Receita" />
              </Col>
              <Col>
                <Button type="default" icon={<FaGavel />} alt="Legislação" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
        <div style={{ overflowY: 'scroll', maxHeight: '400px', marginTop: '16px' }}>
          <Table columns={itemColumns} dataSource={itemData} pagination={false} />
        </div>
      </Main>
    </>
  );
}

export default NotasEntradas;
