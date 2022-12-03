import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Skills from "./pages/ListSkills";
import CreateSkill from "./pages/CreateSkills";
import UpdateSkills from "./pages/UpdateSkills";

import Topics from "./pages/ListTopics";
import CreateTopics from "./pages/CreateTopics";
import UpdateTopics from "./pages/UpdateTopics";

import Subtopics from "./pages/ListSubTopics";
import CreateSubTopics from "./pages/CreateSubTopics";
import EditarSubtopics from "./pages/UpdateSubTopics";

import Modules from "./pages/ListModules";
import CreateModules from "./pages/CreateModules";
import UpdateModules from "./pages/UpdateModules";

import Conteudos from "./pages/ListagemConteudos";
import AdicionarConteudo from "./pages/AdicionarConteudo";
import EditarConteudo from "./pages/EditarConteudo";

import Quiz from "./pages/ListagemQuiz";
import AdicionarQuiz from "./pages/AdicionarQuiz";
import EditarQuiz from "./pages/EditarQuiz";

import NotFound from "./pages/NotFound";
import Publicar from "./pages/Publicar";

const App = () => {
  return (
    <Router>
        <Routes>

          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          
          <Route exact path="/skill" element={<Skills/>}/>
          <Route exact path="/createskill" element={<CreateSkill/>}/>
          <Route exact path="/updateskill/:id" element={<UpdateSkills/>}/>

          <Route exact path="/topicos/:skillId" element={<Topics/>}/>
          <Route exact path="/criartopico/:skillId" element={<CreateTopics/>}/>
          <Route exact path="/editartopico/:id" element={<UpdateTopics/>}/>

          <Route exact path="/subtopicos/:topicsId" element={<Subtopics/>}/>
          <Route exact path="/criarsubtopico/:topicsId" element={<CreateSubTopics/>}/>
          <Route exact path="/editarsubtopico/:id" element={<EditarSubtopics/>}/>

          <Route exact path="/objetosaprendizagem/:subtopicsId" element={<Modules/>}/>
          <Route exact path="/criarobjeto/:subtopicsId" element={<CreateModules/>}/>
          <Route exact path="/editarobjetos/:id" element={<UpdateModules/>}/>

          <Route exact path="/conteudos/:methodsId" element={<Conteudos/>}/>
          <Route exact path="/adicionarconteudo/:methodsId" element={<AdicionarConteudo/>}/>
          <Route exact path="/editarconteudo/:id" element={<EditarConteudo/>}/>

          <Route exact path="/quiz/:contentId" element={<Quiz/>}/>
          <Route exact path="/adicionarquiz/:contentId" element={<AdicionarQuiz/>}/>
          <Route exact path="/editarquiz/:id" element={<EditarQuiz/>}/>

          <Route exact path="/publicar" element={<Publicar/>}/>

          <Route path='*' exact={true} element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
