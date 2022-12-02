import React,  { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';
import BackBtn from '../components/Buttons/Back';
import { ReactComponent } from '../icons/back.svg';

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import SalvarBtn from "../components/Buttons/Salvar";

import InputCaminho from "../components/Form/InputCaminho";
import CaixaInputCor from "../components/Form/CaixaInputCor";
import Input from "../components/Form/Input";
import TituloQuestao from "../components/Titulos/TituloQuestao";
import Select from "../components/Form/Select";
import AddOpcao from "../components/Buttons/AddOpcao";
import AddQuestao from "../components/Buttons/AddQuestao";

function AdicionarQuiz() {

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

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
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
      
          <Titulo1> Editar Quiz </Titulo1>
         <>
         {
            quizzes?.map( quiz => (

              <>
               <TituloQuestao> {quiz.question} </TituloQuestao>
               <Input value={quiz.question} onChange={event => handleQuestionNameChange(event, quiz.id)} />
               <TituloQuestao> Opções </TituloQuestao>

               {
                quiz.alternatives.map( alt => {

                  return (
                    <CaixaInputCor >
                    <InputCaminho name={alt.id} value={alt.value} onChange={event => handleInputChange(event, quiz.id)} />
                    <Select name={alt.id} type="checkbox" checked={alt.correct} onChange={event => handleCheckboxChange(event, quiz.id)} />
                    </CaixaInputCor> 
                  )

                })
               }
               <AddOpcao type="button" onClick={() => handleAddAlternative(quiz.id)}> Adicionar Alternativa </AddOpcao>
              </>
            ))
          }
         </>

              <AddQuestao type="button" onClick={handleAddQuestion}>Adicionar Questão</AddQuestao>
              <SalvarBtn type="Submit">Salvar</SalvarBtn>
        
      </Form>        
    </Caixa>
    </>
  );
}

export default AdicionarQuiz;