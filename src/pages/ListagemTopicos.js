import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import AddTopicoBtn from "../components/Buttons/Add";
import addIcon from '../icons/plus.svg';
import TooltipAdd from "../components/Tooltip/TooltipAdd";

import Caixa from "../components/Caixa";
import GridTopicos from "../components/GridSkills";

import Card from "../components/Card/CardInterno";
import CardTilte from "../components/Card/CardTitle";
import CardLink from "../components/Card/CardLink";
import CardTopicos from "../components/Card/CardTopicos";
import CardDatas from "../components/Card/CardDatas";
import CardData from "../components/Card/CardData";
import CardDataTitle from "../components/Card/CardDataTitle";
import TituloListagens from "../components/Titulos/TituloListagens";
import Tooltip from "../components/Tooltip/TooltipInterno";

import CardEdit from "../components/Card/CardEditInterno";
import editIcon from '../icons/editar.svg';
import TooltipEdit from "../components/Tooltip/TooltipEdit";

function Topicos() {
  return (
    <>
        <Navbar>
            <BackBtn href="javascript:history.back()">
                <img src={backIcon}/>
                <TooltipBack className="tooltip">Voltar</TooltipBack>
            </BackBtn>
        
            <LogoMenu  href="/skill"></LogoMenu>
        
            <PublicarBtn href="/publicar">Publicar</PublicarBtn>
        </Navbar>

        <AddTopicoBtn href="/criartopico">
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Tópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Caixa>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink>Inteligência Emocional</BCLink>
            </Breadcrumbs>

            
            <TituloListagens>Inteligência Emocional</TituloListagens>
            
            <GridTopicos>
                <Card>
                    <CardTilte>
                        <CardLink href="/subtopicos">Introdução
                            <Tooltip className="tooltipTitulo">Introdução</Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardEdit className="editar" href="/editartopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Tópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>8 Subtópicos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/subtopicos">Perfil Comportamental
                            <Tooltip className="tooltipTitulo">Perfil Comportamental</Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardEdit className="editar" href="/editartopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Tópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>3 Subtópicos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/subtopicos">Feedback
                            <Tooltip className="tooltipTitulo">Feedback</Tooltip>
                        </CardLink>
                    </CardTilte>

                    <CardEdit className="editar" href="/editartopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Tópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>3 Subtópicos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>
            </GridTopicos>
        </Caixa>
    </>
  );
}

export default Topicos;