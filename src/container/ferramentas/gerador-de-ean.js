/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, EanBox, Button } from './styles/stylesEan.ts';

function Ean() {
  const [generatedEan, setGeneratedEan] = useState('');

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Gerador de Ean',
    },
  ];

  useEffect(() => {
    generateRandomEan();
  }, []);

  const generateRandomEan = () => {
    let baseEan = '';
    for (let i = 0; i < 12; i++) {
      baseEan += Math.floor(Math.random() * 10).toString();
    }
    const eanWithCheckDigit = generateEanWithCheckDigit(baseEan);
    setGeneratedEan(eanWithCheckDigit);
  };

  const generateEanWithCheckDigit = (base) => {
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      const digit = parseInt(base.charAt(i), 10);
      sum += i % 2 === 0 ? digit : digit * 3;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return base + checkDigit;
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Gerador de Ean" routes={PageRoutes} />
      <Main>
        <EanBox>
          <p>EAN-13 Gerado: <strong>{generatedEan}</strong></p>
          <Button onClick={generateRandomEan}>Gerar Novo EAN</Button>
        </EanBox>
      </Main>
    </>
  );
}

export default Ean;
