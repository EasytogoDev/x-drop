/* eslint-disable */

import { Modal, Button, Input, Form, DatePicker, Select, Table, message  } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageHeader } from '../../components/page-headers/page-headers';
import Cookies from 'js-cookie';
import { Main } from '../styled';
import { FaShoppingCart, FaMoneyBillWave, FaDollarSign, FaChartLine, FaCopy } from 'react-icons/fa';

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
  padding: 10px 10px 0px 10px;

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

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

const StatsCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  min-height: 120px;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #888;
  }

  svg {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    flex-basis: 48%;
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;



const StatsCards = styled.div`
  background-color: #fff;
  padding: 10px 5px 5px 5px;
  margin: 20px 0px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  min-height: 100px;
 
`;

function Painel() {
  const [saldo, setSaldo] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selectedRange, setSelectedRange] = useState('3');
  const [customRange, setCustomRange] = useState([null, null]);
  const [pagamentoRetorno, setPagamentoRetorno] = useState([]);
  const [tempoRestante, setTempoRestante] = useState(600); // 600 segundos = 10 minutos
  const [tipoFiltro, setTipoFiltro] = useState(''); // Estado para armazenar o filtro

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
    { title: 'Valor', dataIndex: 'valor', key: 'valor' },
    { title: 'Total Acumulado', dataIndex: 'totalAcumulado', key: 'totalAcumulado' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

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

  const handleDateChange = (dates) => {
    setCustomRange(dates);
  };

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
          expirationDate: new Date(new Date().getTime() + 30 * 60000).toISOString(),
        }),
      });
      const data = await response.json();
      setQrCodeData(data);
      consultaPagamento(data.codigoPAGAMENTO);
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error);
    } finally {
      setLoading(false);
    }
  };


  const consultaPagamento = async (CODIGO) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/payment-status?id=${CODIGO}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setPagamentoRetorno(data.status);
    } catch (error) {
      console.error('Erro ao buscar saldo:', error);
    }
  };

  const getStartDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days); // Subtrai o número de dias da data atual
    return date.toISOString().split('T')[0]; // Formata como 'YYYY-MM-DD'
  };


  const fetchTransacoes = async () => {
    try {
      let startDate;
      let endDate = new Date().toISOString().split('T')[0]; // Data final é a data de hoje
  
      // Se for intervalo personalizado, usamos o intervalo selecionado
      if (selectedRange === 'custom' && customRange[0] && customRange[1]) {
        startDate = customRange[0].format('YYYY-MM-DD');
        endDate = customRange[1].format('YYYY-MM-DD');
      } else {
        // Para intervalos predefinidos (3, 5, 15, 30 dias)
        startDate = getStartDate(parseInt(selectedRange)); // Converte o selectedRange para número de dias
      }
  
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/api/pix/transacoes?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
  
      const filteredTransactions = data
        .filter((item) => {
          if (tipoFiltro === '') return true;
          return item.statusTransacaoEXTRATO.toLowerCase() === tipoFiltro.toLowerCase();
        })
        .map((item) => ({
          key: `${item.codigoPAGAMENTO}`,
          data: new Date(item.dataTransacaoEXTRATO).toLocaleDateString('pt-BR'),
          tipo: item.statusTransacaoEXTRATO,
          desc: item.descricaoTransacaoEXTRATO,
          valor: `R$ ${parseFloat(item.valorTransacaoEXTRATO).toFixed(2)}`,
          totalAcumulado: `R$ ${(parseFloat(saldo) + parseFloat(item.valorTransacaoEXTRATO)).toFixed(2)}`,
          status: item.statusTransacaoEXTRATO === 'Recebido' ? 'Confirmado' : 'Pendente',
        }));
  
      setTransactions(filteredTransactions);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    }
  };



  useEffect(() => {
    if (qrCodeData) {
      const timer = setInterval(() => {
        setTempoRestante((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
    }
    
    fetchSaldo();
    fetchTransacoes();
  }, [qrCodeData, selectedRange, customRange, tipoFiltro]);
 

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setQrCodeData(null);
  };

  const alteraTipoFiltro = (value) => {
    setTipoFiltro(value);
    fetchTransacoes();
  };



  // Função alternativa para copiar
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(qrCodeData.payload).then(() => {
        message.success('Código copiado com sucesso!');
      }).catch(() => {
        message.error('Falha ao copiar o código.');
      });
    } else {
      // Fallback para navegadores que não suportam navigator.clipboard
      const textArea = document.createElement('textarea');
      textArea.value = qrCodeData.payload;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        message.success('Código copiado com sucesso!');
      } catch (err) {
        message.error('Falha ao copiar o código.');
      }
      document.body.removeChild(textArea);
    }
  };

