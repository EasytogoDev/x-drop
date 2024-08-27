/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print'; // Icone de impressão
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import { Main, BorderLessHeading } from '../styled';

import { tableReadData } from '../../redux/data-filter/actionCreator';

function Etiquetas() {
  const dispatch = useDispatch();

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Estoque',
    },
    {
      path: 'first',
      breadcrumbName: 'Etiqueta',
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

  const handlePrintLabel = (id) => {
    // Função para gerar a etiqueta usando o ID do pedido
    console.log(`Gerar etiqueta para o pedido com ID: ${id}`);
    // Aqui você pode adicionar a lógica para gerar e imprimir a etiqueta
  };

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
            <button onClick={() => handlePrintLabel(id)} style={{ cursor: 'pointer' }} className="print-label">
              <UilPrint />
            </button>
          </div>
        ),
      });
    });
  }

  const dataTableColumn = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Join Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '120px', // Aumentar a largura para acomodar o novo botão
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Etiquetas" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <BorderLessHeading>
              <Cards title="Pedidos">
                <DataTable
                  filterOption
                  filterOnchange
                  tableData={tableDataScource}
                  columns={dataTableColumn}
                  rowSelection
                />
              </Cards>
            </BorderLessHeading>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Etiquetas;
