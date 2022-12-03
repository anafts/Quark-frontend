import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";

import BackBtn from "../components/Buttons/Back";
import backIcon from "../icons/back.svg";
import TooltipBack from "../components/Tooltip/TooltipBack";

import PublicarBtn from "../components/Buttons/Publicar";

import AddConteudoBtn from "../components/Buttons/AddConteudo";
import addIcon from "../icons/plus.svg";
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import CaixaContents from "../components/Buttons/CaixaContents";
import DropdownContents from "../components/Buttons/DropdowContents";
import LinkContents from "../components/Buttons/LinkContents";

import Datas from "../components/ObjetoDeAprendizagem/Datas";

import Caixa from "../components/Caixa";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import CaixaTitulo from "../components/ObjetoDeAprendizagem/CaixaTitulo";
import TituloContents from "../components/ObjetoDeAprendizagem/TituloContents";
import EditConteudo from "../components/ObjetoDeAprendizagem/EditConteudo";
import editIcon from "../icons/editar.svg";
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import Video from "../components/ObjetoDeAprendizagem/Video";
import Audio from "../components/ObjetoDeAprendizagem/Audio";

import CaixaTexto from "../components/ObjetoDeAprendizagem/CaixaTexto";
import Texto from "../components/ObjetoDeAprendizagem/Texto";

import CaixaQuiz from "../components/Quiz";
import Questao from "../components/Quiz/Questao";
import TituloPergunta from "../components/Quiz/TituloPergunta";
import Alternativas from "../components/Quiz/Alternativas";
import Alternativa from "../components/Quiz/Alternativa";

export default function Modules(){

    const [ isOpen, setIsOpen ] = useState(false);

    function handleOpenDropdown() {
        setIsOpen(!isOpen)
    }

    const [contents, setContent] = useState([]);
    const [quizzes, setQuizzes] = useState();

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/content")
           .then((response) => {
             setContent(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
    
      useEffect(() => {
        axios.get(`http://localhost:80/quizzes/${contents[0]?.id}`)
           .then((response) => {
             setQuizzes(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, [contents]);

      const handleGoToContent= (event, content) => {
        event.preventDefault()
        
        navigate(`/editarconteudo/${content.id}`, {
          state: content
        })
      }

      const handleGoToQuizzes = (event, quizzes) => {
        event.preventDefault()
        
        navigate(`/editarquiz/${quizzes.id}`, {
          state: quizzes
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
            
            <CaixaContents>
                <AddConteudoBtn onClick={handleOpenDropdown}>
                    <img src={addIcon}/>
                    <TooltipAdd className="tooltip">Adicionar Conteúdos</TooltipAdd>
                </AddConteudoBtn>

                <DropdownContents className={isOpen ? 'show' : ''}>
                    <LinkContents to={`/adicionarconteudo/${params.methodsId}`}> Adicionar Conteúdo </LinkContents>
                    <LinkContents style={{
                        display: quizzes ? 'none' : 'block'
                    }} to={`/adicionarquiz/${contents[0]?.id}`}> Adicionar Quiz </LinkContents>
                </DropdownContents>
            </CaixaContents>



            <Caixa>
                <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
                    <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
                    <BCLink to={`/objetosaprendizagem/:subtopicsId`}>O que vamos tratar no módulo?</BCLink>
                    <BCLink> O que vamos falar nesse módulo? </BCLink>
                </Breadcrumbs>

                
                {contents.map(content => (
                    <>
                <CaixaTitulo key={content.id}>
                    <TituloContents>O que vamos falar nesse módulo?</TituloContents>
                    <EditConteudo onClick={(event) => handleGoToContent(event, content)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </EditConteudo>
                </CaixaTitulo>
                
                <Datas>
                    <h1> Criado em {content.created_at.slice(-25, 10)}</h1>
                    <h1>Editado em {content.updated_at.slice(-25, 10)}</h1>
                </Datas>

                <Video controls controlsList="nodownload">
                    <source src={content.videoURL} type="video/mp4" />
                </Video>

                <Audio controls controlsList="nodownload">
                    <source src={content.audioURL} type="audio/mpeg" />
                </Audio>
                
                <CaixaTexto>
                    <Texto>
                        {content.text}
                    </Texto>
                </CaixaTexto>
                </>
                ))}
           
                <CaixaTitulo key={quizzes?.id}>
                    <TituloContents> Quiz </TituloContents>
                    <EditConteudo onClick={(event) => handleGoToQuizzes(event, quizzes)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip"> Alterar Quiz </TooltipEdit>
                    </EditConteudo>
                </CaixaTitulo>

                 {quizzes?.questions.map(quiz => (
                    <>
                <CaixaQuiz>

                    <Questao>
                        <TituloPergunta key={quiz.id}> {quiz.question} </TituloPergunta>

                        <Alternativas>
                        {quiz.alternatives.map( alt => (

                            <Alternativa>
                            <label for="alternative"><input type="checkbox" checked={alt.correct} disabled /> 
                            {alt.alternative}
                            </label>
                            </Alternativa>
                        ))}
                        </Alternativas>
                    </Questao>
                </CaixaQuiz>
                </>
                ))}
                </Caixa>
        </>

    );
};