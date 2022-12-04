import React,  { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

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
import Input from "../components/Form/Input";

import InputColor from "../components/Form/InputColor";
import SaveButton from "../components/Buttons/Save";
import BoxInputColor from "../components/Form/BoxInputColor";

import { API_URL } from '../conts'


function CreateSkills() {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [color, setColor] = useState();

    const createSkill = (event) => {
      event.preventDefault();

      axios.post('${API_URL}/createSkill', {
       title: title,
       color: color

      })
     .then((response) => {
        navigate('/skill')
      })
      .catch((error) => {
        navigate('/criarskill')
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
          <BCLink> Criar Skill </BCLink>
        </Breadcrumbs>

        <Form onSubmit={createSkill} >
          <MainTitle> Criar Skill </MainTitle>

          <Input type="text" placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          
          <BoxInputColor>
            <InputColor type="text"  placeholder="Cor" onChange={event => setColor(event.currentTarget.value)} value={color} />
            <InputColor type="color" defaultValue="#7D71DA" onChange={event => setColor(event.currentTarget.value)} value={color} />
          </BoxInputColor>

          <SaveButton type="Submit">Save</SaveButton>
        </Form>        
      </Box>
    </>
  );
}

export default CreateSkills;
