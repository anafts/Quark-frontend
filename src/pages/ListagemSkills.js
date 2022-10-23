import React from "react";

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

import dados from "../dados";

function Skills() {
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
          {dados.map(skill => (
            <Card>
              <CorSkill className="cor" cor={skill.cor} />
              
              <CardTilte>
                <CardLink href="/topicos">
                  {skill.titulo}
                  <Tooltip className="tooltipTitulo">{skill.titulo}</Tooltip>
                </CardLink>
              </CardTilte>

              <CardEdit className="editar" href="/editarskill">
                <img src={editIcon}/>
                <TooltipEdit className="tooltip">Editar Skill</TooltipEdit>
              </CardEdit>

              <CardTopicos>3 Tópicos</CardTopicos>

              <CardDatas>
                <CardDataTitle>Criado em</CardDataTitle>
                <CardDataTitle>Editado em</CardDataTitle>

                <CardData>18/05/2022</CardData>
                <CardData>21/05/2022</CardData>
              </CardDatas>
            </Card>
          ))}
        </GridSkills>
      </Caixa>

    </>
  );
}

export default Skills;
