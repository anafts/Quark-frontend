import React,  { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publicar';
import BackBtn from '../components/Buttons/Back';
import { ReactComponent } from '../icons/back.svg';

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import MainTitle from "../components/Titulos/MainTitle";
import SaveButton from "../components/Buttons/Save";

import PathInput from "../components/Form/PathInput";
import DescriptionText from "../components/Form/TextArea";
import BoxInputColor from "../components/Form/BoxInputColor";
import AddContBtn from "../components/Buttons/AddContent";

import BoxFileInput from "../components/Form/BoxFileInput";
import FileName from "../components/Form/FileName";
import LabelInputFile from "../components/Form/LabelInputFile";
import InputFile from "../components/Form/InputFile";
import addAudio from "../icons/add_audio.svg";
import addVideo from "../icons/add_video.svg";


function UpdateContents() {

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

        <PublishBtn href="/publicar" className="oculto">Publicar</PublishBtn>
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

          <MainTitle>Alterar conteúdos</MainTitle>
          
          <BoxFileInput>
            <FileName id="nomeArquivoVideo"/>
            <LabelInputFile for="arquivoVideo">
              <img src={addVideo} />
            </LabelInputFile>
            <InputFile type="file" id="arquivoVideo" onChange={handleFileInputChange} name="video" accept="video/mp4" />
          </BoxFileInput>

          <BoxFileInput>
            <FileName id="nomeArquivoAudio"/>
            <LabelInputFile for="arquivoAudio">
              <img src={addAudio} />
            </LabelInputFile>
            <InputFile type="file" id="arquivoAudio" onChange={handleFileInputChange} name="audio" accept="audio/mp3" />
          </BoxFileInput>

          <DescriptionText onChange={event => setText(event.currentTarget.value)} value={text} />
          <SaveButton type="Submit" onClick={updateContentSubmmit}> Save </SaveButton>

        </Form>        
      </Caixa>
    </>
  );
}

export default UpdateContents;