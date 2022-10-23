import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import SalvarBtn from "../components/Buttons/Salvar";
import Input from "../components/Form/Input";

function EditarTopicos() {
  return (
    <>
      <Navbar>
        <BackBtn href="javascript:history.back()">
          <img src={backIcon}/>
          <TooltipBack className="tooltip">Voltar</TooltipBack>
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>
      
      <Caixa>
        <Breadcrumbs>
          <BCLink href="/skill">Skills</BCLink>
          <BCLink href="/topicos">Inteligência Emocional</BCLink>
          <BCLink href="/subtopicos">Introdução</BCLink>
          <BCLink>Editar Tópico</BCLink>
        </Breadcrumbs>

        <Form>
          <Titulo1>Editar Tópico</Titulo1>
          <Input type="text" defaultValue="Introdução"/>
          <Input type="number" defaultValue="1"/>
          <Input type="url" defaultValue="/icons/inteligencia-emocional.svg"/>
          <Input type="url" defaultValue="/icons/inteligencia-emocional-desativado.svg"/>
          
          <SalvarBtn type="Submit">Salvar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default EditarTopicos;