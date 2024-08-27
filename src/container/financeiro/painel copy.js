/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import Cookies from 'js-cookie';
import { Main } from '../styled';
import { Modal, Button, Input, Form } from 'antd';

function Painel() {
  const [saldo, setSaldo] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);

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
   
  // Função para buscar o saldo total do extrato
  const fetchSaldo = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/extrato/saldo`, {
        headers: {
          Authorization:  `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setSaldo(data.saldoTotal);
    } catch (error) {
      console.error('Erro ao buscar saldo:', error);
    }
  };

  useEffect(() => {
    fetchSaldo();
  }, []);

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
    
  const accessToken = Cookies.get('access_token');
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/pix/recebimento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${accessToken}`,
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
          <h1>{saldo}</h1>
          <Button onClick={showModal}>Adicionar Saldo</Button>
        </div>

        <Modal
          title="Fazer PIX online!"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          {qrCodeData ? (
            <div>
              <img src={`data:image/png;base64,${qrCodeData.encodedImage}`} alt="QR Code" />
              <p>Copia e Cola:</p>
              <textarea rows="3" value={qrCodeData.payload} readOnly />
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
