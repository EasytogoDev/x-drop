/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import Cookies from 'js-cookie';
import { Main } from '../styled';
import { Modal, Button, Input, Form, DatePicker, Select, Table } from 'antd';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const { Option } = Select;

const ContaCorrenteContainer = styled.div`
  background-color: #f0f2f5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SaldoInfo = styled.div`
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 5px;
  color: #00838f;
  font-weight: bold;
`;

const FiltrosContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
`;

const FiltroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

function Painel() {
  const [saldo, setSaldo] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [transactions, setTransactions] = useState([]); // Novo estado para armazenar as transações
  const [pagamentoRetorno, setPagamentoRetorno] = useState([]); // Novo estado para armazenar as transações
  
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Financeiro',
    },
    {
      path: '',
      breadcrumbName: 'Painel',
    },
  ];
  const accessToken = Cookies.get('access_token');

  const columns = [
    { title: '#Codigo', dataIndex: 'key', key: 'key' },
    { title: 'Data', dataIndex: 'data', key: 'data' },
    { title: 'Tipo', dataIndex: 'tipo', key: 'tipo' },
    { title: 'Desc', dataIndex: 'desc', key: 'desc' },
    //{ title: 'Img', dataIndex: 'img', key: 'img' },
    { title: 'Valor', dataIndex: 'valor', key: 'valor' },
    { title: 'Total Acumulado', dataIndex: 'totalAcumulado', key: 'totalAcumulado' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  useEffect(() => {
    fetchSaldo();
    fetchTransacoes();
  }, []);

  let intervalId; // Variável para armazenar o ID do intervalo


  // Função para buscar o saldo total do extrato consultaPagamento('1008b120-8375-4315-824c-20f773b7a4de');
  const consultaPagamento = async (CODIGO) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/payment-status?id=${CODIGO}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setPagamentoRetorno(data.status);

      // Após a primeira chamada, iniciar o intervalo para verificações subsequentes
    if (!intervalId) {
      intervalId = setInterval(() => {
        consultaPagamento(CODIGO);
      }, 5000); // 5000 milissegundos = 5 segundos
    }


    } catch (error) {
      console.error('Erro ao buscar saldo:', error);
    }
  };


    // Função para buscar o saldo total do extrato
    const fetchSaldo = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/balance`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setSaldo(data.balance);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      }
    };


   // Função para buscar o saldo total do extrato
   const fetchTransacoes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/transacoes?startDate=2024-08-01&endDate=2024-08-31`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
  
      const transformedData = data.map((item, index) => ({
        key: `${item.codigoPAGAMENTO}`,
        data: new Date(item.dataTransacaoEXTRATO).toLocaleDateString(),
        tipo: 'Venda',
        desc: item.descricaoTransacaoEXTRATO,
        //img: 'imagem.jpg',
        valor: `R$ ${parseFloat(item.valorTransacaoEXTRATO).toFixed(2)}`,
        totalAcumulado: `R$ ${(parseFloat(saldo) + parseFloat(item.valorTransacaoEXTRATO)).toFixed(2)}`,
        status: item.statusTransacaoEXTRATO === 'Recebido' ? 'Confirmado' : 'Pendente',
      }));
  
      setTransactions(transformedData);
     /*  setTransactions((prevTransactions) => {
        const ids = prevTransactions.map((t) => t.key);
        const newTransactions = transformedData.filter((t) => !ids.includes(t.key));
        return [...prevTransactions, ...newTransactions];
      }); */
    } catch (error) {
      console.error('Erro ao buscar saldo:', error);
    }
  }; 

  // Função para abrir o modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Função para fechar o modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setQrCodeData(null);
  };

  // Função para enviar os dados de pagamento e gerar o QR Code
  const handleGenerateQRCode = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/recebimento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          valorPAGAMENTO: values.valor,
          descricaoPAGAMENTO: values.descricao,
          cpfUsuarioPAGAMENTO: values.cpf,
          empresaPAGAMENTO: '1',
          externalReferencePAGAMENTO: `REF-${Date.now()}`,
          expirationDate: new Date(new Date().getTime() + 30 * 60000).toISOString(), // Adiciona 30 minutos
        }),
      });
      const data = await response.json();
      setQrCodeData(data);
      consultaPagamento(data.codigoPAGAMENTO)
      // Atualiza a tabela com a nova transação
  /*     setTransactions((prevTransactions) => [
        ...prevTransactions,
        {
          key: `${prevTransactions.length + 1}`,
          data: new Date().toLocaleDateString(),
          tipo: 'Venda',
          desc: values.descricao,
          img: 'imagem.jpg', // Ajuste para o caminho real da imagem se necessário
          valor: `R$ ${values.valor}`,
          totalAcumulado: `R$ ${parseFloat(saldo) + parseFloat(values.valor)}`, // Calcula o total acumulado
          status: 'Pendente',
        },
      ]); */

      // Atualiza o saldo
      //setSaldo((prevSaldo) => prevSaldo + parseFloat(values.valor));
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Painel" routes={PageRoutes} />
      <Main>
        <div className="saldo-card">
          <h3>VENDAS PENDENTE PAGTO</h3>
          {/* <h1>{saldo}</h1> */}
          <ContaCorrenteContainer>
          <SaldoInfo>
            <p>Saldo : R$ {saldo.toFixed(2)}</p>
          </SaldoInfo>
        </ContaCorrenteContainer>

          <Button style={{ marginBottom: 15}} onClick={showModal}>Adicionar Saldo</Button>
        </div>

      {/*   <ContaCorrenteContainer>
          <SaldoInfo>
            <p>Saldo : R$ {saldo.toFixed(2)}</p>
          </SaldoInfo>
        </ContaCorrenteContainer>
 */}
        <FiltrosContainer>
          <FiltroItem>
            <span>Filtrar Por Período:</span>
            <RangePicker />
          </FiltroItem>

          <FiltroItem>
            <span>Tipo:</span>
            <Select defaultValue="- Todos -" style={{ width: 120 }}>
              <Option value="todos">- Todos -</Option>
              <Option value="venda">Venda</Option>
              <Option value="compra">Compra</Option>
            </Select>
          </FiltroItem>

          <FiltroItem>
            <Button type="primary">Filtrar</Button>
          </FiltroItem>
        </FiltrosContainer>
        

        <FiltrosContainer>
          <FiltroItem>
            <Input placeholder="Filtrar por Descrição ou Nr do Pedido" style={{ width: 300 }} />
            <Button type="primary">Filtrar</Button>
          </FiltroItem>
        </FiltrosContainer>

        <TableContainer>
          <Table dataSource={transactions} columns={columns} pagination={false} />
        </TableContainer>

        <Modal
          title="Fazer PIX online!"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          {qrCodeData ? (

            <div style={{justifyContent:'center'}}>
            <div style={{justifyContent:'center'}}>{pagamentoRetorno==1 ? 'Pagamento Confirmado com sucesso!':''}</div>
              <img src={`data:image/png;base64,${qrCodeData.encodedImage}`} alt="QR Code" />
              <p>Copia e Cola:</p>
              <textarea style={{width:"100%"}} rows="4" value={qrCodeData.payload} readOnly />
            </div>
          ) : (
            <Form onFinish={handleGenerateQRCode}>
              <Form.Item name="descricao" label="Descrição">
                <Input placeholder="Descrição do pagamento" />
              </Form.Item>
              <Form.Item name="cpf" label="CPF">
                <Input placeholder="CPF do usuário" />
              </Form.Item>
              <Form.Item name="valor" label="Valor">
                <Input placeholder="Valor em R$" />
              </Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Gerar QR Code
              </Button>
            </Form>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default Painel;
