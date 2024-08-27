import React, { lazy, useState, useEffect, Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';

function Lista() {
  const [Users, setUsers] = useState([]);
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

  return (
    <>
      <CardToolbox>
        <PageHeader
          className="ninjadash-page-header-main"
          backIcon={false}
          title="Lista de Usuários"
          subTitle={
            <>
              {/* <span className="title-counter">274 Users</span> */}
              <AutoComplete
                // onSearch={handleSearch}
                // dataSource={notData}
                width="100%"
                placeholder="Procurar usuário"
                patterns
              />
            </>
          }
          buttons={[
            <Link to="../pages/overview/info.js" className="btn-add_new">
              <UilPlus /> olha aqui kkkkkkkkkk
            </Link>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={25}>
          {Users.map((user) => {
            const actions = (
              <>
                <Link to={`/admin/usuarios/perfil/${user.codigo}`}>
                  <UilEye />
                  <span>Ver Perfil</span>
                </Link>
                <Link to={`/admin/usuarios/editar/${user.codigo}`}>
                  <UilEdit />
                  <span>Editar</span>
                </Link>
                <Link to={`/admin/usuarios/deletar/${user.codigo}`}>
                  <UilTrashAlt />
                  <span>Deletar Perfil</span>
                </Link>
              </>
            );
            const TeamCard = lazy(() => import('../pages/overview/TeamCard'));
            return (
              <Col key={user.codigo} xxl={6} lg={8} sm={12} xs={24}>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton avatar active />
                    </Cards>
                  }
                >
                  <TeamCard actions={actions} user={user} />
                </Suspense>
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
}

export default Lista;
