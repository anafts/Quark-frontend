import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import AddTopicoBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import Caixa from "../components/Caixa";
import GridTopicos from "../components/GridSkills";

import Card from "../components/Card/CardInterno";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import CardTopicos from "../components/Card/CardTopicos";
import CardDatas from "../components/Card/CardDatas";
import CardData from "../components/Card/CardData";
import CardDataTitle from "../components/Card/CardDataTitle";
import TituloListagens from "../components/Titulos/TituloListagens";
import Tooltip from "../components/Tooltip/TooltipInterno";

import CardEdit from "../components/Card/CardEditInterno";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";

function Topicos() {

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
        
            <PublicarBtn href="/publicar">Publicar</PublicarBtn>
        </Navbar>

        <AddTopicoBtn to={`/criartopico/${params.skillId}`}>
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Tópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Caixa>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink>Inteligência Emocional</BCLink>
            </Breadcrumbs>

            
            <TituloListagens>Inteligência Emocional</TituloListagens>
            
            <GridTopicos>
            {topics.map(topic => (
                <Card>
                    <CardTilte>
                        <CardLink href="/subtopicos"> 
                        {topic.title}
                            <Tooltip className="tooltipTitulo"> {topic.title} </Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardEdit className="editar" onClick={(event) => handleGoToTopics(event, topic)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Tópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>8 Subtópicos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData> {topic.created_at.slice(-25, 10)} </CardData>
                        <CardData> {topic.updated_at.slice(-25, 10)} </CardData>
                    </CardDatas>
                </Card>
                ))}
            </GridTopicos>
        </Caixa>
    </>
  );
}

export default Topicos;