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

import Contents from "./pages/ListContent";
import CreateContents from "./pages/CreateContents";
import UpdateContents from "./pages/UpdateContents";

import Quiz from "./pages/ListQuizzes";
import CreateQuizzes from "./pages/CreateQuizzes";
import UpdateQuizzes from "./pages/UpdateQuizzes";

import NotFound from "./pages/NotFound";
import Publish from "./pages/Publish";

const App = () => {
  return (
    <Router>
        <Routes>

          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          
          <Route exact path="/skill" element={<Skills/>}/>
          <Route exact path="/criarskill" element={<CreateSkill/>}/>
          <Route exact path="/editarskill/:id" element={<UpdateSkills/>}/>

          <Route exact path="/topicos/:skillId" element={<Topics/>}/>
          <Route exact path="/criartopico/:skillId" element={<CreateTopics/>}/>
          <Route exact path="/editartopico/:id" element={<UpdateTopics/>}/>

          <Route exact path="/subtopicos/:topicsId" element={<Subtopics/>}/>
          <Route exact path="/criarsubtopico/:topicsId" element={<CreateSubTopics/>}/>
          <Route exact path="/editarsubtopico/:id" element={<EditarSubtopics/>}/>

          <Route exact path="/objetosaprendizagem/:subtopicsId" element={<Modules/>}/>
          <Route exact path="/criarobjeto/:subtopicsId" element={<CreateModules/>}/>
          <Route exact path="/editarobjetos/:id" element={<UpdateModules/>}/>

          <Route exact path="/conteudos/:methodsId" element={<Contents/>}/>
          <Route exact path="/adicionarconteudo/:methodsId" element={<CreateContents/>}/>
          <Route exact path="/editarconteudo/:id" element={<UpdateContents/>}/>

          <Route exact path="/quiz/:contentId" element={<Quiz/>}/>
          <Route exact path="/adicionarquiz/:contentId" element={<CreateQuizzes/>}/>
          <Route exact path="/editarquiz/:id" element={<UpdateQuizzes/>}/>

          <Route exact path="/publicar" element={<Publish/>}/>

          <Route path='*' exact={true} element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
