import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";

import CaixaPublicar from "../components/Publicar";

import Titulo from "../components/Titulos/ListTitle";

import Card from "../components/Card";
import SkillColor from "../components/Card/SkillColor";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import Tooltip from "../components/Tooltip";
import CardTopics from "../components/Card/CardTopics";
import CardDates from "../components/Card/CardDates";
import CardDataTitle from "../components/Card/CardDataTitle";
import CardData from "../components/Card/CardData";

import ButtonBox from "../components/Publicar/ButtonBox";
import Cancel from "../components/Publicar/Cancel";
import Confirm from "../components/Publicar/Confirm";

function Publicar() {
  return (
    <>
        <Navbar>
            <BackBtn href="javascript:history.back()">
                <img src={backIcon}/>
                <TooltipBack className="tooltip">Voltar</TooltipBack>
            </BackBtn>
        
            <LogoMenu  href="/skill"></LogoMenu>
        
            <PublishBtn href="/publicar" className="oculto">Publicar</PublishBtn>
        </Navbar>
        
        <Caixa>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink href="/topicos">Inteligência Emocional</BCLink>
                <BCLink>Publicar Skill</BCLink>
            </Breadcrumbs>

            <CaixaPublicar action="/skill">
                <Titulo>Publicar Skill</Titulo>

                <Card>
                    <SkillColor className="cor" cor={'#FF9637'} />
                    
                    <CardTilte>
                        <CardLink>Inteligência Emocional
                            <Tooltip className="tooltipTitulo">Inteligência Emocional</Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardTopics>3 Tópicos</CardTopics>

                    <CardDates>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDates>
                </Card>
                
                <ButtonBox>
                    <Cancel href="javascript:history.back()">Cancel</Cancel>
                    <Confirm>Confirm</Confirm>
                </ButtonBox>

            </CaixaPublicar>
            
        </Caixa>
    </>
  );
}

export default Publicar;