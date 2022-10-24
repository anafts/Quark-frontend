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
import SalvarBtn from "../components/Buttons/Salvar";
import Input from "../components/Form/Input";

function CriarTopicos() {

  const navigate = useNavigate();
  const params = useParams();

  const [ title, setTitle ] = useState();
  const [ order, setOrder ] = useState();
  const [ active_icon, setActiveIcon ] = useState();
  const [ disabled_icon, setDisabledIcon ] = useState();

    const createTopics = (event) => {
      event.preventDefault();

      axios.post(`http://localhost:80/createTopics/${params.skillId}`, {
        title: title,
        order, order,
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

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>
      
      <Caixa>
        <Breadcrumbs>
          <BCLink href="/skill">Skills</BCLink>
          <BCLink href="/topicos">Inteligência Emocional</BCLink>
          <BCLink href="#">Criar Tópico</BCLink>
        </Breadcrumbs>

        <Form onSubmit={createTopics} >
          <Titulo1>Criar Tópico</Titulo1>

          <Input placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title}  />
          <Input  placeholder="Ordem" type="number" onChange={event => setTitle(event.currentTarget.value)} value={title}  />
          <Input  placeholder="Ícone Ativo" onChange={event => setActiveIcon(event.currentTarget.value)} value={active_icon} />
          <Input  placeholder="Ícone Desativado" onChange={event => setActiveIcon(event.currentTarget.value)} value={active_icon}/>

          <SalvarBtn type="Submit">Salvar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default CriarTopicos;
