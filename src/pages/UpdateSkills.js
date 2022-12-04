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
import Input from "../components/Form/Input";
import InputColor from "../components/Form/InputColor";
import BoxInputColor from "../components/Form/BoxInputColor";

import SaveButton from "../components/Buttons/Save";

function UpdateSkills() {

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
               navigate(`editarskill${params.id}`)
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
          <BCLink> Editar Skill</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateSkillSubmmit} >
          <MainTitle>Editar Skill</MainTitle>

          <Input type="text" placeholder="Título" onChange={event => setTitle(event.currentTarget.value)} value={title} />
          
          <BoxInputColor>
            <InputColor type="text" onChange={event => setColor(event.currentTarget.value)} value={color} />
            <InputColor type="color" onChange={event => setColor(event.currentTarget.value)} value={color} />
          </BoxInputColor>

          <SaveButton type="Submit">Editar</SaveButton>
        </Form>        
      </Box>
    </>
  );
}

export default UpdateSkills;
