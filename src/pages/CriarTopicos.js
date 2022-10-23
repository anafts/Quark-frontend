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

function CriarTopicos() {
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
          <BCLink href="#">Criar Tópico</BCLink>
        </Breadcrumbs>

        <Form>
          <Titulo1>Criar Tópico</Titulo1>

          <Input placeholder="Título" />
          <Input  placeholder="Ordem" type="number" />
          <Input  placeholder="Ícone Ativo" type="url" />
          <Input  placeholder="Ícone Desativado"/>

          <SalvarBtn type="Submit">Salvar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default CriarTopicos;
