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
import GridSubtopicos from "../components/GridSkills";

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

function Subtopicos() {
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

        <AddTopicoBtn href="/criarsubtopico">
            <img src={addIcon}/>
            <TooltipAdd className="tooltip">Criar Subtópico</TooltipAdd>
        </AddTopicoBtn>

        
        <Caixa>
            <Breadcrumbs>
                <BCLink href="/skill">Skills</BCLink>
                <BCLink href="/topicos">Inteligência Emocional</BCLink>
                <BCLink href="/subtopicos">Introdução</BCLink>
            </Breadcrumbs>

            
            <TituloListagens>Introdução</TituloListagens>
            
            <GridSubtopicos>
                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">O que vamos tratar no módulo?
                            <Tooltip className="tooltipTitulo">O que vamos tratar no módulo?</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">O que é liderança
                            <Tooltip className="tooltipTitulo">O que é liderança</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Liderança e Vulnerabilidade
                            <Tooltip className="tooltipTitulo">Liderança e Vulnerabilidade</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Tipos de Liderança
                            <Tooltip className="tooltipTitulo">Tipos de Liderança</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Como exercitar a liderança no dia a dia
                            <Tooltip className="tooltipTitulo">Como exercitar a liderança no dia a dia</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Lider x Chefe
                            <Tooltip className="tooltipTitulo">Lider x Chefe</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Exemplos de liderança
                            <Tooltip className="tooltipTitulo">Exemplos de liderança</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>

                <Card>
                    <CardTilte>
                        <CardLink href="/objetosaprendizagem" className="titulo">Lições Aprendidas
                            <Tooltip className="tooltipTitulo">Lições Aprendidas</Tooltip>
                        </CardLink>
                    </CardTilte>
                    
                    <CardEdit className="editar" href="/editarsubtopico">
                        <img src={editIcon}/>
                        <TooltipEdit className="tooltip">Editar Subtópico</TooltipEdit>
                    </CardEdit>

                    <CardTopicos>4 Objetos</CardTopicos>

                    <CardDatas>
                        <CardDataTitle>Criado em</CardDataTitle>
                        <CardDataTitle>Editado em</CardDataTitle>

                        <CardData>18/05/2022</CardData>
                        <CardData>21/05/2022</CardData>
                    </CardDatas>
                </Card>
            </GridSubtopicos>
        </Caixa>
    </>
  );
}

export default Subtopicos;