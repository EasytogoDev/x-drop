/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
    Container,
    FormSection,
    InputGroup,
    Label,
    Input,
    FileInput,
    Button,
    CheckboxGroup,
    Checkbox,
    TermsLink
} from './stylesList.ts';
import Cookies from 'js-cookie'

function Formulario() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        razaoSocial: '',
        cnpj: '',
        ie: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        celular: '',
        email: '',
        nomePai: '',
        nomeMae: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    // Função para lidar com alterações no input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para carregar os dados da API
    function carregaUsuario() {
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
                    const user = result[0]; // Supondo que a API retorna uma lista de usuários e estamos pegando o primeiro
                    setFormData({
                        nome: user.nomeUSUARIO || '',
                        sobrenome: user.sobrenomeUSUARIO || '',
                        razaoSocial: user.razaoSocial || '',
                        cnpj: user.cnpjUSUARIO || '',
                        ie: user.ieUSUARIO || '',
                        cpf: user.cpfUSUARIO || '',
                        rg: user.rgUSUARIO || '',
                        dataNascimento: user.nascimentoUSUARIO || '',
                        celular: user.telefoneUSUARIO || '',
                        email: user.emailUSUARIO || '',
                        nomePai: user.nomePaiUSUARIO || '',
                        nomeMae: user.nomeMaeUSUARIO || '',
                        cep: user.cepUSUARIO || '',
                        endereco: user.enderecoUSUARIO || '',
                        numero: user.numeroUSUARIO || '',
                        complemento: user.complementoUSUARIO || '',
                        bairro: user.bairroUSUARIO || '',
                        cidade: user.cidadeUSUARIO || '',
                        estado: user.estadoUSUARIO || ''
                    });
                }
            })
            .catch((error) => console.error(error));
    }

    // useEffect para carregar os dados da API ao montar o componente
    useEffect(() => {
        carregaUsuario();
    }, []);

    return (
        <Container>
            <h2>Formulário de Cadastro</h2>
            <FormSection>
                <h3>Dados do responsável</h3>
                <InputGroup>
                    <Label>Nome <span>*</span></Label>
                    <Input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome"
                    />
                    <Label>Sobrenome <span>*</span></Label>
                    <Input
                        type="text"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleInputChange}
                        placeholder="Digite seu sobrenome"
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Razão Social</Label>
                    <Input
                        type="text"
                        name="razaoSocial"
                        value={formData.razaoSocial}
                        onChange={handleInputChange}
                        placeholder="Digite a razão social"
                    />
                </InputGroup>
                <InputGroup>
                    <Label>CNPJ <span>*</span></Label>
                    <Input
                        type="text"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleInputChange}
                        placeholder="00.000.000/0000-00"
                    />
                    <Label>IE</Label>
                    <Input
                        type="text"
                        name="ie"
                        value={formData.ie}
                        onChange={handleInputChange}
                        placeholder="Digite a inscrição estadual"
                    />
                </InputGroup>
                {/* Restante dos campos */}
            </FormSection>

            <FormSection>
                <h3>Endereço</h3>
                <InputGroup>
                    <Label>CEP <span>*</span></Label>
                    <Input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleInputChange}
                        placeholder="Digite o CEP"
                    />
                    <Label>Endereço <span>*</span></Label>
                    <Input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleInputChange}
                        placeholder="Digite o endereço"
                    />
                </InputGroup>
                {/* Outros campos do endereço */}
            </FormSection>

            <FormSection>
                <h3>Anexar documentos</h3>
                <InputGroup>
                    <Label>RG - Frente <span>*</span></Label>
                    <FileInput type="file" />
                </InputGroup>
                <InputGroup>
                    <Label>RG - Costas</Label>
                    <FileInput type="file" />
                </InputGroup>
                <InputGroup>
                    <Label>Comprovante de residência</Label>
                    <FileInput type="file" />
                </InputGroup>
            </FormSection>

            <CheckboxGroup>
                <Checkbox type="checkbox" />
                <TermsLink>
                    Li, concordo e estou ciente dos <a href="#termos">termos e políticas</a>.
                </TermsLink>
            </CheckboxGroup>

            <Button>Atualizar</Button>
        </Container>
    );
}

export default Formulario;
