import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Caixa from "../components/Caixa";
import Erro from "../components/Erro/index";
import CodeError from "../components/Erro/CodeError";
import ErrorMessage from "../components/Erro/ErrorMessage";

function NotFound() {
  return (
    <>
      <Navbar>
        <BackBtn href="javascript:history.back()">
          <img src={backIcon}/>
          <TooltipBack className="tooltip">Voltar</TooltipBack>
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublishBtn href="/publicar" className="oculto">Publicar</PublishBtn>
      </Navbar>
      
      <Caixa>
          <Erro>
              <CodeError>404</CodeError>
              <ErrorMessage>Oops!</ErrorMessage>
              <ErrorMessage>Página não encontrada :(</ErrorMessage>
          </Erro>
      </Caixa>
    </>
  );
}

export default NotFound;
