import React,  { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';
import BackBtn from '../components/Buttons/Back';
import { ReactComponent } from '../icons/back.svg';

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import SalvarBtn from "../components/Buttons/Salvar";
import Input from "../components/Form/Input";
import DescriptionText from "../components/Form/TextArea";

function CriarObjetos() {

  const navigate = useNavigate();
  const params = useParams();

  const [ title, setTitle ] = useState();
  const [ order, setOrder ] = useState();
  const [ description, setDescription ] = useState();


  const createMethods = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:80/createMethods/${params.subtopicsId}`, {
      title: title,
      order: order,
      description: description

    })
    .then((response) => {
      navigate(`/objetosaprendizagem/${params.subtopicsId}`)
    })
    .catch((error) => {
      navigate(`/criarobjeto/${params.subtopicsId}`)
  })
}

  return (
    <>
      <Navbar>
        <BackBtn href="javascript:javascript:history.go(-1)">
          <ReactComponent />
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>
      
      <Caixa>

        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
          <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
          <BCLink to={`/objetosaprendizagem/:subtopicsId`}>O que vamos tratar no módulo?</BCLink>
          <BCLink>Criar Objeto de Aprendizagem</BCLink>
        </Breadcrumbs>

        <Form onSubmit={createMethods} >

          <Titulo1>Criar Objeto de Aprendizagem</Titulo1>
          <Input placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          <Input placeholder="Ordem" type="number"  onChange={event => setOrder(event.currentTarget.value)} value={order}/>
          <DescriptionText placeholder="Descrição"  onChange={event => setDescription(event.currentTarget.value)} value={description} />
          <SalvarBtn type="Submit">Salvar</SalvarBtn>

        </Form>        
      </Caixa>
    </>
  );
}

export default CriarObjetos;
