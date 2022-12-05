import React,  { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from 'react-router-dom'

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

import { API_URL } from '../conts';

function UpdateTopics() {

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const [ title, setTitle ] = useState(location.state.title);
    const [ order, setOrder ] = useState(location.state.order);
    const [ active_icon, setActiveIcon ] = useState(location.state.active_icon);
    const [ disabled_icon, setDisabledIcon ] = useState(location.state.disabled_icon);

    const updateTopicsSubmmit = (event) => {
      event.preventDefault()
   
      axios.put(`${API_URL}/updateTopics/${params.id}`, {
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

        <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
      </Navbar>
      
      <Box>
        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`}> Inteligência Emocional </BCLink>
          <BCLink to="#" >Editar Tópico</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateTopicsSubmmit} >
          <MainTitle>Editar Tópico</MainTitle>
          <Input type="text"  onChange={event => setTitle(event.currentTarget.value)} value={title} />
          <Input type="number" onChange={event => setOrder(event.currentTarget.value)} value={order} />
          <Input onChange={event => setActiveIcon(event.currentTarget.value)} value={active_icon}/>
          <Input onChange={event => setDisabledIcon(event.currentTarget.value)} value={disabled_icon} />
          
          <SaveButton type="Submit">Save</SaveButton>
        </Form>        
      </Box>
    </>
  );
}

export default UpdateTopics;