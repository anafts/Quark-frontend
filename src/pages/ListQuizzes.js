import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";


import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";

import BackBtn from "../components/Buttons/Back";
import backIcon from "../icons/back.svg";
import TooltipBack from "../components/Tooltip/TooltipBack";

import PublishBtn from "../components/Buttons/Publicar";

import AddContentBtn from "../components/Buttons/AddContent";
import addIcon from "../icons/plus.svg";
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import BoxContents from "../components/Buttons/BoxContents";
import DropdownContents from "../components/Buttons/DropdowContents";
import LinkContents from "../components/Buttons/LinkContents";

import Caixa from "../components/Caixa";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import BoxTitle from "../components/ModuleBox/BoxTitle";
import ContentTitle from "../components/ModuleBox/ContentTitle";
import ContentUpdate from "../components/ModuleBox/ContentUpdate";
import editIcon from "../icons/editar.svg";
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import Dates from "../components/ModuleBox/Dates";

import CaixaQuiz from "../components/Quiz";
import Questao from "../components/Quiz/Questao";
import TituloPergunta from "../components/Quiz/TituloPergunta";
import AlternativesBox from "../components/Quiz/AlternativesBox";
import Alternative from "../components/Quiz/Alternative";


export default function Quiz(){

    const navigate = useNavigate();
    const params = useParams();

    const [quizzes, setQuizzes] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:80/quizzes/`)
           .then((response) => {
             setQuizzes(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToQuizzes = (event, quizzes) => {
        event.preventDefault()
        
        navigate(`/editarquiz/${quizzes.id}`, {
          state: quizzes
        })
      }

    function handleOpenDropdown() {
        setIsOpen(!isOpen)
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
            
            <BoxContents>
                <AddContentBtn onClick={handleOpenDropdown}>
                    <img src={addIcon}/>
                    <TooltipAdd className="tooltip">Adicionar Conteúdos</TooltipAdd>
                </AddContentBtn>

                <DropdownContents className={ isOpen? 'show' : ''}>
                    <LinkContents href="/adicionarconteudo">Adicionar Conteúdo</LinkContents>
                    <LinkContents href="/adicionarquiz">Adicionar Quiz</LinkContents>
                </DropdownContents>
                
            </BoxContents>



            <Caixa>
                <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`}> Inteligência Emocional </BCLink>
                    <BCLink to={`/subtopicos/:topicsId`}> Introdução </BCLink>
                    <BCLink to={`/objetosaprendizagem/:subtopicsId`}> O que vamos tratar no módulo? </BCLink>
                    <BCLink> Que conhecimentos prévios são importantes? </BCLink>
                </Breadcrumbs>

                <BoxTitle>
                    <ContentTitle> Que conhecimentos prévios são importantes?</ContentTitle>
                    
                    <ContentUpdate onClick={(event) => handleGoToQuizzes(event, quizzes)}>
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </ContentUpdate>
                </BoxTitle>

                {quizzes.map(quiz => (
                    <>
                    <Dates key={quiz.id} >
                    <h1>Criado em {quiz.created_at.slice(-25, 10)} </h1>
                    <h1>Editado em {quiz.updated_at.slice(-25, 10)} </h1>
                    </Dates>

                <CaixaQuiz>

                    <Questao>
                        <TituloPergunta> {quiz.question} </TituloPergunta>

                        <AlternativesBox>
                            <Alternative>
                            <label for="alternative"><input type="checkbox" checked={quiz.correct} /> 
                            {quiz.alternative}
                            </label>
                            </Alternative>
                        </AlternativesBox>
                    </Questao>
                </CaixaQuiz>
                </>
                ))}
            </Caixa>
        </>
    );
};