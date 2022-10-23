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

function EditarConteudo() {
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
          <BCLink>Alterar conteúdos</BCLink>
        </Breadcrumbs>

        <Form>

          <Titulo1>Alterar conteúdos</Titulo1>
          
          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoVideo" placeholder="Video_experimental.mp4" disabled/>
            <LabelInputArquivo for="arquivoVideo">
              <img src={addVideo} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoVideo" onChange={alterarNomeArquivoVideo} accept="video/mp4" />
          </CaixaInputArquivo>

          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoAudio" placeholder="Audio_experimental.mp3" disabled/>
            <LabelInputArquivo for="arquivoAudio">
              <img src={addAudio} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoAudio" onChange={alterarNomeArquivoAudio} accept="audio/mp3" />
          </CaixaInputArquivo>

          <DescriptionText defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <SalvarBtn type="Submit">Salvar</SalvarBtn>

        </Form>        
      </Caixa>
    </>
  );
}

export default EditarConteudo;