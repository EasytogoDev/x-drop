/* eslint-disable prettier/prettier */
import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import { Link } from 'react-router-dom';
import { UsercardWrapper } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const User = lazy(() => import('../pages/overview/UserCard'));
function Users() {
  const { searchData, users } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      users: state.users,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    current: 0,
    pageSize: 0,
    page: 0,
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onChange = (page) => {
    setState({ ...state, page });
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Users Card"
          subTitle={
            <>
              <span className="title-counter">274 Users </span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Nome..."
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" type="primary" key="1">
              <Link to="/admin/pages/add-user/info">
                <UilPlus /> Adicionar Novo Usuário
              </Link>
            </Button>,
          ]}
        />
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            {users.map((user) => {
              const { id } = user;

              return (
                <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton avatar active />
                      </Cards>
                    }
                  >
                    <User user={user} />
                  </Suspense>
                </Col>
              );
            })}
            <Col xs={24}>
              <div className="user-card-pagination">
                <Pagination
                  onChange={onChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  defaultCurrent={6}
                  total={500}
                />
              </div>
            </Col>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
}

export default Users;
