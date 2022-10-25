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
import GridSubtopicos from "../components/GridSkills";

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

function Subtopicos() {

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

      const handleGoToSubTopics= (event, subtopics) => {
        event.preventDefault()
        
        navigate(`/editarsubtopico/${subtopics.id}`, {
          state: subtopics
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

        <AddTopicoBtn to={`/criarsubtopico/${params.topicsId}`}>
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Subtópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Caixa>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink href="/topicos">Inteligência Emocional</BCLink>
                <BCLink href="/subtopicos">Introdução</BCLink>
            </Breadcrumbs>

            
            <TituloListagens>Introdução</TituloListagens>
            
            <GridSubtopicos>
            {subtopics.map(subtopic => (
                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">
                        {subtopic.title} 
                            <Tooltip className="tooltipTitulo"> {subtopic.title} </Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" onClick={(event) => handleGoToSubTopics(event, subtopic)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData> {subtopic.created_at.slice(-25, 10)} </CardData>
                        <CardData> {subtopic.updated_at.slice(-25, 10)} </CardData>
                    </CardDatas>
                </Card>
                ))}
            </GridSubtopicos>
        </Caixa>
    </>
  );
}

export default Subtopicos;