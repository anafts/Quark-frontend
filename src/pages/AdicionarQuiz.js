import React from "react";

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
        <BCLink href="/skill">Skills</BCLink>
          <BCLink href="/topicos">Inteligência Emocional</BCLink>
          <BCLink href="/subtopicos">Introdução</BCLink>
          <BCLink href="/objetosaprendizagem">O que vamos tratar no módulo?</BCLink>
          <BCLink href="/quiz">Que conhecimentos prévios são importantes?</BCLink>
          <BCLink>Adicionar Quiz</BCLink>
        </Breadcrumbs>

        <Form>

          <Titulo1>Adicionar Quiz</Titulo1>
          <TituloQuestao>Questão</TituloQuestao>
          <Input placeholder="Inserir pergunta"></Input>
          <TituloQuestao>Opções</TituloQuestao>
            <CaixaInputCor>
                <InputCaminho placeholder="Inserir Alternativa" />
                <Select type="checkbox"/>
            </CaixaInputCor> 
            <CaixaInputCor>
          <InputCaminho placeholder="Inserir Alternativa" />
          <Select type="checkbox" />
            </CaixaInputCor> 
        <AddOpcao>Adicionar Alternativa</AddOpcao>
        <AddQuestao>Adicionar Questão</AddQuestao>
          <SalvarBtn type="Submit">Salvar</SalvarBtn>

        </Form>        
      </Caixa>
    </>
  );
}

export default AdicionarQuiz;