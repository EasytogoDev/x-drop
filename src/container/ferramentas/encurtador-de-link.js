/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, FormWrapper, Input, Button, Table, LinksBox } from './styles/stylesLink.ts';
import Cookies from 'js-cookie';

function Encurtador() {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState([]);
  const [isLoadingLinks, setIsLoadingLinks] = useState(true);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Encurtador de links',
    },
  ];

  useEffect(() => {
    carregaLinks();
  }, [])

  function carregaLinks() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/links`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedLinks = result.map(link => ({
          url: link.valorLINK,
          log: link.logLINK,
          isActive: link.ativoLINK,
        }));
        setLinks(mappedLinks);
        setIsLoadingLinks(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingLinks(false);
      });
  }

  const handleEncurtarLink = () => {
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

    axios.post('http://192.168.15.35:8080/api/links', {
      valorLINK: link,
      logLINK: 'Log de criação',
      ativoLINK: true
    })
    .then(response => {
      setLinks([...links, response.data]);
      setLink('');
    })
    .catch(error => {
      console.error('Erro ao encurtar o link:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao encurtar o link!',
        text: 'Ocorreu um erro ao tentar encurtar o link. Por favor, tente novamente.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#6f42c1',
      });
    });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Encurtador de link" routes={PageRoutes} />
      <Main>
        <FormWrapper>
          <p>Insira o link abaixo e <strong>clique no botão para encurtar.</strong></p>
          <Input 
            type="text" 
            placeholder="Insira o link aqui" 
            value={link} 
            onChange={(e) => setLink(e.target.value)} 
          />
          <Button onClick={handleEncurtarLink}>Encurtar Link</Button>
        </FormWrapper>
        <LinksBox>
          {Array.isArray(links) && links.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Link Original</th>
                  <th>Link Encurtado</th>
                </tr>
              </thead>
              <tbody>
                {links.map((item, index) => (
                  <tr key={index}>
                    <td>{item.url}</td>
                    <td>{item.log}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </LinksBox>
      </Main>
    </>
  );
}

export default Encurtador;
