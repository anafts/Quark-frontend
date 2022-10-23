import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Caixa from "../components/Caixa";
import Erro from "../components/Erro/index";
import ErroCodigo from "../components/Erro/ErroCodigo";
import ErroMensagem from "../components/Erro/ErroMensagem";

function NotFound() {
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
          <Erro>
              <ErroCodigo>404</ErroCodigo>
              <ErroMensagem>Oops!</ErroMensagem>
              <ErroMensagem>Página não encontrada :(</ErroMensagem>
          </Erro>
      </Caixa>
    </>
  );
}

export default NotFound;
