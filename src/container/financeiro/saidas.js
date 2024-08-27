/*eslint-disable*/
import React, { useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Layout, Table, Button, Upload, Space, Checkbox } from 'antd';
import { UploadOutlined, FilePdfOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

const { Header, Content } = Layout;

const initialData = [
  {
    key: '1',
    idPedido: '1001',
    nomeComprador: 'João Silva',
    nomeProduto: 'Tenis Adidas',
    quantidade: '2',
    valorUnitario: '50.00',
    valorTotal: '100.00',
    vendedor: 'Você',
    liberadoExpedicao: false,
  },
  {
    key: '2',
    idPedido: '1002',
    nomeComprador: 'Maria Santos',
    nomeProduto: 'Tenis Nike',
    quantidade: '1',
    valorUnitario: '75.00',
    valorTotal: '75.00',
    vendedor: 'Revendedor',
    liberadoExpedicao: false,
  },
  {
    key: '3',
    idPedido: '1003',
    nomeComprador: 'Carlos Pereira',
    nomeProduto: 'Tenis Puma',
    quantidade: '3',
    valorUnitario: '75.00',
    valorTotal: '225.00',
    vendedor: 'Você',
    liberadoExpedicao: false,
  },
  // Adicione mais dados fictícios conforme necessário
];

const Saidas = () => {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Financeiro',
    },
    {
      path: '',
      breadcrumbName: 'Saídas',
    },
  ];

  const [data, setData] = useState(initialData);

  const handleExcelUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      const formattedData = json.map((item, index) => ({
        key: index.toString(),
        idPedido: item['ID do Pedido'],
        nomeComprador: item['Nome do Comprador'],
        nomeProduto: item['Nome do Produto'],
        quantidade: item['Quantidade'],
        valorUnitario: item['Valor Unitário'],
        valorTotal: item['Valor Total'],
        vendedor: item['Vendedor'],
        liberadoExpedicao: false,
      }));
      setData(formattedData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handlePdfUpload = ({ file }) => {
    // Aqui você pode adicionar o código para lidar com o upload de PDFs
    console.log("Arquivo PDF carregado:", file);
  };

  const handleExpedicaoChange = (key, checked) => {
    setData(prevData =>
      prevData.map(item => (item.key === key ? { ...item, liberadoExpedicao: checked } : item))
    );
  };

  const columns = [
    {
      title: 'ID do Pedido',
      dataIndex: 'idPedido',
      key: 'idPedido',
    },
    {
      title: 'Nome do Comprador',
      dataIndex: 'nomeComprador',
      key: 'nomeComprador',
    },
    {
      title: 'Nome do Produto',
      dataIndex: 'nomeProduto',
      key: 'nomeProduto',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
      key: 'quantidade',
    },
    {
      title: 'Valor Unitário',
      dataIndex: 'valorUnitario',
      key: 'valorUnitario',
    },
    {
      title: 'Valor Total',
      dataIndex: 'valorTotal',
      key: 'valorTotal',
    },
    {
      title: 'Vendedor',
      dataIndex: 'vendedor',
      key: 'vendedor',
    },
    {
      title: 'Liberado para Expedição',
      key: 'liberadoExpedicao',
      render: (text, record) => (
        <Checkbox
          checked={record.liberadoExpedicao}
          onChange={(e) => handleExpedicaoChange(record.key, e.target.checked)}
        />
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader className="ninjadash-page-header-main" title="Saídas" routes={PageRoutes} />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Space style={{ marginBottom: 16 }}>
              <Upload beforeUpload={() => false} onChange={handleExcelUpload}>
                <Button icon={<UploadOutlined />}>Importar Excel</Button>
              </Upload>
              <Upload beforeUpload={() => false} onChange={handlePdfUpload}>
                <Button icon={<FilePdfOutlined />}>Importar PDF</Button>
              </Upload>
            </Space>
            <Table columns={columns} dataSource={data} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Saidas;
