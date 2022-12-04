import React,  { useState, useEffect } from "react";
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
import MainTitle from "../components/Titulos/MainTitle";
import SaveButton from "../components/Buttons/Save";

import PathInput from "../components/Form/PathInput";
import BoxInputColor from "../components/Form/BoxInputColor";
import Input from "../components/Form/Input";
import QuestionTitle from "../components/Titulos/QuestionTitle";
import Select from "../components/Form/Select";
import AddOption from "../components/Buttons/AddOption";
import AddQuestion from "../components/Buttons/AddQuestion";

function CreateQuizzes() {

  const params = useParams();
  const navigate = useNavigate();

  const [ quizzes, setQuizzes ] = useState();

  const updateQuiz = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:80/updateQuizzes/${params.id}`, quizzes)
    .then((response) => {
      navigate(`/conteudos/${params.id}`)
    })
    .catch((error) => {
      navigate(`/editarquiz/${params.id}`)
  })
  }

    useEffect(() => {
      axios.get(`http://localhost:80/quiz/${params.id}`)
      .then((response) => {
        setQuizzes(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }, [params.id]);

    const handleAddQuestion = () => {
      setQuizzes([
        ...quizzes,
        {
          id: new Date().getTime(),
          question: 'Question',
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
              { id: `alternative ${new Date().getTime()}`, value: '', correct: false }
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
              if (alt.id.toString() === name) {
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
              if (alt.id.toString() === name) {
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
          <BCLink to={`/topicos/:skillId`} >Inteligência Emocional</BCLink>
          <BCLink to={`/subtopicos/:topicsId`} >Introdução</BCLink>
          <BCLink to={`/objetosaprendizagem/:subtopicsId`}>O que vamos tratar no módulo?</BCLink>
          <BCLink to={`/quiz/:contentId`}>Que conhecimentos prévios são importantes?</BCLink>
          <BCLink>Editar Quiz</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateQuiz}>
      
          <MainTitle> Editar Quiz </MainTitle>
         <>
         {
            quizzes?.map( quiz => (

              <>
               <QuestionTitle> {quiz.question} </QuestionTitle>
               <Input value={quiz.question} onChange={event => handleQuestionNameChange(event, quiz.id)} />
               <QuestionTitle> Opções </QuestionTitle>

               {
                quiz.alternatives.map( alt => {

                  return (
                    <BoxInputColor >
                    <PathInput name={alt.id} value={alt.value} onChange={event => handleInputChange(event, quiz.id)} />
                    <Select name={alt.id} type="checkbox" checked={alt.correct} onChange={event => handleCheckboxChange(event, quiz.id)} />
                    </BoxInputColor> 
                  )

                })
               }
               <AddOption type="button" onClick={() => handleAddAlternative(quiz.id)}> Adicionar Alternative </AddOption>
              </>
            ))
          }
         </>

              <AddQuestion type="button" onClick={handleAddQuestion}>Adicionar Questão</AddQuestion>
              <SaveButton type="Submit">Save</SaveButton>
        
      </Form>        
    </Caixa>
    </>
  );
}

export default CreateQuizzes;