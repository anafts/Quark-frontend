import React from "react";
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
                    <LinkConteudos href="/adicionarconteudo">Adicionar Conteúdo</LinkConteudos>
                    <LinkConteudos href="/adicionarquiz">Adicionar Quiz</LinkConteudos>
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

                <CaixaTitulo>
                    <TituloConteudos>O que vamos falar nesse módulo?</TituloConteudos>
                    
                    <EditConteudo href="/editarconteudo">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </EditConteudo>
                </CaixaTitulo>
                
                <Datas>
                    <h1>Criado em 10/08/2020</h1>
                    <h1>Editado em 07/06/2022</h1>
                </Datas>

                <Video controls controlsList="nodownload">
                    <source src={video1} type="video/mp4" />
                </Video>

                <Audio controls controlsList="nodownload">
                    <source src={audio1} type="audio/mpeg" />
                </Audio>
                
                <CaixaTexto>
                    <Texto>
                        Lorem Ipsum is <strong>simply</strong> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <strong>1500s</strong>, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <strong>electronic typesetting</strong>, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem <strong>Ipsum passages</strong>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Texto>

                    <Texto>
                        Lorem Ipsum is <strong>simply</strong> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <strong>1500s</strong>, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <strong>electronic typesetting</strong>, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem <strong>Ipsum passages</strong>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Texto>
                </CaixaTexto>
            </Caixa>
        </>
    );
};