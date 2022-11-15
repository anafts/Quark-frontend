import React,  { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from 'react-router-dom'

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

function EditarTopicos() {

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const [ title, setTitle ] = useState(location.state.title);
    const [ order, setOrder ] = useState(location.state.order);
    const [ active_icon, setActiveIcon ] = useState(location.state.active_icon);
    const [ disabled_icon, setDisabledIcon ] = useState(location.state.disabled_icon);

    const updateTopicsSubmmit = (event) => {
      event.preventDefault()
   
      axios.put(`http://localhost:80/updateTopics/${params.id}`, {
          title: title,
          order: order,
          active_icon: active_icon,
          disabled_icon: disabled_icon
           })
           .then((response) => {
               navigate(`/topicos/${params.id}`)
           })
           .catch((error) => {
               navigate(`/editartopico/${params.id}`)
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
          <BCLink href="/subtopicos">Introdução</BCLink>
          <BCLink>Editar Tópico</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateTopicsSubmmit} >
          <Titulo1>Editar Tópico</Titulo1>
          <Input type="text"  onChange={event => setTitle(event.currentTarget.value)} value={title} />
          <Input type="number" onChange={event => setOrder(event.currentTarget.value)} value={order} />
          <Input onChange={event => setActiveIcon(event.currentTarget.value)} value={active_icon}/>
          <Input onChange={event => setDisabledIcon(event.currentTarget.value)} value={disabled_icon} />
          
          <SalvarBtn type="Submit">Salvar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default EditarTopicos;