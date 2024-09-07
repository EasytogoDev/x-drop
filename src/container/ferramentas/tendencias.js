/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function PesquisarTendencias() {
  const [tendencias, setTendencias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [paises, setPaises] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState('MLB'); // Brasil (MLB) selecionado por padrão
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); // Estado para a categoria selecionada
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [categoria2, setCategoria2] = useState([]);
  const [categoria3, setCategoria3] = useState([]);
  const [categoria4, setCategoria4] = useState([]);

  const [categoriaSelecionada2, setCategoriaSelecionada2] = useState(''); // Categoria 2 selecionada
  const [categoriaSelecionada3, setCategoriaSelecionada3] = useState(''); // Categoria 3 selecionada
  const [categoriaSelecionada4, setCategoriaSelecionada4] = useState(''); // Categoria 1 selecionada

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pesquisar Tendencias',
    },
  ];

  // Carrega os países e categorias iniciais para o país Brasil
  useEffect(() => {
    carregaPaises();
    carregaCategorias(paisSelecionado, 0, '');
    carregaTendencias(paisSelecionado, categoriaSelecionada);
  }, [paisSelecionado, categoriaSelecionada]); // Recarrega quando o país ou categoria são alterados

  // Carrega as tendências e categorias quando uma nova categoria é selecionada
  useEffect(() => {
    if (categorias.length > 0 && !categoriaSelecionada) {
      // Só define a primeira categoria se nenhuma categoria tiver sido selecionada
      setCategoriaSelecionada(categorias[0].meli);
    }
  }, [categorias, categoriaSelecionada]);

  useEffect(() => {
    if (paisSelecionado) {
      carregaCategorias(paisSelecionado, 0, ''); // Carrega as categorias do novo país
      carregaTendencias(paisSelecionado, ''); // Carrega as tendências para o novo país
    }
  }, [paisSelecionado]);


  // Função para carregar as tendências de um determinado país e categoria
  function carregaTendencias(pais, categoria) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/trends?codigo=${pais}&categoria=${categoria}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const trends = result.map(product => ({
          name: product.keyword,
          meli: product.url
        }));

        setLoading(false);
        setTendencias(trends);
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao buscar as tendências. Tente novamente mais tarde.');
        setLoading(false);
      });
  }

  // Função para carregar categorias com base no país, tipo e valor anterior
  function carregaCategorias(pais, tipo, valor) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/categories?codigo=${pais}&categoria=${valor}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const categories = result.map(product => ({
          name: product.name,
          meli: product.id,
          ranking: product?.total_items_in_this_category || 0
        }));

        setLoading(false);
        if (tipo === 2) {
          setCategoria2(categories);
        } else if (tipo === 3) {
          setCategoria3(categories); // Atualiza o terceiro nível
        } else if (tipo === 4) {
          setCategoria4(categories);
        } else {
          setCategorias(categories); // Primeiro nível
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao buscar as categorias. Tente novamente mais tarde.');
        setLoading(false);
      });
  }

  // Carrega a lista de países ao iniciar
  function carregaPaises() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/sites`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const allowedCountries = ["Argentina", "Brasil", "Perú", "Chile", "Mexico", "Uruguay"];

        const country = result
          .filter(product => allowedCountries.includes(product.pais))
          .map(product => ({
            name: product.pais,
            codigo: product.codigo, // Certifique-se de que o 'codigo' correto está vindo do backend
            image: process.env.REACT_APP_API_ENDPOINT + product.imagem
          }));

        setLoading(false);
        setPaises(country);
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao buscar os paises. Tente novamente mais tarde.');
        setLoading(false);
      });
  }

  // Função para resetar estados e carregar categorias quando o país for alterado
  // Função para resetar estados e carregar categorias quando o país for alterado
  function handleCountryChange(codigoPais) {
    setPaisSelecionado(codigoPais);
    setCategoriaSelecionada(''); // Reseta a categoria selecionada
    setCategoriaSelecionada2('');
    setCategoriaSelecionada3('');
    setCategoriaSelecionada4('');
    setTendencias([]); // Reseta as tendências
  }

  // Função para carregar o segundo nível de categorias
  function nivelCategoria1(valor) {
    setCategoriaSelecionada(valor);
    setCategoriaSelecionada2('');
    setCategoriaSelecionada3('');
    setCategoriaSelecionada4('');
    carregaCategorias(paisSelecionado, 2, valor); // Carrega o segundo nível
    carregaTendencias(paisSelecionado, valor);
  }

  // Função para carregar o terceiro nível de categorias
  function nivelCategoria2(valor) {
    setCategoriaSelecionada2(valor);
    setCategoriaSelecionada3('');
    setCategoriaSelecionada4('');
    carregaCategorias(paisSelecionado, 3, valor); // Carrega o terceiro nível
    carregaTendencias(paisSelecionado, valor);
  }

  // Função para carregar o quarto nível de categorias
  function nivelCategoria3(valor) {
    setCategoriaSelecionada3(valor);
    setCategoriaSelecionada4('');
    carregaCategorias(paisSelecionado, 4, valor); // Carrega o quarto nível
    carregaTendencias(paisSelecionado, valor);
  }

  // Função para carregar tendências com base no quarto nível de categoria
  function nivelCategoria4(valor) {
    setCategoriaSelecionada4(valor);
    carregaCategorias(paisSelecionado, 4, valor)
    carregaTendencias(paisSelecionado, valor);
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tendências" routes={PageRoutes} />
      <Main>
        <StyledTitle>Tendência de Venda no {paisSelecionado === 'MLB' ? 'Brasil' : paises.find(p => p.codigo === paisSelecionado)?.name}</StyledTitle>
        <CountrySelector>
          {paises.map((item, index) => (
            <CountryButton
              key={index}
              selected={item.codigo === paisSelecionado}
              onClick={() => handleCountryChange(item.codigo)}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  maxWidth: "120px",
                  height: "auto",
                  borderRadius: "8px",
                  margin: "0 auto"
                }}
              />
              <div style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>
                {item.name}
              </div>
            </CountryButton>
          ))}
        </CountrySelector>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
          <StyledFilterContainer>
            <label>Primeiro Nivel Brasil:</label>
            <StyledSelect
              value={categoriaSelecionada}
              onChange={(e) => nivelCategoria1(e.target.value)}
            >
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria.meli}>
                  {categoria.name}
                </option>
              ))}
            </StyledSelect>
          </StyledFilterContainer>

          <StyledFilterContainer>
            <label>Segundo Nivel em Brasil:</label>
            <StyledSelect
              value={categoriaSelecionada2}
              onChange={(e) => nivelCategoria2(e.target.value)}
            >
              {categoria2.map((categoria, index) => (
                <option key={index} value={categoria.meli}>
                  {categoria.name}
                </option>
              ))}
            </StyledSelect>
          </StyledFilterContainer>

          <StyledFilterContainer>
            <label>Terceiro Nivel em Brasil:</label>
            <StyledSelect
              value={categoriaSelecionada3}
              onChange={(e) => nivelCategoria3(e.target.value)}
            >
              {categoria3.map((categoria, index) => (
                <option key={index} value={categoria.meli}>
                  {categoria.name}
                </option>
              ))}
            </StyledSelect>
          </StyledFilterContainer>

          <StyledFilterContainer>
            <label>Quarto Nivel em Brasil:</label>
            <StyledSelect
              value={categoriaSelecionada4}
              onChange={(e) => nivelCategoria4(e.target.value)}
            >
              {categoria4.map((categoria, index) => (
                <option key={index} value={categoria.meli}>
                  {categoria.name}
                </option>
              ))}
            </StyledSelect>
          </StyledFilterContainer>
        </div>

        {loading ? (
          <StyledLoading>Carregando tendências...</StyledLoading>
        ) : error ? (
          <StyledError>{error}</StyledError>
        ) : (
          <TendenciasList as="ol">
            {tendencias.map((tendencia, index) => (
              <TendenciaItem key={index}>
                <a href={tendencia.meli} target="_blank" rel="noopener noreferrer">
                  {tendencia.name}
                </a>
              </TendenciaItem>
            ))}
          </TendenciasList>
        )}
      </Main>
    </>
  );
}

export default PesquisarTendencias;


// Estilos com styled-components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const CountrySelector = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const CountryButton = styled.button`
  background-color: ${(props) => (props.selected ? '#ffd600' : '#00c9ff')};
  border: none;
  color: white;
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? '#ff9900' : '#007bff')};
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    max-width: 120px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  div {
    font-size: 16px;
    font-weight: 500;
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledSelect = styled.select`
  width: 100%;
  max-width: 260px;
  height: 45px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: white;

  &:hover {
    border-color: #007bff;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const StyledLoading = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const StyledError = styled.p`
  text-align: center;
  font-size: 18px;
  color: red;
`;

const TendenciasList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TendenciaItem = styled.li`
  background-color: #ffffff;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #333;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
