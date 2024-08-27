/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Spin, Button, Modal, Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';  // Ícone do Ant Design
import { TopToolBox } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';
import { orderFilter } from '../../redux/orders/actionCreator';

function Solicitacoes() {
  const PageRoutes = [
    {
      path: '/admin/compras',
      breadcrumbName: 'Compras',
    },
    {
      path: '',
      breadcrumbName: 'Solicitações',
    },
  ];

  const dispatch = useDispatch();
  const { searchData, orders } = useSelector((state) => ({
    searchData: state.headerSearchData,
    orders: state.orders.data,
  }));

  const [state, setState] = useState({
    notData: searchData,
    item: orders,
    selectedRowKeys: [],
    loading: true,
    selectedOrder: null,
  });

  const { notData, item, selectedRowKeys, loading, selectedOrder } = state;
  const filterKey = ['Enviados', 'Aguardando Envio', 'Cancelado'];

  useEffect(() => {
    if (orders) {
      // Simulação de nomes fictícios
      const mockOrders = orders.map((order, index) => ({
        ...order,
        customer: `Cliente ${String.fromCharCode(65 + index)}`, // Cliente A, Cliente B, etc.
        supplier: `Fornecedor ${String.fromCharCode(65 + index)}`, // Fornecedor A, Fornecedor B, etc.
      }));
      setState({
        item: mockOrders,
        selectedRowKeys,
        loading: false,
      });
    }
  }, [orders, selectedRowKeys]);

  const handleSearch = (searchText) => {
    const data = searchData.filter((value) => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const handleChangeForFilter = (e) => {
    dispatch(orderFilter('status', e.target.value));
  };

  const handleViewDetails = (order) => {
    setState({ ...state, selectedOrder: order });
  };

  const handleCloseModal = () => {
    setState({ ...state, selectedOrder: null });
  };

  const dataSource = [];
  if (item.length) {
    item.map((value, key) => {
      const { status, orderId, customer, supplier, amount, date, paymentStatus } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="order-id">{orderId}</span>,
        customer: <span className="customer-name">{customer}</span>,
        supplier: <span className="supplier-name">{supplier}</span>,
        status: (
          <Tag color={status === 'Shipped' ? 'green' : status === 'Awaiting Shipment' ? 'orange' : 'red'}>
            {status}
          </Tag>
        ),
        paymentStatus: (
          <Tag color={paymentStatus === 'Paid' ? 'green' : 'red'}>
            {paymentStatus}
          </Tag>
        ),
        amount: <span className="ordered-amount">{amount}</span>,
        date: <span className="ordered-date">{date}</span>,
        action: (
          <Button
            className="btn-icon"
            type="primary"
            onClick={() => handleViewDetails(value)}
            shape="round"
            icon={<EyeOutlined />}
            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}
          >
            Ver
          </Button>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'ID da Solicitação',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Fornecedor',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Status de Pagamento',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
    },
    {
      title: 'Valor Total',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Ações',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const rowSelection = {
    onChange: (selectRowKeys) => {
      setState({ ...state, selectedRowKeys: selectRowKeys });
    },
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Solicitações" routes={PageRoutes} />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col xs={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={6} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notData} width="100%" patterns />
                    </div>
                  </Col>
                  <Col xxl={14} lg={16} xs={24}>
                    <div className="table-toolbox-menu">
                      <span className="toolbox-menu-title"> Status:</span>
                      <Radio.Group onChange={handleChangeForFilter} defaultValue="">
                        <Radio.Button value="">Todos</Radio.Button>
                        {item.length &&
                          [...new Set(filterKey)].map((value) => (
                            <Radio.Button key={value} value={value}>
                              {value}
                            </Radio.Button>
                          ))}
                      </Radio.Group>
                    </div>
                  </Col>
                </Row>
              </TopToolBox>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col md={24}>
              {loading ? (
                <Spin size="large" />
              ) : (
                <TableWrapper className="table-order table-responsive">
                  <Table
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ pageSize: 7, showSizeChanger: true, total: orders.length }}
                  />
                </TableWrapper>
              )}
            </Col>
          </Row>
        </Cards>
      </Main>

      {/* Modal para visualizar detalhes da solicitação */}
      {selectedOrder && (
        <Modal
          title={`Detalhes da Solicitação ${selectedOrder.orderId}`}
          visible={!!selectedOrder}
          onCancel={handleCloseModal}
          footer={null}
        >
          <p><strong>Cliente:</strong> {selectedOrder.customer}</p>
          <p><strong>Fornecedor:</strong> {selectedOrder.supplier}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <p><strong>Status de Pagamento:</strong> {selectedOrder.paymentStatus}</p>
          <p><strong>Data:</strong> {selectedOrder.date}</p>
          <p><strong>Valor Total:</strong> {selectedOrder.amount}</p>
          {/* Adicione mais informações detalhadas se necessário */}
        </Modal>
      )}
    </>
  );
}

export default Solicitacoes;
