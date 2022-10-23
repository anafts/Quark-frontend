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
import Input from "../components/Form/Input";
import InputCor from "../components/Form/InputCor";
import CaixaInputCor from "../components/Form/CaixaInputCor";

import SalvarBtn from "../components/Buttons/Salvar";

function EditarSkills() {

    const navigate = useNavigate();
    const params = useParams()
    const location = useLocation()
    const [title, setTitle] = useState(location.state.title);
    const [color, setColor] = useState(location.state.color); 

    const updateSkillSubmmit = (event) => {
      event.preventDefault()
   
      axios.put(`http://localhost:80/updateSkill/${params.id}`, {
               title: title,
               color: color
           })
           .then((response) => {
               navigate('/skill')
           })
           .catch((error) => {
               navigate('editarskill')
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
          <BCLink>Editar Skill</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateSkillSubmmit} >
          <Titulo1>Editar Skill</Titulo1>

          <Input type="text" placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          
          <CaixaInputCor>
            <InputCor type="text" onChange={event => setColor(event.currentTarget.value)} value={color} />
            <InputCor type="color" onChange={event => setColor(event.currentTarget.value)} value={color} />
          </CaixaInputCor>

          <SalvarBtn type="Submit">Editar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default EditarSkills;
