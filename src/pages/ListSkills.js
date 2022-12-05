import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';
import MenuSpace from "../components/MenuSpace";

import AddSkillBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Box from "../components/Box";
import GridSkills from "../components/GridSkills";
import Titulo from "../components/Title/ListTitle";

import Card from "../components/Card";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import SkillColor from "../components/Card/SkillColor";
import CardTopics from "../components/Card/CardTopics";
import CardDates from "../components/Card/CardDates";
import CardDate from "../components/Card/CardDate";
import CardDateTitle from "../components/Card/CardDateTitle";
import Tooltip from "../components/Tooltip";

import CardEdit from "../components/Card/CardEdit";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import { API_URL } from '../conts'


function Skills() {

  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/skills`)
       .then((response) => {
         setSkills(response.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
  const handleGoToSkill = (event, skill) => {
    event.preventDefault()
    
    navigate(`/editarskill/${skill.id}`, {
      state: skill
    })
  }

  return (
    <>
      <Navbar>
        <MenuSpace />
        
        <LogoMenu  href="/skill"></LogoMenu>
        
        <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
      </Navbar>

      <AddSkillBtn to={'/criarskill'}>
        <img src={addIcon}/>
        <TooltipAdd className="tooltip">Criar Skill</TooltipAdd>
      </AddSkillBtn>

      <Box>
        <Breadcrumbs>
            <BCLink to={'/skill'}> Skills </BCLink>
        </Breadcrumbs>

        <Titulo>Skills</Titulo>

        <GridSkills>
          {skills.map(skill => (
            <Card key={skill.id}>
              <SkillColor className="cor" cor={skill.color} />
              
              <CardTilte>
                <CardLink to={`/topicos/${skill.id}`}>
                  {skill.title}
                  <Tooltip className="tooltipTitulo">{skill.title}</Tooltip>
                </CardLink>
              </CardTilte>

                <CardEdit className="editar" onClick={(event) => handleGoToSkill(event, skill)}>
                    <img src={editIcon}/>
                    <TooltipEdit className="tooltip">Editar Skill</TooltipEdit>
                </CardEdit>

              <CardTopics> Tópicos </CardTopics>

              <CardDates>
                <CardDateTitle>Criado em</CardDateTitle>
                <CardDateTitle>Editado em</CardDateTitle>

                <CardDate> {skill.created_at.slice(-25, 10)} </CardDate>
                <CardDate> {skill.updated_at.slice(-25, 10)} </CardDate>
              </CardDates>
            </Card>
          ))}
        </GridSkills>
      </Box>

    </>
  );
}

export default Skills;
