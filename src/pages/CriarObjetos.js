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
import Input from "../components/Form/Input";
import DescriptionText from "../components/Form/TextArea";

function CriarObjetos() {
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
          <BCLink>Criar Objeto de Aprendizagem</BCLink>
        </Breadcrumbs>

        <Form>

          <Titulo1>Criar Objeto de Aprendizagem</Titulo1>
          <Input placeholder="Título" />
          <Input placeholder="Ordem" type="number" />
          <DescriptionText placeholder="Descrição"/>
          <SalvarBtn type="Submit">Salvar</SalvarBtn>

        </Form>        
      </Caixa>
    </>
  );
}

export default CriarObjetos;
