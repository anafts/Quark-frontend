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
import DescriptionText from "../components/Form/TextArea";
import CaixaInputCor from "../components/Form/CaixaInputCor";
import AddContBtn from "../components/Buttons/AddConteudo";

import CaixaInputArquivo from "../components/Form/CaixaInputArquivo";
import NomeArquivo from "../components/Form/NomeArquivo";
import LabelInputArquivo from "../components/Form/LabelInputArquivo";
import InputArquivo from "../components/Form/InputArquivo";
import addAudio from "../icons/add_audio.svg";
import addVideo from "../icons/add_video.svg";

function alterarNomeArquivoVideo() {
  const arquivo = document.getElementById("arquivoVideo");
  const nomeArquivo = document.getElementById("nomeArquivoVideo");
  var fileName = arquivo.value.split('/').pop().split('\\').pop();
  nomeArquivo.value = fileName;
}

function alterarNomeArquivoAudio() {
  const arquivo = document.getElementById("arquivoAudio");
  const nomeArquivo = document.getElementById("nomeArquivoAudio");
  var fileName = arquivo.value.split('/').pop().split('\\').pop();
  nomeArquivo.value = fileName;
}

function AdicionarConteudo() {
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
          <BCLink href="/conteudos">O que vamos falar nesse módulo?</BCLink>
          <BCLink>Adicionar conteúdos</BCLink>
        </Breadcrumbs>

        <Form>

          <Titulo1>Adicionar conteúdos</Titulo1>
          
          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoVideo" placeholder="Adicionar Vídeo" disabled/>
            <LabelInputArquivo for="arquivoVideo">
              <img src={addVideo} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoVideo" onChange={alterarNomeArquivoVideo} accept="video/mp4" />
          </CaixaInputArquivo>

          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoAudio" placeholder="Adicionar Áudio" disabled/>
            <LabelInputArquivo for="arquivoAudio">
              <img src={addAudio} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoAudio" onChange={alterarNomeArquivoAudio} accept="audio/mp3" />
          </CaixaInputArquivo>

          <DescriptionText placeholder="Adicionar Texto"/>
          <SalvarBtn type="Submit">Salvar</SalvarBtn>

        </Form>        
      </Caixa>
    </>
  );
}

export default AdicionarConteudo;