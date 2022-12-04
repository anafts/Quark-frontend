import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import AddTopicoBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import Box from "../components/Box";
import GridSubTopics from "../components/GridSkills";

import Card from "../components/Card/InternalCard";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import CardTopics from "../components/Card/CardTopics";
import CardDates from "../components/Card/CardDates";
import CardDate from "../components/Card/CardDate";
import CardDateTitle from "../components/Card/CardDateTitle";
import ListTitle from "../components/Title/ListTitle";
import Tooltip from "../components/Tooltip/TooltipInternal";

import CardEdit from "../components/Card/InternalCardEdit";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";

function SubTopics() {

    const [subtopics, setSubTopics] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/subtopics")
           .then((response) => {
             setSubTopics(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToSubTopics= (event, subtopic) => {
        event.preventDefault()
        
        navigate(`/editarsubtopico/${subtopic.id}`, {
          state: subtopic
        })
      }



  return (
    <>
        <Navbar>
            <BackBtn href="javascript:history.back()">
                <img src={backIcon}/>
                <TooltipBack className="tooltip">Voltar</TooltipBack>
            </BackBtn>
        
            <LogoMenu  href="/skill"></LogoMenu>
        
            <PublishBtn href="/publicar">Publish</PublishBtn>
        </Navbar>

        <AddTopicoBtn to={`/criarsubtopico/${params.topicsId}`}>
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Subtópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Box>
            <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
                    <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
            </Breadcrumbs>

            
            <ListTitle> Introdução </ListTitle>
            
            <GridSubTopics>
            {subtopics.map(subtopic => (
                <Card key={subtopic.id}>
                    <CardTilte>
                        <CardLink to={`/objetosaprendizagem/${subtopic.id}`} className="titulo">
                        {subtopic.title} 
                            <Tooltip className="tooltipTitulo"> {subtopic.title} </Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" onClick={(event) => handleGoToSubTopics(event, subtopic)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopics>4 Objetos</CardTopics>

                    <CardDates>
                        <CardDateTitle>Criado em</CardDateTitle>
                        <CardDateTitle>Editado em</CardDateTitle>

                        <CardDate> {subtopic.created_at.slice(-25, 10)} </CardDate>
                        <CardDate> {subtopic.updated_at.slice(-25, 10)} </CardDate>
                    </CardDates>
                </Card>
                ))}
            </GridSubTopics>
        </Box>
    </>
  );
}

export default SubTopics;