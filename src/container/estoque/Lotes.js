/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Row, Col } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import { Main, BorderLessHeading } from '../styled';
import { tableReadData } from '../../redux/data-filter/actionCreator';

function Lotes() {
  const dispatch = useDispatch();

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Estoque',
    },
    {
      path: 'first',
      breadcrumbName: 'Lotes',
    },
  ];

  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData());
    }
  }, [dispatch]);

  const { TableData } = useSelector((states) => {
    return {
      TableData: states.dataTable.tableData,
    };
  });

  const tableDataScource = [];

  if (TableData.length > 0) {
    TableData.map((item) => {
      const { id, name, country, company, position, status, date } = item;
      return tableDataScource.push({
        id: `#${id}`,
        user: <span className="ninjadash-username">{name}</span>,
        country: <span>{country}</span>,
        company: <span>{company}</span>,
        position,
        date,
        status: <span className={`ninjadash-status ninjadash-status-${status}`}>{status}</span>,
        action: (
          <div className="table-actions">
            <Link className="view" to="#">
              <UilEye />
            </Link>
            <Link className="edit" to="#">
              <UilEdit />
            </Link>
            <Link className="delete" to="#">
              <UilTrash />
            </Link>
          </div>
        ),
      });
    });
  }

  const dataTableColumn = [
    {
      title: 'PartNumber',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Fisica',
      dataIndex: 'physics',
      key: 'physics',
    },
    {
      title: 'Reservada',
      dataIndex: 'reserved',
      key: 'reserved',
    },
    {
      title: 'Disponível',
      dataIndex: 'disponivel',
      key: 'disponivel',
    },
    {
      title: 'Rotatividade',
      dataIndex: 'rotatividade',
      key: 'rotatividade',
    },
    {
      title: 'Unidade',
      dataIndex: 'unidade',
      key: 'unidade',
    },
    {
      title: 'Custo Médio',
      dataIndex: 'custoMedio',
      key: 'custoMedio',
    },
    {
      title: 'Custo Total',
      dataIndex: 'custoTotal',
      key: 'custoTotal',
    },
  ];

  const dataTableColumn2 = [
    {
      title: 'Lotes',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Armazém',
      dataIndex: 'armazem',
      key: 'armazem',
    },
    {
      title: 'Validade',
      dataIndex: 'validade',
      key: 'validade',
    },
    {
      title: 'Locação',
      dataIndex: 'locacao',
      key: 'locacao',
    },
    {
      title: 'Aval ou Certificado',
      dataIndex: 'avalCertificado',
      key: 'avalCertificado',
    },
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Fornecedor',
      dataIndex: 'fornecedor',
      key: 'fornecedor',
    },
    {
      title: 'Custo',
      dataIndex: 'custo',
      key: 'custo',
    },
    {
      title: 'Qtd.Lote',
      dataIndex: 'qtdLote',
      key: 'qtdLote',
    },
    {
      title: 'Qtd.Reservado',
      dataIndex: 'qtdReservado',
      key: 'qtdReservado',
    },
    {
      title: 'Qtd.Disponivel',
      dataIndex: 'qtdDisponivel',
      key: 'qtdDisponivel',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Estoque" routes={PageRoutes} />
      <Main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, overflow: 'auto', maxHeight: 500 }}>
            <BorderLessHeading>
              <Cards title="Informação sobre Produtos">
                <DataTable
                  filterOption
                  filterOnchange
                  tableData={tableDataScource}
                  columns={dataTableColumn}
                  rowSelection={false}
                />
              </Cards>
            </BorderLessHeading>
          </div>
          <div style={{ flex: 1, overflow: 'auto', marginTop: 20, maxHeight: 500 }}>
            <BorderLessHeading>
              <Cards title="Informações sobre Lote e Fabricação">
                <DataTable
                  filterOption
                  filterOnchange
                  tableData={tableDataScource}
                  columns={dataTableColumn2}
                  rowSelection={false}
                />
              </Cards>
            </BorderLessHeading>
          </div>
        </div>
      </Main>
    </>
  );
}

export default Lotes;
