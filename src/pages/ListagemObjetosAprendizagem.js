import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from "../components/Buttons/Publicar";

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
import Card from "../components/Card/CardInterno";

export default function ObjetosAprendizagem(){

    const [methods, setMethods] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/methods")
           .then((response) => {
             setMethods(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToMethods= (event, methods) => {
        event.preventDefault()
        
        navigate(`/editarobjetos/${methods.id}`, {
          state: methods
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

                <PublicarBtn href="/publicar">Publicar</PublicarBtn>
            </Navbar>
            
            <AddObjetoBtn  to={`/criarobjeto/${params.methodsId}`}>
                <img src={addIcon}/>
                <TooltipAdd className="tooltip">Criar Objeto de Aprendizagem</TooltipAdd>
            </AddObjetoBtn>

            <Caixa>
                <Breadcrumbs>
                    <BCLink href="/skill">Skills</BCLink>
                    <BCLink href="/topicos">Inteligência Emocional</BCLink>
                    <BCLink href="/subtopicos">Introdução</BCLink>
                    <BCLink href="#">O que vamos tratar no módulo?</BCLink>
                </Breadcrumbs>

                <TituloListagemObjetos>O que vamos tratar no módulo?</TituloListagemObjetos>
                
                <ObjetoDeAprendizagem className="primeiro">
                {methods.map(method => (
                <>
                
                    <ObjetoTitle key={method.id} className="TituloObjetoAprendizagem"> 
                        <CardLink href="/conteudos">
                        {method.title}
                            <TooltipObjeto className="tooltipTitulo"> {method.title} </TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" onClick={(event) => handleGoToMethods(event, method)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                    {method.description}
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData> {method.created_at.slice(-25, 10)} </ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData> {method.created_at.slice(-25, 10)} </ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="book" src={bookIcon}/>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>

                        </ObjetoIcons>
                    </ObjetoRodape>
                 </>
                    ))}
                </ObjetoDeAprendizagem>
              
            </Caixa>
        </>
    );
};