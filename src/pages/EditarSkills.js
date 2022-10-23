import React from "react";

import Navbar from "../components/Navbar";
import LogoMenu from "../components/LogoMenu";
import PublicarBtn from '../components/Buttons/Publicar';

import BackBtn from '../components/Buttons/Back';
import backIcon from '../icons/back.svg';
import TooltipBack from "../components/Tooltip/TooltipBack";

import Breadcrumbs from "../components/Breadcrumbs";
import BCLink from "../components/Breadcrumbs/Link";

import Caixa from "../components/Caixa";
import Form from "../components/Form";
import Titulo1 from "../components/Titulos/Titulo1";
import Input from "../components/Form/Input";
import InputCor from "../components/Form/InputCor";
import CaixaInputCor from "../components/Form/CaixaInputCor";

import SalvarBtn from "../components/Buttons/Salvar";

var corSkill = '#FF9637';

function aterarCor1() {
  const cor1 = document.getElementById("cor1");
  const cor2 = document.getElementById("cor2");
  cor2.value = cor1.value;
}

function aterarCor2() {
  const cor2 = document.getElementById("cor2");
  const cor1 = document.getElementById("cor1");
  cor1.value = cor2.value.toUpperCase();
}

function EditarSkills() {

  return (
    <>
      <Navbar>
        <BackBtn href="javascript:history.back()">
          <img src={backIcon}/>
          <TooltipBack className="tooltip">Voltar</TooltipBack>
        </BackBtn>
        
        <LogoMenu href="/skill"></LogoMenu>

        <PublicarBtn href="/publicar" className="oculto">Publicar</PublicarBtn>
      </Navbar>

      <Caixa>
        <Breadcrumbs>
          <BCLink href="/skill">Skills</BCLink>
          <BCLink href="/topicos">Inteligência Emocional</BCLink>
          <BCLink>Editar Skill</BCLink>
        </Breadcrumbs>

        <Form>
          <Titulo1>Editar Skill</Titulo1>

          <Input type="text" defaultValue="Inteligência Emocional" />
          
          <CaixaInputCor>
            <InputCor type="text" id="cor1" defaultValue={corSkill} onChange={aterarCor1} />
            <InputCor type="color" id="cor2" defaultValue={corSkill} onChange={aterarCor2} />
          </CaixaInputCor>

          <SalvarBtn type="Submit">Editar</SalvarBtn>
        </Form>        
      </Caixa>
    </>
  );
}

export default EditarSkills;
