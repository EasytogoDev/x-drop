/* eslint-disable */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, Button, Table, FormContainer, Select, FormGroup, Label } from './styled.ts';

function Chamados() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [chamados, setChamados] = useState([]);

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Chamados',
    },
  ];

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setIsFormFilled(false);
  };

  const handleFormChange = (e) => {
    const deposito = document.querySelector('#deposito').value;
    const topico = document.querySelector('#topico').value;

    if (deposito !== 'Selecione um depósito' && topico !== 'Selecione um tópico') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handleSubmit = () => {
    const novoChamado = {
      protocolo: '123456',
      topico: document.querySelector('#topico').value,
      descricao: 'Descrição do problema...',
      status: 'Aberto',
      dataAbertura: new Date().toLocaleDateString(),
      dataAtualizado: new Date().toLocaleDateString(),
    };

    setChamados([...chamados, novoChamado]);
    setIsFormOpen(false);
  };

  const handleEncerrarChamado = (protocolo) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você quer encerrar este chamado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, encerrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Atualiza o status do chamado para "Encerrado"
        setChamados(chamados.map(chamado =>
          chamado.protocolo === protocolo ? { ...chamado, status: 'Encerrado' } : chamado
        ));

        // Exibe a mensagem de sucesso
        toast.success(`Chamado ${protocolo} encerrado com sucesso!`);
      }
    });
  };


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Chamados" routes={PageRoutes} />
      <Main>
        <ToastContainer />
        {!isFormOpen && (
          <>
            <Button onClick={handleOpenForm}>Abrir Chamado</Button>
            <Table>
              <thead>
                <tr>
                  <th>PROTOCOLO</th>
                  <th>TOPICO</th>
                  <th>DESCRICAO</th>
                  <th>STATUS</th>
                  <th>DATA ABERTURA</th>
                  <th>DATA ATUALIZADO</th>
                  <th>AÇÕES</th>
                </tr>
              </thead>
              <tbody>
                {chamados.length === 0 ? (
                  <tr>
                    <td colSpan="7">No data available in table</td>
                  </tr>
                ) : (
                  chamados.map((chamado, index) => (
                    <tr key={index}>
                      <td>{chamado.protocolo}</td>
                      <td>{chamado.topico}</td>
                      <td>{chamado.descricao}</td>
                      <td>{chamado.status}</td>
                      <td>{chamado.dataAbertura}</td>
                      <td>{chamado.dataAtualizado}</td>
                      <td>
                        <Button onClick={() => handleEncerrarChamado(chamado.protocolo)}>
                          Encerrar Chamado
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </>
        )}

        {isFormOpen && (
          <FormContainer>
            <FormGroup>
              <Label>Escolha o Depósito</Label>
              <Select id="deposito" onChange={handleFormChange}>
                <option>Selecione um depósito</option>
                <option>Drop Auto Peças</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Escolha o Tópico</Label>
              <Select id="topico" onChange={handleFormChange}>
                <option>Selecione um tópico</option>
                <option>Reembolso</option>
                <option>Pedido Enviado Errado</option>
                <option>Dúvidas Gerais</option>
                <option>Pedido Faltando</option>
                <option>Pedido com Defeito</option>
                <option>Venda com Estoque Zerado</option>
              </Select>
            </FormGroup>
            <Button onClick={handleCloseForm} cancel>Cancelar</Button>
            {isFormFilled && <Button onClick={handleSubmit}>Enviar</Button>}
          </FormContainer>
        )}
      </Main>
    </>
  );
}

export default Chamados;