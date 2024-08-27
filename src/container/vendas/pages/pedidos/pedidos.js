/* eslint-disable */
import React from 'react';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main, Container, SearchSection, FilterSection, ActionsSection, Table } from './styles.ts';

function Pedidos() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pedidos',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Pedidos" routes={PageRoutes} />
      <Main>
        <Container>
          <SearchSection>
            <input type="text" placeholder="Buscar por Nome do Cliente, CEP, rastreio, Cidade ou id do pedido" />
            <button>Buscar</button>
            <label>
              <input type="checkbox" /> Com erros na nota
            </label>
          </SearchSection>

          <FilterSection>
            <div>
              <label>Filtrar por data:</label>
              <input type="text" placeholder="dd/mm/aaaa" />
              <input type="text" placeholder="dd/mm/aaaa" />
              <button>Filtrar</button>
            </div>
            <div>
              <label>Status do pedido:</label>
              <select>
                <option>Todos</option>
              </select>
              <button>Filtrar</button>
            </div>
            <div>
              <label>Filtrar Canal:</label>
              <select>
                <option>- Selecione -</option>
              </select>
              <button>Filtrar</button>
            </div>
            <div>
              <label>Filtrar Integração:</label>
              <select>
                <option>- Selecione -</option>
              </select>
              <button>Filtrar</button>
            </div>
          </FilterSection>

          <ActionsSection>
            <button className="primary">+ Novo pedido Manual</button>
            <button>Gerar etiqueta(s)</button>
            <button>Imprimir Etiqueta(s)</button>
            <button>Atualizar Status MKTPLC</button>
          </ActionsSection>

          <Table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>#</th>
                <th>CONTA</th>
                <th>DADOS DO PEDIDO</th>
                <th>COD. RASTREIO</th>
                <th>PRODUTO(S)</th>
                <th>VALOR TOTAL</th>
                <th>NFE ERP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8"></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Main>
    </>
  );
}

export default Pedidos;
