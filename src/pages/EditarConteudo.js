import React,  { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
import SaveButton from "../components/Buttons/Save";

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


function EditarConteudo() {

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [ video, setVideo ] = useState();
  const [ audio, setAudio ] = useState();
  const [ text, setText ] = useState(location.state?.text);

  const handleFileInputChange = (event) => {
    const files = event.currentTarget.files
    
    if (files.length) {
      const file = files[0]

      if (event.currentTarget.name === 'video') setVideo(file)
      if (event.currentTarget.name === 'audio') setAudio(file)

    }
  }

  const updateContentSubmmit = (event) => {
    event.preventDefault()

    const formData = new FormData()

    if (video) formData.append('video', video)
    if (audio) formData.append('audio', audio)
    if (text) formData.append('text', text)

    axios.put(`http://localhost:80/updateContent/${params.id}`, formData)
      .then((response) => {
        navigate(`/conteudos/${params.id}`)
      })
      .catch((error) => {
        navigate(`/editarconteudo/${params.id}`)
      })
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
          <BCLink to={`/conteudos/:methodsId`}>O que vamos falar nesse módulo?</BCLink>
          <BCLink>Alterar conteúdos</BCLink>
        </Breadcrumbs>

        <Form>

          <Titulo1>Alterar conteúdos</Titulo1>
          
          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoVideo"/>
            <LabelInputArquivo for="arquivoVideo">
              <img src={addVideo} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoVideo" onChange={handleFileInputChange} name="video" accept="video/mp4" />
          </CaixaInputArquivo>

          <CaixaInputArquivo>
            <NomeArquivo id="nomeArquivoAudio"/>
            <LabelInputArquivo for="arquivoAudio">
              <img src={addAudio} />
            </LabelInputArquivo>
            <InputArquivo type="file" id="arquivoAudio" onChange={handleFileInputChange} name="audio" accept="audio/mp3" />
          </CaixaInputArquivo>

          <DescriptionText onChange={event => setText(event.currentTarget.value)} value={text} />
          <SaveButton type="Submit" onClick={updateContentSubmmit}> Save </SaveButton>

        </Form>        
      </Caixa>
    </>
  );
}

export default EditarConteudo;