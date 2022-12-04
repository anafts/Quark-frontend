import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublishBtn from '../components/Buttons/Publish';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Box from "../components/Box";

import BoxPublish from "../components/Publish";

import Titulo from "../components/Title/ListTitle";

import Card from "../components/Card";
import SkillColor from "../components/Card/SkillColor";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import Tooltip from "../components/Tooltip";
import CardTopics from "../components/Card/CardTopics";
import CardDates from "../components/Card/CardDates";
import CardDateTitle from "../components/Card/CardDateTitle";
import CardDate from "../components/Card/CardDate";

import ButtonBox from "../components/Publish/ButtonBox";
import Cancel from "../components/Publish/Cancel";
import Confirm from "../components/Publish/Confirm";

function Publish() {
  return (
    <>
        <Navbar>
            <BackBtn href="javascript:history.back()">
                <img src={backIcon}/>
                <TooltipBack className="tooltip">Voltar</TooltipBack>
            </BackBtn>
        
            <LogoMenu  href="/skill"></LogoMenu>
        
            <PublishBtn href="/publicar" className="oculto">Publish</PublishBtn>
        </Navbar>
        
        <Box>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink href="/topicos">Inteligência Emocional</BCLink>
                <BCLink>Publish Skill</BCLink>
            </Breadcrumbs>

            <BoxPublish action="/skill">
                <Titulo>Publish Skill</Titulo>

                <Card>
                    <SkillColor className="cor" cor={'#FF9637'} />
                    
                    <CardTilte>
                        <CardLink>Inteligência Emocional
                            <Tooltip className="tooltipTitulo">Inteligência Emocional</Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardTopics>3 Tópicos</CardTopics>

                    <CardDates>
                        <CardDateTitle>Criado em</CardDateTitle>
                        <CardDateTitle>Editado em</CardDateTitle>

                        <CardDate>18/05/2022</CardDate>
                        <CardDate>21/05/2022</CardDate>
                    </CardDates>
                </Card>
                
                <ButtonBox>
                    <Cancel href="javascript:history.back()">Cancel</Cancel>
                    <Confirm>Confirm</Confirm>
                </ButtonBox>

            </BoxPublish>
            
        </Box>
    </>
  );
}

export default Publish;