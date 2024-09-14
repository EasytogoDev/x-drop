/* eslint-disable */
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import styled from 'styled-components';

// Estilos utilizando Styled Components
const Main = styled.main`
  padding: 20px;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input, select {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  .filter-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #ddd;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  td {
    padding: 10px;
    text-align: left;
  }

  td input[type="checkbox"] {
    cursor: pointer;
  }

  button {
    background-color: #001f3f;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 11px;
    font-weight: bold;
    width: 116px;
    cursor: pointer;

    &:hover {
      background-color: #004080;
    }
  }
`;

const StatusButton = styled.span`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${(props) => (props.status === 'Pago' ? '#28a745' : '#dc3545')};
  background-color: ${(props) => (props.status === 'Pago' ? '#e9f5ec' : '#f8d7da')};
`;

function Pedidos() {
  const [allChecked, setAllChecked] = useState(false);
  const [originalPedidos, setOriginalPedidos] = useState([]);
  const [filteredPedidos, setFilteredPedidos] = useState([]);

  const [filters, setFilters] = useState({
    status: 'Todos',
    dataInicio: '',
    dataFim: '',
    search: '',
  });

  useEffect(() => {
    // Fetch dos pedidos da API
    const fetchPedidos = async () => {
      const accessToken = Cookies.get('access_token');
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/meli/pedidos`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setFilteredPedidos(data || []); // Garante que `filteredPedidos` seja uma array
        setOriginalPedidos(data || []); // Garante que `originalPedidos` seja uma array
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };
    fetchPedidos();
  }, []);

  const handleCheckboxChange = () => {
    setAllChecked(!allChecked);
    setFilteredPedidos((prevPedidos) =>
      prevPedidos.map((pedido) => ({ ...pedido, checked: !allChecked }))
    );
  };

  const handleIndividualCheckboxChange = (id) => {
    setFilteredPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.codigo === id ? { ...pedido, checked: !pedido.checked } : pedido
      )
    );
  };

  const handleFilterChange = () => {
    let pedidosFiltrados = [...originalPedidos];

    if (filters.status && filters.status !== 'Todos') {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.status === filters.status);
    }

    if (filters.dataInicio) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.data).isAfter(dayjs(filters.dataInicio).subtract(1, 'day'))
      );
    }

    if (filters.dataFim) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) =>
        dayjs(pedido.data).isBefore(dayjs(filters.dataFim).add(1, 'day'))
      );
    }

    if (filters.search) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          pedido.cliente.toLowerCase().includes(filters.search.toLowerCase()) ||
          pedido.codigo.toString().includes(filters.search)
      );
    }

    setFilteredPedidos(pedidosFiltrados);
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
    handleFilterChange();
  };

  const handleClearFilters = () => {
    setFilters({
      status: 'Todos',
      dataInicio: '',
      dataFim: '',
      search: '',
    });
    setFilteredPedidos(originalPedidos);
  };

  useEffect(() => {
    handleFilterChange();
  }, [filters.status, filters.dataInicio, filters.dataFim, filters.search]);

  return (
    <Main>
      <Container>
        {/* Barra de pesquisa */}
        <SearchSection>
          <input
            type="text"
            placeholder="Buscar por Nome do Cliente ou ID Do Pedido"
            value={filters.search}
            onChange={handleSearchChange}
          />
          <button type="button" onClick={handleFilterChange}>
            Buscar
          </button>
        </SearchSection>

        {/* Filtros por data e status */}
        <FilterSection>
          <div>
            <label htmlFor="dataInicio">Data Inicial:</label>
            <input
              id="dataInicio"
              type="date"
              value={filters.dataInicio}
              onChange={(e) => setFilters({ ...filters, dataInicio: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="dataFim">Data Final:</label>
            <input
              id="dataFim"
              type="date"
              value={filters.dataFim}
              onChange={(e) => setFilters({ ...filters, dataFim: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="statusPedido">Status do Pedido:</label>
            <select
              id="statusPedido"
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="Todos">Todos</option>
              <option value="Pago">Pago</option>
              <option value="Não Pago">Não Pago</option>
            </select>
          </div>
          <div className="filter-buttons">
            <button type="button" className="primary" onClick={handleFilterChange}>
              Filtrar
            </button>
            <button type="button" className="primary" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          </div>
        </FilterSection>

        {/* Tabela de pedidos */}
        <Table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleCheckboxChange}
                  aria-label="CheckBox"
                />
              </th>
              <th>#PEDIDO</th>
              <th>CLIENTE</th>
              <th>STATUS</th>
              <th>DATA</th>
              <th>AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredPedidos) && filteredPedidos.length > 0 ? (
              filteredPedidos.map((pedido) => (
                <tr
                  key={pedido.codigo}
                  onClick={() => console.log(`Selecionado: ${pedido.codigo}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={pedido.checked || allChecked}
                      onChange={() => handleIndividualCheckboxChange(pedido.codigo)}
                    />
                  </td>
                  <td>{pedido.codigo}</td>
                  <td>{pedido.cliente}</td>
                  <td>
                    <StatusButton status={pedido.status === 0 ? 'Pago' : 'Não Pago'}>
                      {pedido.status === 0 ? 'Pago' : 'Não Pago'}
                    </StatusButton>
                  </td>
                  <td>{dayjs(pedido.datacriacao).format('DD/MM/YYYY')}</td>
                  <td>
                    <button
                      onClick={() => console.log(`Ação para pedido: ${pedido.codigo}`)}
                    >
                      Ação
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  Nenhum pedido encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Main>
  );
}

export default Pedidos;
