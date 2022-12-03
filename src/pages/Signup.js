import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import Titulo1 from "../components/Titulos/Titulo1";
import LoginLogo from "../components/Login/LoginLogo";
import FormLogin from "../components/Login";
import SaveButton from "../components/Buttons/Save"
import Logo from "../icons/logo.svg";
import Input from "../components/Form/Input";
import TituloPergunta from "../components/Quiz/TituloPergunta";



function Signup() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleFormSignup = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/signup', {
            email: email,
            password: password
        })
        .then((response) => {
            navigate('/')
        })
        .catch((error) => {
            
            navigate('/pages/NotFound')
        })
    }

    
    return (
        <>
        <FormLogin onSubmit={handleFormSignup}>

        <LoginLogo src={Logo} />
        <Titulo1> Crie sua conta!</Titulo1>

        <label htmlFor="email"> 
        <TituloPergunta> Digite o seu e-mail </TituloPergunta>
        <Input type="text" placeholder="email" onChange={ event => setEmail (event.currentTarget.value)} value={email}></Input>
        </label>

        <label htmlFor="password"> 
        <TituloPergunta> Crie uma senha </TituloPergunta>
        <Input type="password" placeholder="Senha" minLength="8" onChange={ event => setPassword (event.currentTarget.value)} value={password}></Input>
        </label>

        <SaveButton type="Submit"> Criar </SaveButton>


        </FormLogin>
        

        </>
    )
}

export default Signup;