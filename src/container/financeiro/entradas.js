/*eslint-disable*/
/*eslint-disable*/
import React, { useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Layout, Table, Button, Upload, Space, Tooltip } from 'antd';
import {
  UploadOutlined,
  FilePdfOutlined,
  DeleteOutlined,
  InboxOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import * as XLSX from 'xlsx';

const { Header, Content } = Layout;

const initialData = [
  {
    key: '1',
    codigo: '001',
    descricao: 'Tenis Adidas',
    quantidade: '1000',
    valorUnitario: '50.00',
    valorTotal: '50000.00',
  },
  {
    key: '2',
    codigo: '002',
    descricao: 'Tenis Nike',
    quantidade: '500',
    valorUnitario: '75.00',
    valorTotal: '37500.00',
  },
  {
    key: '3',
    codigo: '003',
    descricao: 'Tenis Puma',
    quantidade: '500',
    valorUnitario: '75.00',
    valorTotal: '37500.00',
  },
  // Adicione mais dados fictícios conforme necessário
];

const Entradas = () => {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Financeiro',
    },
    {
      path: '',
      breadcrumbName: 'Entradas',
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
        codigo: item['Código'],
        descricao: item['Descrição'],
        quantidade: item['Quantidade'],
        valorUnitario: item['Valor Unitário'],
        valorTotal: item['Valor Total'],
      }));
      setData(formattedData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handlePdfUpload = ({ file }) => {
    // Aqui você pode adicionar o código para lidar com o upload de PDFs
    console.log('Arquivo PDF carregado:', file);
  };

  const handleDelete = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  const handleArchive = (key) => {
    console.log('Arquivar item:', key);
    // Adicione a lógica para arquivar o item
  };

  const handleHide = (key) => {
    console.log('Esconder item:', key);
    // Adicione a lógica para esconder o item
  };

  const columns = [
    {
      title: 'Código',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'descricao',
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
      title: 'Ações',
      key: 'acoes',
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Excluir">
            <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
          </Tooltip>
          <Tooltip title="Arquivar">
            <Button type="link" icon={<InboxOutlined />} onClick={() => handleArchive(record.key)} />
          </Tooltip>
          <Tooltip title="Esconder">
            <Button type="link" icon={<EyeInvisibleOutlined />} onClick={() => handleHide(record.key)} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader className="ninjadash-page-header-main" title="Entradas" routes={PageRoutes} />
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
};

export default Entradas;