/*   const handleGenerateQRCode = async (values) => {
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
          expirationDate: new Date(new Date().getTime() + 30 * 60000).toISOString(),
        }),
      });
      const data = await response.json();
      setQrCodeData(data);
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error);
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Painel" routes={PageRoutes} />
      <Main>
        {/* Cards */}
        <StatsWrapper>
          <StatsCard>
            <FaShoppingCart color="#ff6347" />
            <div>
              <h3>0</h3>
              <p>Quantidade Pedidos a Pagar</p>
            </div>
          </StatsCard>

          <StatsCard>
            <FaDollarSign color="#5bc0de" />
            <div>
              <h3>R$0.00</h3>
              <p>Total Pedidos a Pagar</p>
            </div>
          </StatsCard>

          <StatsCard>
            <FaMoneyBillWave color="#8a4af3" />
            <div>
              <h3>R$0.00</h3>
              <p>Total Pedidos Pagos</p>
            </div>
          </StatsCard>
         
            <StatsCard  onClick={showModal} style={{cursor:'pointer'}}>
              
                <FaChartLine color="#f0ad4e" />
                <div>
                  <h3>R$ {saldo.toFixed(2)}</h3>
                  <p>Clique para Adicionar Saldo</p>
                </div>
               
            </StatsCard>
        </StatsWrapper>

    

        {/* Filtros */}
        <StatsCards>
        <FiltrosContainer>
          <FiltroItem>
            <span>Período:</span>
            <Select defaultValue="3" style={{ width: 200 }} onChange={(value) => setSelectedRange(value)}>
              <Option value="3">Últimos 3 dias</Option>
              <Option value="5">Últimos 5 dias</Option>
              <Option value="15">Últimos 15 dias</Option>
              <Option value="30">Últimos 30 dias</Option>
              <Option value="custom">Personalizado</Option>
            </Select>
          </FiltroItem>

          {selectedRange === 'custom' && (
            <RangePicker onChange={handleDateChange} />
          )}

          <FiltroItem>
            <span>Tipo:</span>
           <Select
    defaultValue=""
    style={{ width: 150 }}
    onChange={(value) => alteraTipoFiltro(value)} // Atualiza o valor do estado
  >
              <Option value="">- Todos -</Option>
              <Option value="Entrada">Entrada</Option>
              <Option value="Saida">Saida</Option>
            </Select>
          </FiltroItem>

         {/*  <FiltroItem>
            <Input placeholder="Filtrar por Descrição ou Nr do Pedido" style={{ width: 300, height:50, padding:5 }} />
          </FiltroItem>

          <FiltroItem>
            <Button type="primary">Filtrar</Button>
          </FiltroItem> */}
        </FiltrosContainer>
        </StatsCards>

        {/* Tabela */}
        <TableContainer>
          <Table dataSource={transactions} columns={columns} pagination={false} />
        </TableContainer>

        {/* Modal para adicionar PIX */}
        <Modal
      title="Fazer PIX online!"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      {qrCodeData ? (
        <div style={{ textAlign: 'center' }}>
          {/* Logo do PIX */}
          <img
            src="/uploads/pix.svg"
            alt="Logo PIX"
            style={{ width: '100px', marginBottom: '10px' }}
          />

          <h3>Tempo restante: {formatTime(tempoRestante)}</h3>
          <p>Uma vez finalizado este período de tempo, o código será cancelado.</p>

          <div>
            <img
              src={`data:image/png;base64,${qrCodeData.encodedImage}`}
              alt="QR Code"
              style={{ width: '200px', height: '200px' }}
            />
          </div>

          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Escaneie o código com o seu celular.</p>

          {/* Copia e Cola com botão de copiar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Input.TextArea
              style={{ width: '90%', textAlign: 'center' }}
              rows="2"
              value={qrCodeData.payload}
              readOnly
            />
            <Button
              icon={<FaCopy />}
              onClick={handleCopy}
              style={{ marginLeft: '10px' }}
            />
          </div>

          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <p><b>Instruções de Uso</b></p>
            <p>
              <img src="/uploads/iconBank.jpg" alt="Ícone banco" style={{ width: '20px', marginRight: '5px' }} />
              Abra o aplicativo do seu banco.
            </p>
            <p>
              <img src="/uploads/iconSeleciona.jpg" alt="Ícone PIX" style={{ width: '20px', marginRight: '5px' }} />
              Selecione Pix como forma de pagamento.
            </p>
            <p>
              <img src="/uploads/iconScaneia.jpg" alt="Ícone câmera" style={{ width: '20px', marginRight: '5px' }} />
              Escaneie o código com a câmera do seu celular.
            </p>
          </div>
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
