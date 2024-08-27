/* eslint-disable */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import QRCode from 'qrcode.react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, FormWrapper, Input, Button, QRCodeBox } from './styles/stylesQRCode.ts'; // Certifique-se de ajustar o caminho para o arquivo de estilos

function Gerador() {
  const [link, setLink] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Gerador de QrCode',
    },
  ];

  const handleGerarQRCode = () => {
    if (!link) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo do link vazio!',
        text: 'Por favor, insira um link válido.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#6f42c1',
      });
      return;
    }

    setQrCode(link);
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Gerador de QrCode" routes={PageRoutes} />
      <Main>
        <FormWrapper>
          <p>Insira o link abaixo e <strong>clique no botão para gerar o QR Code.</strong></p>
          <Input 
            type="text" 
            placeholder="Insira o link aqui" 
            value={link} 
            onChange={(e) => setLink(e.target.value)} 
          />
          <Button onClick={handleGerarQRCode}>Gerar QR Code</Button>
        </FormWrapper>
        {qrCode && (
          <QRCodeBox>
            <QRCode value={qrCode} size={256} />
          </QRCodeBox>
        )}
      </Main>
    </>
  );
}

export default Gerador;