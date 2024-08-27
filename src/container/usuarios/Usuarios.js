import React, { useState, useEffect, lazy, Suspense } from 'react';
//  import { useSelector } from 'react-redux';
import { Row, Col, Pagination, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilExpandArrowsAlt from '@iconscout/react-unicons/icons/uil-expand-arrows-alt';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { UsercardWrapper, UserCarrdTop } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
//  import { Cards } from '../../components/cards/frame/cards-frame';

// Lazy-loaded components
const User = lazy(() => import('../pages/overview/UserCard'));
const UserCardStyle = lazy(() => import('../pages/overview/UserCardStyle'));
const UserCardList = lazy(() => import('../pages/overview/UserCardList'));
const UserCardGroup = lazy(() => import('../pages/overview/UserCardGroup'));

function Usuarios() {
  const [users, setUsers] = useState([]);
  //  const [loading, setLoading] = useState(true);

  // Simulação do accessToken para exemplo
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  const path = '';

  useEffect(() => {
    // Função para carregar usuários do servidor
    function carregaUsuarios() {
      const accessToken = getCookie('access_token');
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${accessToken}`);
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch('http://192.168.15.35:3001/usuarios?empresa=1', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUsers(result.Usuarios);
          //  setLoading(false);
        })
        .catch((error) => {
          console.error('Erro ao carregar usuários:', error);
          //  setLoading(false);
        });
    }

    carregaUsuarios();
  }, []); // Executa uma vez ao montar o componente

  // Componente memoizado para a visualização em grade
  const GridView = React.memo(() => {
    return users.map((user) => (
      <Col key={user.codigo} xxl={6} xl={8} sm={12} xs={24}>
        <Suspense fallback={<Skeleton avatar active />}>
          <User user={user} />
        </Suspense>
      </Col>
    ));
  });

  // Componente memoizado para a visualização em lista
  const ListView = React.memo(() => {
    return users.map((user) => (
      <Col key={user.codigo} xxl={12} xl={12} sm={24} xs={24}>
        <Suspense fallback={<Skeleton avatar active />}>
          <UserCardList user={user} />
        </Suspense>
      </Col>
    ));
  });

  // Componente memoizado para a visualização em estilo de grade
  const GridStyle = React.memo(() => {
    return users.map((user) => (
      <Col key={user.codigo} xxl={6} xl={8} sm={12} xs={24}>
        <Suspense fallback={<Skeleton avatar active />}>
          <UserCardStyle user={user} />
        </Suspense>
      </Col>
    ));
  });

  // Componente memoizado para a visualização em grupo
  const GridGroup = React.memo(() => {
    return users.map((user) => (
      <Col key={user.codigo} xxl={8} md={12} sm={24} xs={24}>
        <Suspense fallback={<Skeleton avatar active />}>
          <UserCardGroup user={user} />
        </Suspense>
      </Col>
    ));
  });

  return (
    <>
      <CardToolbox>
        <UserCarrdTop>
          <PageHeader
            className="ninjadash-page-header-main"
            ghost
            title="Users Card"
            subTitle={
              <>
                <AutoComplete
                  //  onSearch={handleSearch}
                  //  dataSource={notData}
                  placeholder="Search by Name"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button className="btn-add_new" size="default" type="primary" key="1">
                <Link to="/admin/users/add-user/info">
                  <UilPlus /> Adicionar novo usuário
                </Link>
              </Button>,
              <NavLink className="action-btn" key="2" to={`${path}/grid`}>
                <UilApps />
              </NavLink>,
              <NavLink className="action-btn" key="3" to={`${path}/list`}>
                <UilListUl />
              </NavLink>,
              <NavLink className="action-btn" key="4" to={`${path}/grid-style`}>
                <UilExpandArrowsAlt />
              </NavLink>,
              <NavLink className="action-btn" key="5" to={`${path}/grid-group`}>
                <UilUsersAlt />
              </NavLink>,
            ]}
          />
        </UserCarrdTop>
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            <Routes>
              <Route path="grid" element={<GridView />} />
              <Route path="list" element={<ListView />} />
              <Route path="grid-group" element={<GridGroup />} />
              <Route path="grid-style" element={<GridStyle />} />
            </Routes>

            <Col xs={24}>
              <div className="user-card-pagination">
                <Pagination
                  //  onChange={onChange}
                  showSizeChanger
                  //  onShowSizeChange={onShowSizeChange}
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

export default Usuarios;
