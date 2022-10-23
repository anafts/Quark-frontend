import React from "react";

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

export default function ObjetosAprendizagem(){
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
            
            <AddObjetoBtn href="/criarobjetos">
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
                    <ObjetoTitle className="TituloObjetoAprendizagem">
                        <CardLink href="/conteudos">O que vamos falar nesse módulo?
                            <TooltipObjeto className="tooltipTitulo">O que vamos falar nesse módulo?</TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" href="/editarobjetos">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData>21/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData>18/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="book" src={bookIcon}/>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>
                        </ObjetoIcons>
                    </ObjetoRodape>
                </ObjetoDeAprendizagem>

                <ObjetoDeAprendizagem>
                    <ObjetoTitle className="TituloObjetoAprendizagem">
                        <CardLink href="/quiz">Que conhecimentos prévios são importantes?
                            <TooltipObjeto className="tooltipTitulo">Que conhecimentos prévios são importantes?</TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" href="/editarobjetos">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData>21/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData>18/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="quiz" src={quizIcon}/>
                        </ObjetoIcons>
                    </ObjetoRodape>
                </ObjetoDeAprendizagem>

                <ObjetoDeAprendizagem>
                    <ObjetoTitle className="TituloObjetoAprendizagem">
                        <CardLink href="/conteudos">O que esperamos aprender no final do módulo?
                            <TooltipObjeto className="tooltipTitulo">O que esperamos aprender no final do módulo?</TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" href="/editarobjetos">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData>21/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData>18/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="book" src={bookIcon}/>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>
                        </ObjetoIcons>
                    </ObjetoRodape>
                </ObjetoDeAprendizagem>

                <ObjetoDeAprendizagem>
                    <ObjetoTitle className="TituloObjetoAprendizagem">
                        <CardLink href="/conteudos">CASE: como isso acontece na prática?
                            <TooltipObjeto className="tooltipTitulo">CASE: como isso acontece na prática?</TooltipObjeto>
                        </CardLink>
                    </ObjetoTitle>

                    <ObjetoEdit className="editar" href="/editarobjetos">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Objeto de Aprendizagem</TooltipEdit>
                    </ObjetoEdit>

                    <ObjetoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </ObjetoDescricao>

                    <ObjetoRodape>
                        <ObjetoDatas>
                            <DataTitle>Criado em</DataTitle>
                            <ObjetoData>21/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoDatas>
                            <DataTitle>Editado em</DataTitle>
                            <ObjetoData>18/05/2022</ObjetoData>
                        </ObjetoDatas>

                        <ObjetoIcons>
                            <img className="video" src={videoIcon}/>
                            <img className="audio" src={audioIcon}/>
                        </ObjetoIcons>
                    </ObjetoRodape>
                </ObjetoDeAprendizagem>
            </Caixa>
        </>
    );
};