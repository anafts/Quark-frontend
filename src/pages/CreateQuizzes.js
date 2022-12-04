import React,  { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publicar';
import BackBtn from '../components/Buttons/Back';
import { ReactComponent } from '../icons/back.svg';

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import SaveButton from "../components/Buttons/Save";

import PathInput from "../components/Form/PathInput";
import BoxInputColor from "../components/Form/BoxInputColor";
import Input from "../components/Form/Input";
import TituloQuestao from "../components/Titulos/TituloQuestao";
import Select from "../components/Form/Select";
import AddOption from "../components/Buttons/AddOption";
import AddQuestion from "../components/Buttons/AddQuestion";

function CreateQuizzes() {

  const params = useParams();
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);

  const createQuizzes = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:80/createQuizzes/${params.contentId}`, quizzes)
    .then((response) => {
      navigate(`/quiz/${params.contentId}`)
    })
    .catch((error) => {
      navigate(`/adicionarquiz/${params.contentId}`)
  })
  }

  const handleAddQuestion = () => {
    setQuizzes([
      ...quizzes,
      {
        id: new Date().getTime(),
        question: 'Questão',
        alternatives: []
      }
    ])
  }

  const handleAddAlternative = (questionId) => {
    const newQuizzes = quizzes.map(quiz => {
      if (quiz.id === questionId) {
        return {
          ...quiz,
          alternatives: [
            ...quiz.alternatives,
            { name: `alternative ${new Date().getTime()}`, value: '', correct: false }
          ]
        }
      }

      return quiz
    })

    setQuizzes(newQuizzes)
  }

  const handleQuestionNameChange = (event, questionId) => {
    const newQuizzes = quizzes.map(quiz => {
      if (quiz.id === questionId) {
        return {
          ...quiz,
          question: event.currentTarget.value
        }
      }

      return quiz
    })

    setQuizzes(newQuizzes)
  }

  const handleInputChange = (event, questionId) => {
    const name = event.currentTarget.name

    const newQuizzes = quizzes.map(quiz => {
      if (quiz.id === questionId) {
        return {
          ...quiz,
          alternatives: quiz.alternatives.map(alt => {
            if (alt.name === name) {
              return {
                ...alt,
                value: event.currentTarget.value
              }
            }

            return alt
          })
        }
      }

      return quiz
    })

    setQuizzes(newQuizzes)
  }
  
  const handleCheckboxChange = (event, questionId) => {
    const name = event.target.name

    const newQuizzes = quizzes.map(quiz => {
      if (quiz.id === questionId) {
        return {
          ...quiz,
          alternatives: quiz.alternatives.map(alt => {
            if (alt.name === name) {
              return {
                ...alt,
                correct: event.target.checked
              }
            }

            return alt
          })
        }
      }

      return quiz
    })

    setQuizzes(newQuizzes)
  }

  return (
    <>
      <Navbar>
        <BackBtn href="javascript:javascript:history.go(-1)">
          <ReactComponent />
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublishBtn href="/publicar" className="oculto">Publicar</PublishBtn>
      </Navbar>
      
      <Caixa>
        <Breadcrumbs>
          <BCLink to={'/skill'}> Skills </BCLink>
          <BCLink to={`/topicos/:skillId`}> Inteligência Emocional </BCLink>
          <BCLink to={`/subtopicos/:topicsId`}> Introdução </BCLink>
          <BCLink to={`/objetosaprendizagem/:subtopicsId`}> O que vamos tratar no módulo? </BCLink>
          <BCLink to={`/quiz/:contentId`}> Que conhecimentos prévios são importantes? </BCLink>
          <BCLink> Adicionar Quiz </BCLink>
        </Breadcrumbs>

        <Form onSubmit={createQuizzes} >

          <Titulo1>Adicionar Quiz</Titulo1>
          {
            quizzes.map(quiz => {
              return (
                <>
                  <TituloQuestao>{quiz.question}</TituloQuestao>
                  <Input onChange={(event) => handleQuestionNameChange(event, quiz.id)} placeholder="Inserir pergunta"></Input>
                  <TituloQuestao>Opções</TituloQuestao>
                    {
                      quiz.alternatives.map(alternative => (
                        <BoxInputColor>
                          <PathInput placeholder ="Inserir Alternativa" name={alternative.name} value={alternative.value} onChange={event => handleInputChange(event, quiz.id)} />
                          <Select type="checkbox" name={alternative.name} checked={alternative.correct} onChange={event => handleCheckboxChange(event, quiz.id)} />
                        </BoxInputColor> 
                      ))
                    }
                  <AddOption type="button" onClick={() => handleAddAlternative(quiz.id)}>Adicionar Alternativa</AddOption>
                </>
              )
            })
          }
        <AddQuestion type="button" onClick={handleAddQuestion}> Adicionar Questão </AddQuestion>
          <SaveButton type="Submit">Save</SaveButton>

        </Form>        
      </Caixa>
    </>
  );
}

export default CreateQuizzes;