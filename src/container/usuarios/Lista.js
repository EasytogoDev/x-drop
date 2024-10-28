/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

function UserList() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o valor da busca

    // Função para carregar os dados da API
    function carregaUsuarios() {
        const accessToken = Cookies.get('access_token');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/usuarios`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result && result.length > 0) {
                    setUsers(result);
                } else {
                    console.error("Nenhum usuário encontrado.");
                }
            })
            .catch((error) => console.error("Erro ao carregar usuários: ", error));
    }

    useEffect(() => {
        carregaUsuarios();
    }, []);

    // Função para lidar com a mudança no campo de busca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtra os usuários de acordo com o valor do campo de busca
    const filteredUsers = users.filter((user) => 
        user.nomeUSUARIO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.emailUSUARIO.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PageContainer>
            <Header>
                <Title>Lista De Usuários</Title>
                <SearchInput 
                    type="text" 
                    placeholder="Procurar usuário" 
                    value={searchTerm} 
                    onChange={handleSearchChange}
                />
                <AddUserButton>+ Adicionar Usuário</AddUserButton>
            </Header>
            <ListContainer>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UserCard 
                            key={user.idUSUARIO}
                            nome={user.nomeUSUARIO}
                            sobrenome={user.sobrenomeUSUARIO}
                            email={user.emailUSUARIO}
                            imagem={user.imagemUSUARIO}
                        />
                    ))
                ) : (
                    <p>Nenhum usuário encontrado.</p>
                )}
            </ListContainer>
        </PageContainer>
    );
}

function UserCard({ nome, sobrenome, email, imagem }) {
    return (
        <CardContainer>
            <MoreOptions>•••</MoreOptions>
            {imagem ? (
                <Avatar src={imagem} alt="Avatar do usuário" />
            ) : (
                <AvatarPlaceholder />
            )}
            <UserName>{nome} {sobrenome}</UserName>
            <UserEmail>{email}</UserEmail>
        </CardContainer>
    );
}

// Estilização

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

const AddUserButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const AvatarPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const UserName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #777;
`;

const MoreOptions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #777;
`;

export default UserList;
