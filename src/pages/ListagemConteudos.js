import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";

import BackBtn from "../components/Buttons/Back";
import backIcon from "../icons/back.svg";
import TooltipBack from "../components/Tooltip/TooltipBack";

import PublicarBtn from "../components/Buttons/Publicar";

import AddConteudoBtn from "../components/Buttons/AddConteudo";
import addIcon from "../icons/plus.svg";
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import CaixaConteudos from "../components/Buttons/CaixaConteudos";
import DropdownConteudos from "../components/Buttons/DropdowConteudos";
import LinkConteudos from "../components/Buttons/LinkConteudos";

import Datas from "../components/ObjetoDeAprendizagem/Datas";

import Caixa from "../components/Caixa";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import CaixaTitulo from "../components/ObjetoDeAprendizagem/CaixaTitulo";
import TituloConteudos from "../components/ObjetoDeAprendizagem/TituloConteudos";
import EditConteudo from "../components/ObjetoDeAprendizagem/EditConteudo";
import editIcon from "../icons/editar.svg";
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import Video from "../components/ObjetoDeAprendizagem/Video";
import video1 from "../videos/video1.mp4";

import Audio from "../components/ObjetoDeAprendizagem/Audio";
import audio1 from "../audios/audio1.mp3";

import CaixaTexto from "../components/ObjetoDeAprendizagem/CaixaTexto";
import Texto from "../components/ObjetoDeAprendizagem/Texto";

function dropdownVisivel() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

export default function ObjetosAprendizagem(){

    const [contents, setContent] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:80/content")
           .then((response) => {
             setContent(response.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

      const handleGoToContent= (event, content) => {
        event.preventDefault()
        
        navigate(`/editarconteudo/${content.id}`, {
          state: content
        })
      }

    return(
        <>
            <Navbar>
                <BackBtn href="javascript:history.back()">
                    <img src={backIcon}/>
                    <TooltipBack className="tooltip">Voltar</TooltipBack>
                </BackBtn>

                <LogoMenu href="/skill"></LogoMenu>

                <PublicarBtn href="/publicar">Publicar</PublicarBtn>
            </Navbar>
            
            <CaixaConteudos>
                <AddConteudoBtn onClick={dropdownVisivel}>
                    <img src={addIcon}/>
                    <TooltipAdd className="tooltip">Adicionar Conteúdos</TooltipAdd>
                </AddConteudoBtn>

                <DropdownConteudos id="dropdown">
                    <LinkConteudos to={`/adicionarconteudo/${params.methodsId}`}> Adicionar Conteúdo </LinkConteudos>
                    <LinkConteudos to={`/adicionarquiz/${params.contentId}`}>Adicionar Quiz</LinkConteudos>
                </DropdownConteudos>
            </CaixaConteudos>



            <Caixa>
                <Breadcrumbs>
                    <BCLink href="/skill">Skills</BCLink>
                    <BCLink href="/topicos">Inteligência Emocional</BCLink>
                    <BCLink href="/subtopicos">Introdução</BCLink>
                    <BCLink href="/objetosaprendizagem">O que vamos tratar no módulo?</BCLink>
                    <BCLink>O que vamos falar nesse módulo?</BCLink>
                </Breadcrumbs>

                
                {contents.map(content => (
                    <>
                <CaixaTitulo key={content.id}>
                    <TituloConteudos>O que vamos falar nesse módulo?</TituloConteudos>
                    <EditConteudo onClick={(event) => handleGoToContent(event, content)} >
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </EditConteudo>
                </CaixaTitulo>
                
                <Datas>
                    <h1> Criado em {content.created_at.slice(-25, 10)}</h1>
                    <h1>Editado em {content.updated_at.slice(-25, 10)}</h1>
                </Datas>

                <Video controls controlsList="nodownload">
                    <source src={content.videoURL} type="video/mp4" />
                </Video>

                <Audio controls controlsList="nodownload">
                    <source src={content.audioURL} type="audio/mpeg" />
                </Audio>
                
                <CaixaTexto>
                    <Texto>
                        {content.text}
                    </Texto>
                </CaixaTexto>
                </>
                ))}
            </Caixa>
        </>
    );
};