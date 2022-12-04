import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from "../components/Buttons/Publicar";

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Caixa from "../components/Caixa";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import AddObjetoBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import TituloListagemObjetos from "../components/ObjetoDeAprendizagem/TituloListagemObjetos";

import ObjetoDeAprendizagem from "../components/ObjetoDeAprendizagem";
import CardLink from "../components/Card/CardLink";
import ObjetoTitle from "../components/ObjetoDeAprendizagem/ObjetoTitle";
import ObjetoDescricao from "../components/ObjetoDeAprendizagem/ObjetoDescricao";

import ObjetoEdit from "../components/ObjetoDeAprendizagem/ObjetoEdit";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";
import TooltipObjeto from "../components/Tooltip/TooltipObjeto";
import ObjetoIcons from "../components/ObjetoDeAprendizagem/ObjetoIcons";

import bookIcon from '../icons/book.svg';
import videoIcon from '../icons/video.svg';
import audioIcon from '../icons/microphone.svg';
import quizIcon from '../icons/quiz.svg';

import ObjetoRodape from "../components/ObjetoDeAprendizagem/ObjetoRodape";
import ObjetoDatas from "../components/ObjetoDeAprendizagem/ObjetoDatas";
import DataTitle from "../components/Card/CardDataTitle";
import ObjetoData from "../components/Card/CardData";

export default function Modules(){

    const [modules, setModules] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/modules")
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

                <PublishBtn href="/publicar">Publicar</PublishBtn>
            </Navbar>
            
            <AddObjetoBtn to={`/criarobjeto/${params.subtopicsId}`}>
                <img src={addIcon}/>
                <TooltipAdd className="tooltip">Criar Objeto de Aprendizagem</TooltipAdd>
            </AddObjetoBtn>

            <Caixa>
                <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
                    <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>

                    <BCLink href="#">O que vamos tratar no módulo?</BCLink>
                </Breadcrumbs>

                <TituloListagemObjetos>O que vamos tratar no módulo?</TituloListagemObjetos>
                
                <>
                {modules.map(module => (
                <ObjetoDeAprendizagem className="primeiro">
                
                    <ObjetoTitle key={module.id} className="TituloObjetoAprendizagem"> 
                        <CardLink to={`/conteudos/${module.id}`} >
                        {module.title}
                            <TooltipObjeto className="tooltipTitulo"> {module.title} </TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" onClick={(event) => handleGoToModules(event, module)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                    {module.description}
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData> {module.created_at.slice(-25, 10)} </ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData> {module.updated_at.slice(-25, 10)} </ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="book" src={bookIcon}/>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>
                            <img className="quiz" src={quizIcon}/>
                        </ObjetoIcons>
                        
                    </ObjetoRodape>
                 
                
                </ObjetoDeAprendizagem>
                ))}
                </>

            </Caixa>
        </>
    );
};