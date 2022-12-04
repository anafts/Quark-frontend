import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";

import BackBtn from "../components/Buttons/Back";
import backIcon from "../icons/back.svg";
import TooltipBack from "../components/Tooltip/TooltipBack";

import PublishBtn from "../components/Buttons/Publish";

import AddContentBtn from "../components/Buttons/AddContent";
import addIcon from "../icons/plus.svg";
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import BoxContents from "../components/Buttons/BoxContents";
import DropdownContents from "../components/Buttons/DropdowContents";
import LinkContents from "../components/Buttons/LinkContents";

import Dates from "../components/ModuleBox/Dates";

import Box from "../components/Box";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import BoxTitle from "../components/ModuleBox/BoxTitle";
import ContentTitle from "../components/ModuleBox/ContentTitle";
import ContentUpdate from "../components/ModuleBox/ContentUpdate";
import editIcon from "../icons/editar.svg";
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import Video from "../components/ModuleBox/Video";
import Audio from "../components/ModuleBox/Audio";

import BoxText from "../components/ModuleBox/BoxText";
import Text from "../components/ModuleBox/Text";

import BoxQuiz from "../components/Quiz";
import Question from "../components/Quiz/Question";
import QuestionTittle from "../components/Quiz/QuestionTittle";
import AlternativesBox from "../components/Quiz/AlternativesBox";
import Alternative from "../components/Quiz/Alternative";

import { API_URL } from '../conts'

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
        axios.get("${API_URL}/content")
           .then((response) => {
             setContent(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
    
      useEffect(() => {
        axios.get(`${API_URL}/quizzes/${contents[0]?.id}`)
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

                <PublishBtn href="/publicar">Publish</PublishBtn>
            </Navbar>
            
            <BoxContents>
                <AddContentBtn onClick={handleOpenDropdown}>
                    <img src={addIcon}/>
                    <TooltipAdd className="tooltip">Adicionar Conteúdos</TooltipAdd>
                </AddContentBtn>

                <DropdownContents className={isOpen ? 'show' : ''}>
                    <LinkContents to={`/adicionarconteudo/${params.methodsId}`}> Adicionar Conteúdo </LinkContents>
                    <LinkContents style={{
                        display: quizzes ? 'none' : 'block'
                    }} to={`/adicionarquiz/${contents[0]?.id}`}> Adicionar Quiz </LinkContents>
                </DropdownContents>
            </BoxContents>



            <Box>
                <Breadcrumbs>
                    <BCLink to={'/skill'}> Skills </BCLink>
                    <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
                    <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
                    <BCLink to={`/objetosaprendizagem/:subtopicsId`}>O que vamos tratar no módulo?</BCLink>
                    <BCLink> O que vamos falar nesse módulo? </BCLink>
                </Breadcrumbs>

                
                {contents.map(content => (
                    <>
                <BoxTitle key={content.id}>
                    <ContentTitle>O que vamos falar nesse módulo?</ContentTitle>
                    <ContentUpdate onClick={(event) => handleGoToContent(event, content)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </ContentUpdate>
                </BoxTitle>
                
                <Dates>
                    <h1> Criado em {content.created_at.slice(-25, 10)}</h1>
                    <h1>Editado em {content.updated_at.slice(-25, 10)}</h1>
                </Dates>

                <Video controls controlsList="nodownload">
                    <source src={content.videoURL} type="video/mp4" />
                </Video>

                <Audio controls controlsList="nodownload">
                    <source src={content.audioURL} type="audio/mpeg" />
                </Audio>
                
                <BoxText>
                    <Text>
                        {content.text}
                    </Text>
                </BoxText>
                </>
                ))}
           
                <BoxTitle key={quizzes?.id}>
                    <ContentTitle> Quiz </ContentTitle>
                    <ContentUpdate onClick={(event) => handleGoToQuizzes(event, quizzes)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip"> Alterar Quiz </TooltipEdit>
                    </ContentUpdate>
                </BoxTitle>

                 {quizzes?.questions.map(quiz => (
                    <>
                <BoxQuiz>

                    <Question>
                        <QuestionTittle key={quiz.id}> {quiz.question} </QuestionTittle>

                        <AlternativesBox>
                        {quiz.alternatives.map( alt => (

                            <Alternative>
                            <label for="alternative"><input type="checkbox" checked={alt.correct} disabled /> 
                            {alt.alternative}
                            </label>
                            </Alternative>
                        ))}
                        </AlternativesBox>
                    </Question>
                </BoxQuiz>
                </>
                ))}
                </Box>
        </>

    );
};