import React,  { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import SaveButton from "../components/Buttons/Save";
import Input from "../components/Form/Input";

function CriarSubtopicos() {

  const navigate = useNavigate();
  const params = useParams();

  const [ title, setTitle ] = useState();
  const [ order, setOrder ] = useState();

  const createSubTopics = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:80/createSubTopics/${params.topicsId}`, {
      title: title,
      order: order  

    })
    .then((response) => {
      navigate(`/subtopicos/${params.topicsId}`)
    })
    .catch((error) => {
      navigate(`/criarsubtopico/${params.topicsId}`)
  })
}


  return (
    <>
      <Navbar>
        <BackBtn href="javascript:history.back()">
          <img src={backIcon}/>
          <TooltipBack className="tooltip">Voltar</TooltipBack>
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>
      
      <Caixa>
        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`}> Inteligência Emocional </BCLink>
          <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
          <BCLink href="#">Criar subtópico</BCLink>
        </Breadcrumbs>

        <Form onSubmit={createSubTopics} >
          <Titulo1>Criar Subtópico</Titulo1>

          <Input placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title}  />
          <Input  placeholder="Ordem" type="number" onChange={event => setOrder(event.currentTarget.value)} value={order} />
          <SaveButton type="Submit">Save</SaveButton>
          
        </Form>        
      </Caixa>
    </>
  );
}

export default CriarSubtopicos;
