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

import Caixa from "../components/Caixa";
import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import CaixaTitulo from "../components/ObjetoDeAprendizagem/CaixaTitulo";
import TituloConteudos from "../components/ObjetoDeAprendizagem/TituloConteudos";
import EditConteudo from "../components/ObjetoDeAprendizagem/EditConteudo";
import editIcon from "../icons/editar.svg";
import TooltipEdit from "../components/Tooltip/TooltipEdit";

import Datas from "../components/ObjetoDeAprendizagem/Datas";

import CaixaQuiz from "../components/Quiz";
import Questao from "../components/Quiz/Questao";
import TituloPergunta from "../components/Quiz/TituloPergunta";
import Alternativas from "../components/Quiz/Alternativas";
import Alternativa from "../components/Quiz/Alternativa";

function dropdownVisivel() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

export default function Quiz(){
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
                    <BCLink>Que conhecimentos prévios são importantes?</BCLink>
                </Breadcrumbs>

                <CaixaTitulo>
                    <TituloConteudos>Que conhecimentos prévios são importantes?</TituloConteudos>
                    
                    <EditConteudo href="/editarquiz">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Alterar Conteúdos</TooltipEdit>
                    </EditConteudo>
                </CaixaTitulo>

                <Datas>
                    <h1>Criado em 10/08/2020</h1>
                    <h1>Editado em 07/06/2022</h1>
                </Datas>

                <CaixaQuiz>
                    <Questao>
                        <TituloPergunta>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ult?</TituloPergunta>

                        <Alternativas>
                            <Alternativa><label for="alt1"><input type="checkbox" id="alt1" disabled />Verdadeiro</label></Alternativa>
                            <Alternativa><label for="alt2"><input type="checkbox" id="alt2" checked disabled />Falso</label></Alternativa>
                        </Alternativas>
                    </Questao>

                    <Questao>
                        <TituloPergunta>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?</TituloPergunta>

                        <Alternativas>
                            <Alternativa><label for="alt1"><input type="checkbox" id="alt1" checked disabled />Alternativa 1</label></Alternativa>
                            <Alternativa><label for="alt2"><input type="checkbox" id="alt2" checked disabled />Alternativa 2</label></Alternativa>
                            <Alternativa><label for="alt3"><input type="checkbox" id="alt3" disabled />Alternativa 3</label></Alternativa>
                        </Alternativas>
                    </Questao>

                    <Questao>
                        <TituloPergunta>Lorem ipsum dolor sit amet?</TituloPergunta>

                        <Alternativas>
                            <Alternativa><label for="alt1"><input type="checkbox" id="alt1" checked disabled />Alternativa 1</label></Alternativa>
                            <Alternativa><label for="alt2"><input type="checkbox" id="alt2" checked disabled />Alternativa 2</label></Alternativa>
                            <Alternativa><label for="alt3"><input type="checkbox" id="alt3" checked disabled />Alternativa 3</label></Alternativa>
                        </Alternativas>
                    </Questao>
                </CaixaQuiz>
            </Caixa>
        </>
    );
};