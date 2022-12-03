import React,  { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

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
import SalvarBtn from "../components/Buttons/Salvar";
import CaixaInputCor from "../components/Form/CaixaInputCor";


function CreateSkills() {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [color, setColor] = useState();

    const createSkill = (event) => {
      event.preventDefault();

      axios.post('http://localhost:80/createSkill', {
       title: title,
       color: color

      })
     .then((response) => {
        navigate('/skill')
      })
      .catch((error) => {
        navigate('/createskill')
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
          <BCLink> Criar Skill </BCLink>
        </Breadcrumbs>

        <Form onSubmit={createSkill} >
          <Titulo1> Criar Skill </Titulo1>

          <Input type="text" placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          
          <CaixaInputCor>
            <InputCor type="text"  placeholder="Cor" onChange={event => setColor(event.currentTarget.value)} value={color} />
            <InputCor type="color" defaultValue="#7D71DA" onChange={event => setColor(event.currentTarget.value)} value={color} />
          </CaixaInputCor>

          <SalvarBtn type="Submit">Salvar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default CreateSkills;
