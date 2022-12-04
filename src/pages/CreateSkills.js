import React,  { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import Input from "../components/Form/Input";

import InputColor from "../components/Form/InputColor";
import SaveButton from "../components/Buttons/Save";
import BoxInputColor from "../components/Form/BoxInputColor";


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

        <PublishBtn href="/publicar" className="oculto">Publicar</PublishBtn>
      </Navbar>
      
      <Caixa>
        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink> Criar Skill </BCLink>
        </Breadcrumbs>

        <Form onSubmit={createSkill} >
          <Titulo1> Criar Skill </Titulo1>

          <Input type="text" placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          
          <BoxInputColor>
            <InputColor type="text"  placeholder="Cor" onChange={event => setColor(event.currentTarget.value)} value={color} />
            <InputColor type="color" defaultValue="#7D71DA" onChange={event => setColor(event.currentTarget.value)} value={color} />
          </BoxInputColor>

          <SaveButton type="Submit">Save</SaveButton>
        </Form>        
      </Caixa>
    </>
  );
}

export default CreateSkills;
