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

  function handleEncurtarLink() {
    const accessToken = Cookies.get('access_token');
  
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
  
    // Headers e configurações da requisição
    const requestOptions = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json', // Certificando-se de que a requisição esteja no formato correto
      },
    };
  
    axios.post('http://192.168.15.47:8080/api/encurtador/shorten', {
      originalURL: link,
    }, requestOptions)
    .then(response => {console.log(response)
      // Atualiza a lista de links com o novo link encurtado
      setLinks(prevLinks => [...prevLinks, response.data]);
      setLink(''); // Reseta o campo de link
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
  }
  

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
                    <td>{item.originalURL}</td>
                    <td>
                    <a href={item.shortURL} target="_blank" rel="noopener noreferrer">
                    {item.shortURL}
                    </a>
                    </td>
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
