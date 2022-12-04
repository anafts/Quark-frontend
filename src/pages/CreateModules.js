import React,  { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';
import BackBtn from '../components/Buttons/Back';
import { ReactComponent } from '../icons/back.svg';

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Box from "../components/Box";
import Form from "../components/Form";
import MainTitle from "../components/Title/MainTitle";
import SaveButton from "../components/Buttons/Save";
import Input from "../components/Form/Input";
import DescriptionText from "../components/Form/TextArea";

import { API_URL } from '../conts'

function CreateModules() {

  const navigate = useNavigate();
  const params = useParams();

  const [ title, setTitle ] = useState();
  const [ order, setOrder ] = useState();
  const [ description, setDescription ] = useState();


  const createModules = (event) => {
    event.preventDefault();

    axios.post(`${API_URL}/createModules/${params.subtopicsId}`, {
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

        <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
      </Navbar>
      
      <Box>

        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
          <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
          <BCLink to={`/objetosaprendizagem/:subtopicsId`}>O que vamos tratar no módulo?</BCLink>
          <BCLink>Criar Objeto de Aprendizagem</BCLink>
        </Breadcrumbs>

        <Form onSubmit={createModules} >

          <MainTitle>Criar Objeto de Aprendizagem</MainTitle>
          <Input placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          <Input placeholder="Ordem" type="number"  onChange={event => setOrder(event.currentTarget.value)} value={order}/>
          <DescriptionText placeholder="Descrição"  onChange={event => setDescription(event.currentTarget.value)} value={description} />
          <SaveButton type="Submit">Save</SaveButton>

        </Form>        
      </Box>
    </>
  );
}

export default CreateModules;
