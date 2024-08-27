/* eslint-disable */
import React, { useState } from 'react';
import { Container, FormSection, InputGroup, Label, Input, FileInput, Button, CheckboxGroup, Checkbox, TermsLink } from './stylesList.ts';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: 'Artur',
    sobrenome: 'Aguiar',
    razaoSocial: 'Antonio Jose da Silva',
    cnpj: '43197336000107',
    ie: '131.808.241.111',
    cpf: '05135128883',
    rg: '476742468',
    dataNascimento: '18051990',
    celular: '11934322340',
    email: 'artur.aparecido@gmail.com',
    nomePai: 'José Fabilicio Neto',
    nomeMae: 'Aparecida',
    cep: '05185300',
    endereco: 'Rua Balsamo da Horta',
    numero: '69',
    complemento: '',
    bairro: 'Jardim Santa Lucrécia',
    cidade: 'São Paulo',
    estado: 'SP',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <FormSection>
        <h3>Dados do responsável</h3>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
          <Label>Sobrenome</Label>
          <Input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Razão Social</Label>
          <Input type="text" name="razaoSocial" value={formData.razaoSocial} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>CNPJ</Label>
          <Input type="text" name="cnpj" value={formData.cnpj} onChange={handleInputChange} />
          <Label>IE</Label>
          <Input type="text" name="ie" value={formData.ie} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>CPF</Label>
          <Input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />
          <Label>RG</Label>
          <Input type="text" name="rg" value={formData.rg} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Data de Nascimento</Label>
          <Input type="text" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Celular com DDD</Label>
          <Input type="text" name="celular" value={formData.celular} onChange={handleInputChange} />
          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Nome Pai</Label>
          <Input type="text" name="nomePai" value={formData.nomePai} onChange={handleInputChange} />
          <Label>Nome Mãe</Label>
          <Input type="text" name="nomeMae" value={formData.nomeMae} onChange={handleInputChange} />
        </InputGroup>
      </FormSection>

      <FormSection>
        <h3>Endereço</h3>
        <InputGroup>
          <Label>CEP</Label>
          <Input type="text" name="cep" value={formData.cep} onChange={handleInputChange} />
          <Label>Endereço</Label>
          <Input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Número</Label>
          <Input type="text" name="numero" value={formData.numero} onChange={handleInputChange} />
          <Label>Complemento</Label>
          <Input type="text" name="complemento" value={formData.complemento} onChange={handleInputChange} />
          <Label>Bairro</Label>
          <Input type="text" name="bairro" value={formData.bairro} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Cidade</Label>
          <Input type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} />
          <Label>Estado</Label>
          <Input type="text" name="estado" value={formData.estado} onChange={handleInputChange} />
        </InputGroup>
      </FormSection>

      <FormSection>
        <h3>Anexar documentos</h3>
        <InputGroup>
          <Label>RG - Frente</Label>
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
          Li, concordo e estou ciente dos termos e políticas da empresa. <a href="#termos">Ler termos aqui.</a>
        </TermsLink>
      </CheckboxGroup>

      <Button>Atualizar</Button>
    </Container>
  );
}

export default Formulario;

