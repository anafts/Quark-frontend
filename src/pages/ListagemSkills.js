import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';
import EspacoMenu from "../components/EspacoMenu";

import AddSkillBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import GridSkills from "../components/GridSkills";
import Titulo from "../components/Titulos/TituloListagens";

import Card from "../components/Card";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import CorSkill from "../components/Card/CorSkill";
import CardTopicos from "../components/Card/CardTopicos";
import CardDatas from "../components/Card/CardDatas";
import CardData from "../components/Card/CardData";
import CardDataTitle from "../components/Card/CardDataTitle";
import Tooltip from "../components/Tooltip";

import CardEdit from "../components/Card/CardEdit";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";
import { Link, useNavigate } from "react-router-dom";


function Skills() {

  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:80/skills")
       .then((response) => {
        console.log(response.data);
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
        <EspacoMenu />
        
        <LogoMenu  href="/skill"></LogoMenu>
        
        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>

      <AddSkillBtn href="/criarskill">
        <img src={addIcon}/>
        <TooltipAdd className="tooltip">Criar Skill</TooltipAdd>
      </AddSkillBtn>

      <Caixa>
        <Breadcrumbs>
          <BCLink href="/skill">Skills</BCLink>
        </Breadcrumbs>

        <Titulo>Skills</Titulo>

        <GridSkills>
          {skills.map(skill => (
            <Card>
              <CorSkill className="cor" cor={skill.color} />
              
              <CardTilte>
                <CardLink href="/topicos">
                  {skill.title}
                  <Tooltip className="tooltipTitulo">{skill.title}</Tooltip>
                </CardLink>
              </CardTilte>

                <CardEdit className="editar" onClick={(event) => handleGoToSkill(event, skill)}>
                    <img src={editIcon}/>
                    <TooltipEdit className="tooltip">Editar Skill</TooltipEdit>
                </CardEdit>

              <CardTopicos>3 Tópicos</CardTopicos>

              <CardDatas>
                <CardDataTitle>Criado em</CardDataTitle>
                <CardDataTitle>Editado em</CardDataTitle>

                <CardData> {skill.created_at.slice(-25, 10)} </CardData>
                <CardData> {skill.updated_at.slice(-25, 10)} </CardData>
              </CardDatas>
            </Card>
          ))}
        </GridSkills>
      </Caixa>

    </>
  );
}

export default Skills;
