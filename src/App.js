import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Skills from "./pages/ListagemSkills";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import CriarSkill from "./pages/CriarSkills";
import EditarSkills from "./pages/EditarSkills";
import CriarTopicos from "./pages/CriarTopicos";
import EditarTopicos from "./pages/EditarTopicos";

import CriarSubtopicos from "./pages/CriarSubtopicos";
import EditarSubtopicos from "./pages/EditarSubtopicos";

import ObjetosAprendizagem from "./pages/ListagemObjetosAprendizagem";

import Conteudos from "./pages/ListagemConteudos";
import CriarObjetos from "./pages/CriarObjetos";
import EditarObjetos from "./pages/EditarObjetos";

import NotFound from "./pages/NotFound";
import Topicos from "./pages/ListagemTopicos";
import Subtopicos from "./pages/ListagemSubtopicos";

import AdicionarConteudo from "./pages/AdicionarConteudo";
import Quiz from "./pages/ListagemQuiz";
import AdicionarQuiz from "./pages/AdicionarQuiz";
import EditarQuiz from "./pages/EditarQuiz";
import EditarConteudo from "./pages/EditarConteudo";

import Publicar from "./pages/Publicar";

const App = () => {
  return (
    <Router>
        <Routes>

          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
         
          
          <Route exact path="/skill" element={<Skills/>}/>
          <Route exact path="/criarskill" element={<CriarSkill/>}/>
          <Route exact path="/editarskill/:id" element={<EditarSkills/>}/>

          <Route exact path="/topicos/:skillId" element={<Topicos/>}/>
          <Route exact path="/criartopico/:skillId" element={<CriarTopicos/>}/>
          <Route exact path="/editartopico/:id" element={<EditarTopicos/>}/>

          <Route exact path="/subtopicos/:topicsId" element={<Subtopicos/>}/>
          <Route exact path="/criarsubtopico/:topicsId" element={<CriarSubtopicos/>}/>
          <Route exact path="/editarsubtopico/:id" element={<EditarSubtopicos/>}/>

          <Route exact path="/objetosaprendizagem" element={<ObjetosAprendizagem/>}/>
          <Route exact path="/criarobjetos" element={<CriarObjetos/>}/>
          <Route exact path="/editarobjetos" element={<EditarObjetos/>}/>

          <Route exact path="/conteudos" element={<Conteudos/>}/>
          <Route exact path="/adicionarconteudo" element={<AdicionarConteudo/>}/>
          <Route exact path="/editarconteudo" element={<EditarConteudo/>}/>

          <Route exact path="/quiz" element={<Quiz/>}/>
          <Route exact path="/adicionarquiz" element={<AdicionarQuiz/>}/>
          <Route exact path="/editarquiz" element={<EditarQuiz/>}/>

          <Route exact path="/publicar" element={<Publicar/>}/>

          <Route path='*' exact={true} element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
