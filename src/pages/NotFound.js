import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Box from "../components/Box";
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

        <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
      </Navbar>
      
      <Box>
          <Erro>
              <CodeError>404</CodeError>
              <ErrorMessage>Oops!</ErrorMessage>
              <ErrorMessage>Página não encontrada :(</ErrorMessage>
          </Erro>
      </Box>
    </>
  );
}

export default NotFound;
