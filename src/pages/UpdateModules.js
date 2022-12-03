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
import Input from "../components/Form/Input";
import DescriptionText from "../components/Form/TextArea";

function UpdateModules() {

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [ title, setTitle ] = useState(location.state.title);
  const [ order, setOrder ] = useState(location.state.order);
  const [ description, setDescription ] = useState(location.state.description);

  const updateModulesSubmmit = (event) => {
    event.preventDefault()
 
    axios.put(`http://localhost:80/updateModules/${params.id}`, {
        title: title,
        order: order,
        description: description
         })
         .then((response) => {
             navigate(`/objetosaprendizagem/${params.id}`)
         })
         .catch((error) => {
             navigate(`/editarobjetos/${params.id}`)
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
        <BCLink>Editar Objeto de Aprendizagem</BCLink>
        </Breadcrumbs>

        <Form onSubmit={updateModulesSubmmit} >
          <Titulo1>Editar Objeto de Aprendizagem</Titulo1>

          <Input  onChange={event => setTitle(event.currentTarget.value)} value={title}  />
          <Input type="number"  onChange={event => setOrder(event.currentTarget.value)} value={order} />
          <DescriptionText onChange={event => setDescription(event.currentTarget.value)} value={description} />
          <SaveButton type="Submit">Save</SaveButton>

        </Form>        
      </Caixa>
    </>
  );
}

export default UpdateModules;