import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from "../components/Buttons/Publish";

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Box from "../components/Box";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import AddObjetoBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import ModuleTitleMain from "../components/ModuleBox/ModuleTitleMain";

import ModuleBox from "../components/ModuleBox";
import CardLink from "../components/Card/CardLink";
import ModuleTitle from "../components/ModuleBox/ModuleTitle";
import ModuleDescription from "../components/ModuleBox/ModuleDescription";

import ObjectUpdate from "../components/ModuleBox/ObjectUpdate";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";
import TooltipObject from "../components/Tooltip/TooltipObject";
import ModuleObjectIcon from "../components/ModuleBox/ModuleObjectIcon";

import bookIcon from '../icons/book.svg';
import videoIcon from '../icons/video.svg';
import audioIcon from '../icons/microphone.svg';
import quizIcon from '../icons/quiz.svg';

import Footer from "../components/ModuleBox/Footer";
import ModuleDates from "../components/ModuleBox/ModuleDates";
import DataTitle from "../components/Card/CardDateTitle";
import ObjetoData from "../components/Card/CardDate";

import { API_URL } from '../conts'

export default function Modules(){

    const [modules, setModules] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/modules`)
           .then((response) => {
            setModules(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToModules= (event, modules) => {
        event.preventDefault()
        
        navigate(`/editarobjetos/${modules.id}`, {
          state: modules
        })
      }


    return(
        <>
            <Navbar>
                <BackBtn href="javascript:history.back()">
                    <img src={backIcon}/>
                    <TooltipBack className="tooltip">Voltar</TooltipBack>
                </BackBtn>

                <LogoMenu href="/skill"></LogoMenu>

                <PublishBtn href="/publicar">Publish</PublishBtn>
            </Navbar>
            
            <AddObjetoBtn to={`/criarobjeto/${params.subtopicsId}`}>
                <img src={addIcon}/>
                <TooltipAdd className="tooltip">Criar Objeto de Aprendizagem</TooltipAdd>
            </AddObjetoBtn>

            <Box>
                <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
                    <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>

                    <BCLink to="#">O que vamos tratar no módulo?</BCLink>
                </Breadcrumbs>

                <ModuleTitleMain>O que vamos tratar no módulo?</ModuleTitleMain>
                
                <>
                {modules.map(module => (
                <ModuleBox className="primeiro">
                
                    <ModuleTitle key={module.id} className="TituloObjetoAprendizagem"> 
                        <CardLink to={`/conteudos/${module.id}`} >
                        {module.title}
                            <TooltipObject className="tooltipTitulo"> {module.title} </TooltipObject>
                        </CardLink>
                    </ModuleTitle>

                    <ObjectUpdate className="editar" onClick={(event) => handleGoToModules(event, module)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjectUpdate>

                    <ModuleDescription>
                    {module.description}
                    </ModuleDescription>

                    <Footer>
                        <ModuleDates>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData> {module.created_at.slice(-25, 10)} </ObjetoData>
                        </ModuleDates>

                        <ModuleDates>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData> {module.updated_at.slice(-25, 10)} </ObjetoData>
                        </ModuleDates>

                        <ModuleObjectIcon>
                            <img className="book" src={bookIcon}/>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>
                            <img className="quiz" src={quizIcon}/>
                        </ModuleObjectIcon>
                        
                    </Footer>
                 
                
                </ModuleBox>
                ))}
                </>

            </Box>
        </>
    );
};