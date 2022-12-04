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
import GridTopics from "../components/GridSkills";

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

function Topics() {

    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/topics")
           .then((response) => {
             setTopics(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToTopics= (event, topic) => {
        event.preventDefault()
        
        navigate(`/editartopico/${topic.id}`, {
          state: topic
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

        <AddTopicoBtn to={`/criartopico/${params.skillId}`}>
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Tópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Box>
            <Breadcrumbs>
                <BCLink to={'/skill'}> Skills </BCLink>
                <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
            </Breadcrumbs>

            
            <ListTitle>Inteligência Emocional</ListTitle>
            
            <GridTopics>
            {topics.map(topic => (
                <Card key={topic.id}>
                    <CardTilte>
                        <CardLink to={`/subtopicos/${topic.id}`}> 
                        {topic.title}
                            <Tooltip className="tooltipTitulo"> {topic.title} </Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardEdit className="editar" onClick={(event) => handleGoToTopics(event, topic)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Tópico</TooltipEdit>
                    </CardEdit>

                    <CardTopics>8 Subtópicos</CardTopics>

                    <CardDates>
                        <CardDateTitle>Criado em</CardDateTitle>
                        <CardDateTitle>Editado em</CardDateTitle>

                        <CardDate> {topic.created_at.slice(-25, 10)} </CardDate>
                        <CardDate> {topic.updated_at.slice(-25, 10)} </CardDate>
                    </CardDates>
                </Card>
                ))}
            </GridTopics>
        </Box>
    </>
  );
}

export default Topics;