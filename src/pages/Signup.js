import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import MainTitle from "../components/Title/MainTitle";
import LoginLogo from "../components/Login/LoginLogo";
import FormLogin from "../components/Login";
import SaveButton from "../components/Buttons/Save"
import Logo from "../icons/logo.svg";
import Input from "../components/Form/Input";
import QuestionTittle from "../components/Quiz/QuestionTittle";

import { API_URL } from '../conts';



function Signup() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleFormSignup = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/signup`, {
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
        <MainTitle> Crie sua conta!</MainTitle>

        <label htmlFor="email"> 
        <QuestionTittle> Digite o seu e-mail </QuestionTittle>
        <Input type="text" placeholder="email" onChange={ event => setEmail (event.currentTarget.value)} value={email}></Input>
        </label>

        <label htmlFor="password"> 
        <QuestionTittle> Crie uma senha </QuestionTittle>
        <Input type="password" placeholder="Senha" minLength="8" onChange={ event => setPassword (event.currentTarget.value)} value={password}></Input>
        </label>

        <SaveButton type="Submit"> Criar </SaveButton>


        </FormLogin>
        

        </>
    )
}

export default Signup;