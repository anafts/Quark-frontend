import React,  { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Box from "../components/Box";
import Form from "../components/Form";
import MainTitle from "../components/Title/MainTitle";
import SaveButton from "../components/Buttons/Save";
import Input from "../components/Form/Input";

import { API_URL } from '../conts'

function CreateTopics() {

  const navigate = useNavigate();
  const params = useParams();

  const [ title, setTitle ] = useState();
  const [ order, setOrder ] = useState();
  const [ active_icon, setActiveIcon ] = useState();
  const [ disabled_icon, setDisabledIcon ] = useState();

    const createTopics = (event) => {
      event.preventDefault();

      axios.post(`${API_URL}/createTopics/${params.skillId}`, {
        title: title,
        order: order,
        active_icon: active_icon,
        disabled_icon: disabled_icon

      })
      .then((response) => {
        navigate(`/topicos/${params.skillId}`)
      })
      .catch((error) => {
        navigate(`/criartopico/${params.skillId}`)
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

        <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
      </Navbar>
      
      <Box>
        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`}> Inteligência Emocional </BCLink>
          <BCLink href="#"> Criar Tópico </BCLink>
        </Breadcrumbs>

        <Form onSubmit={createTopics}>
          <MainTitle>Criar Tópico</MainTitle>

          <Input placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title}  />
          <Input  placeholder="Ordem" type="number" onChange={event => setOrder(event.currentTarget.value)} value={order}  />
          <Input  placeholder="Ícone Ativo" onChange={event => setActiveIcon(event.currentTarget.value)} value={active_icon} />
          <Input  placeholder="Ícone Desativado" onChange={event => setDisabledIcon(event.currentTarget.value)} value={disabled_icon}/>

          <SaveButton type="Submit">Save</SaveButton>
        </Form>        
      </Box>
    </>
  );
}

export default CreateTopics;
